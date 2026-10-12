from sqlalchemy import Column, Integer, String, Numeric, DateTime, Boolean, func
from sqlalchemy.dialects.postgresql import JSONB
from database import Base


class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    category = Column(String, nullable=False)  # clubs|balls|apparel|accessories
    price = Column(Numeric(10, 2), nullable=False)
    description = Column(String)
    image_url = Column(String)
    stock = Column(Integer, default=0)
    is_featured = Column(Boolean, default=False)
    attributes = Column(JSONB, default={})
    created_at = Column(DateTime(timezone=True), server_default=func.now())
