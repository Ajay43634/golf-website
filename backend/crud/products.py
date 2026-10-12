from sqlalchemy.orm import Session
from typing import Optional
from models.product import Product


def get_products(db: Session, category: Optional[str] = None) -> list[Product]:
    query = db.query(Product)
    if category:
        query = query.filter(Product.category == category)
    return query.order_by(Product.id).all()


def get_product_by_id(db: Session, product_id: int) -> Optional[Product]:
    return db.query(Product).filter(Product.id == product_id).first()


def get_featured_products(db: Session) -> list[Product]:
    return db.query(Product).filter(Product.is_featured == True).all()  # noqa: E712
