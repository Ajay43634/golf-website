from fastapi import APIRouter, Depends

from schemas.user import UserResponse
from auth import get_current_user
from models.user import User

router = APIRouter(prefix="/users", tags=["users"])


@router.get("/me", response_model=UserResponse)
def get_me(current_user: User = Depends(get_current_user)):
    return current_user
