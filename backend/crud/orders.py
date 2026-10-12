from sqlalchemy.orm import Session
from typing import Optional

from models.order import Order
from models.order_item import OrderItem
from models.product import Product
from models.cart_item import CartItem


def create_order(db: Session, user_id: int) -> Order:
    cart_items = db.query(CartItem).filter(CartItem.user_id == user_id).all()

    if not cart_items:
        raise ValueError("Cart is empty")

    # Validate stock before doing anything
    for item in cart_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        if not product:
            raise ValueError(f"Product {item.product_id} not found")
        if product.stock < item.quantity:
            raise ValueError(f"Insufficient stock for '{product.name}' (available: {product.stock})")

    # Calculate total
    total = sum(
        db.query(Product).filter(Product.id == item.product_id).first().price * item.quantity
        for item in cart_items
    )

    # Create order
    order = Order(user_id=user_id, total_price=total, status="confirmed")
    db.add(order)
    db.flush()

    # Create order items + decrement stock
    for item in cart_items:
        product = db.query(Product).filter(Product.id == item.product_id).first()
        db.add(OrderItem(
            order_id=order.id,
            product_id=item.product_id,
            quantity=item.quantity,
            unit_price=product.price,
        ))
        product.stock -= item.quantity

    # Clear cart
    for item in cart_items:
        db.delete(item)

    db.commit()
    db.refresh(order)
    return order


def get_orders_by_user(db: Session, user_id: int) -> list[Order]:
    return (
        db.query(Order)
        .filter(Order.user_id == user_id)
        .order_by(Order.created_at.desc())
        .all()
    )


def get_order_by_id(db: Session, order_id: int, user_id: int) -> Optional[Order]:
    return (
        db.query(Order)
        .filter(Order.id == order_id, Order.user_id == user_id)
        .first()
    )
