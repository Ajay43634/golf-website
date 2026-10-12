from sqlalchemy.orm import Session
from typing import Optional

from models.cart_item import CartItem
from schemas.cart import CartItemAdd, CartItemUpdate


def _base_query(db: Session, user_id: Optional[int], session_id: Optional[str]):
    if user_id:
        return db.query(CartItem).filter(CartItem.user_id == user_id)
    return db.query(CartItem).filter(CartItem.session_id == session_id)


def get_cart(db: Session, user_id: Optional[int], session_id: Optional[str]) -> list[CartItem]:
    if not user_id and not session_id:
        return []
    return _base_query(db, user_id, session_id).all()


def add_item(
    db: Session,
    user_id: Optional[int],
    session_id: Optional[str],
    item: CartItemAdd,
) -> CartItem:
    existing = _base_query(db, user_id, session_id).filter(
        CartItem.product_id == item.product_id
    ).first()

    if existing:
        existing.quantity += item.quantity
        db.commit()
        db.refresh(existing)
        return existing

    cart_item = CartItem(
        user_id=user_id,
        session_id=session_id if not user_id else None,
        product_id=item.product_id,
        quantity=item.quantity,
        attributes=item.attributes,
    )
    db.add(cart_item)
    db.commit()
    db.refresh(cart_item)
    return cart_item


def update_item(
    db: Session,
    user_id: Optional[int],
    session_id: Optional[str],
    item_id: int,
    update: CartItemUpdate,
) -> Optional[CartItem]:
    cart_item = _base_query(db, user_id, session_id).filter(CartItem.id == item_id).first()
    if not cart_item:
        return None
    cart_item.quantity = update.quantity
    db.commit()
    db.refresh(cart_item)
    return cart_item


def remove_item(
    db: Session,
    user_id: Optional[int],
    session_id: Optional[str],
    item_id: int,
) -> bool:
    cart_item = _base_query(db, user_id, session_id).filter(CartItem.id == item_id).first()
    if not cart_item:
        return False
    db.delete(cart_item)
    db.commit()
    return True
