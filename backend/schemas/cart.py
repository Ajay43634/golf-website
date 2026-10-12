from pydantic import BaseModel, ConfigDict
from typing import Any
from datetime import datetime
from schemas.product import ProductResponse


class CartItemAdd(BaseModel):
    product_id: int
    quantity: int = 1
    attributes: dict = {}


class CartItemUpdate(BaseModel):
    quantity: int


class CartItemResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    product_id: int
    quantity: int
    attributes: Any
    product: ProductResponse
    created_at: datetime
