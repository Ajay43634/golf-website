from pydantic import BaseModel, ConfigDict
from typing import Any, Optional
from datetime import datetime


class ProductBase(BaseModel):
    name: str
    category: str
    price: float
    description: Optional[str] = None
    image_url: Optional[str] = None
    stock: int = 0
    is_featured: bool = False
    attributes: Optional[Any] = {}


class ProductCreate(ProductBase):
    pass


class ProductResponse(ProductBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    created_at: datetime
