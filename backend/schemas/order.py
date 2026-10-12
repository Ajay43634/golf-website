from pydantic import BaseModel, ConfigDict
from datetime import datetime
from schemas.product import ProductResponse


class OrderItemResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    product_id: int
    quantity: int
    unit_price: float
    product: ProductResponse


class OrderResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    user_id: int
    total_price: float
    status: str
    created_at: datetime
    items: list[OrderItemResponse]
