import uuid
import os
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Request, Response
from sqlalchemy.orm import Session
from jose import jwt, JWTError

from database import get_db
from schemas.cart import CartItemAdd, CartItemUpdate, CartItemResponse
from crud import cart as crud_cart
from crud.users import get_user_by_email

router = APIRouter(prefix="/cart", tags=["cart"])

CART_COOKIE = "fairwaypro_cart"
SECRET_KEY = os.getenv("SECRET_KEY", "dev-secret-key")
ALGORITHM = os.getenv("ALGORITHM", "HS256")


def _get_identity(
    request: Request, response: Response, db: Session
) -> tuple[Optional[int], Optional[str]]:
    # Prefer JWT auth if present
    auth = request.headers.get("Authorization", "")
    if auth.startswith("Bearer "):
        try:
            payload = jwt.decode(auth[7:], SECRET_KEY, algorithms=[ALGORITHM])
            email = payload.get("sub")
            if email:
                user = get_user_by_email(db, email)
                if user:
                    return user.id, None
        except JWTError:
            pass

    # Fall back to session cookie
    session_id = request.cookies.get(CART_COOKIE)
    if not session_id:
        session_id = str(uuid.uuid4())
        response.set_cookie(
            CART_COOKIE, session_id, httponly=True, max_age=86400 * 30, samesite="lax"
        )
    return None, session_id


@router.get("", response_model=list[CartItemResponse])
def get_cart(request: Request, response: Response, db: Session = Depends(get_db)):
    user_id, session_id = _get_identity(request, response, db)
    return crud_cart.get_cart(db, user_id=user_id, session_id=session_id)


@router.post("", response_model=CartItemResponse, status_code=201)
def add_to_cart(
    item: CartItemAdd,
    request: Request,
    response: Response,
    db: Session = Depends(get_db),
):
    user_id, session_id = _get_identity(request, response, db)
    return crud_cart.add_item(db, user_id=user_id, session_id=session_id, item=item)


@router.patch("/{item_id}", response_model=CartItemResponse)
def update_cart_item(
    item_id: int,
    update: CartItemUpdate,
    request: Request,
    response: Response,
    db: Session = Depends(get_db),
):
    user_id, session_id = _get_identity(request, response, db)
    if update.quantity < 1:
        raise HTTPException(status_code=400, detail="Quantity must be at least 1")
    item = crud_cart.update_item(db, user_id, session_id, item_id, update)
    if not item:
        raise HTTPException(status_code=404, detail="Cart item not found")
    return item


@router.delete("/{item_id}", status_code=204)
def remove_cart_item(
    item_id: int,
    request: Request,
    response: Response,
    db: Session = Depends(get_db),
):
    user_id, session_id = _get_identity(request, response, db)
    if not crud_cart.remove_item(db, user_id, session_id, item_id):
        raise HTTPException(status_code=404, detail="Cart item not found")
