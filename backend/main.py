from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import products, auth, users, cart, orders

app = FastAPI(title="FairwayPro API", root_path="/api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(products.router)
app.include_router(auth.router)
app.include_router(users.router)
app.include_router(cart.router)
app.include_router(orders.router)


@app.get("/health")
async def health():
    return {"status": "ok"}
