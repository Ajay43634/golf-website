Scaffold a new FastAPI router for FairwayPro.

Ask the user for:
1. The resource name (e.g. "reviews", "wishlist")
2. Which HTTP methods to include (GET, POST, PUT, DELETE)

Then:
1. Create `backend/routers/<resource>.py` with the appropriate route stubs using FastAPI's APIRouter, Pydantic schemas, and async def handlers
2. Register the new router in `backend/main.py` by importing it and calling `app.include_router()`

Follow the existing router patterns in the codebase. Include proper response models, status codes, and dependency injection for the DB session.
