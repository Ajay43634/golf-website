from fastapi import APIRouter, Depends, HTTPException, Query
from sqlalchemy.orm import Session
from typing import Optional

from database import get_db
from schemas.product import ProductResponse
from crud.products import get_products, get_product_by_id, get_featured_products

router = APIRouter(prefix="/products", tags=["products"])

VALID_CATEGORIES = {"clubs", "balls", "apparel", "accessories"}


@router.get("/featured", response_model=list[ProductResponse])
def featured_products(db: Session = Depends(get_db)):
    return get_featured_products(db)


@router.get("", response_model=list[ProductResponse])
def list_products(
    category: Optional[str] = Query(None, description="Filter by category: clubs|balls|apparel|accessories"),
    db: Session = Depends(get_db),
):
    if category and category not in VALID_CATEGORIES:
        raise HTTPException(
            status_code=422,
            detail=f"Invalid category '{category}'. Must be one of: clubs, balls, apparel, accessories",
        )
    return get_products(db, category=category)


@router.get("/{product_id}", response_model=ProductResponse)
def get_product(product_id: int, db: Session = Depends(get_db)):
    product = get_product_by_id(db, product_id)
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")
    return product
