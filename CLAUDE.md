# FairwayPro — Claude.md

## What is this project?

FairwayPro is a full-stack golf equipment e-commerce web application built as a portfolio project. It is a single-store shop where customers can browse, filter, and purchase golf gear across four product categories: clubs, balls, apparel, and accessories.

The goal is to demonstrate real-world full-stack engineering skills — a production-style codebase with a proper data model, REST API, containerized deployment, and a polished frontend.

---

## Tech stack

| Layer | Technology | Notes |
|---|---|---|
| Frontend | Next.js (React) | App router, SSR, Tailwind CSS |
| Backend | FastAPI (Python) | REST API, Pydantic validation, async |
| Database | PostgreSQL | 4-entity relational model |
| ORM | SQLAlchemy + Alembic | Models + migrations |
| Reverse proxy | Nginx | Routes /api → FastAPI, / → Next.js |
| Containerization | Docker + Docker Compose | Single `docker compose up` to run everything |
| Auth | JWT (python-jose) + bcrypt | Stateless session tokens |

---

## Repository structure

```
fairwaypro/
├── frontend/               # Next.js app
│   ├── app/                # App router pages
│   │   ├── page.tsx        # Landing page
│   │   ├── clubs/          # Clubs category page
│   │   ├── balls/          # Balls category page
│   │   ├── apparel/        # Apparel category page
│   │   ├── accessories/    # Accessories category page
│   │   └── cart/           # Cart and checkout
│   ├── components/         # Shared UI components
│   └── lib/                # API client, helpers
├── backend/                # FastAPI app
│   ├── main.py             # App entry point
│   ├── models/             # SQLAlchemy models
│   ├── schemas/            # Pydantic schemas
│   ├── routers/            # Route handlers (products, auth, orders)
│   ├── crud/               # DB query functions
│   └── database.py         # DB connection setup
├── docker/
│   ├── docker-compose.yml  # All services wired together
│   └── nginx.conf          # Reverse proxy config
├── alembic/                # DB migrations
└── CLAUDE.md               # This file
```

---

## Data model (4 entities)

```
User
  id, name, email, password_hash, created_at

Product
  id, name, category (clubs|balls|apparel|accessories)
  price, description, image_url, stock, attributes (JSONB)

Order
  id, user_id (FK → User), total_price, status, created_at

OrderItem
  id, order_id (FK → Order), product_id (FK → Product)
  quantity, unit_price
```

The `attributes` JSONB column on Product stores category-specific variant data (e.g. flex, shaft model, color, size, glove size) without requiring separate tables per category.

---

## Key API endpoints

```
GET  /api/products              List all products (?category= filter)
GET  /api/products/featured     Featured products for landing page
GET  /api/products/{id}         Single product detail

POST /api/auth/register         Create account
POST /api/auth/login            Login → returns JWT

POST /api/cart                  Add item to cart (session or user-bound)
GET  /api/cart                  Get current cart

POST /api/orders                Place order from cart
GET  /api/orders/me             List current user's orders
GET  /api/orders/{id}           Single order detail
```

---

## How to run locally

```bash
# Clone and start everything
docker compose -f docker/docker-compose.yml up --build

# Frontend: http://localhost (via Nginx)
# Backend API docs: http://localhost/api/docs
# Direct FastAPI (bypassing Nginx): http://localhost:4000
# Direct Next.js (bypassing Nginx): http://localhost:3000
```

---

## Environment variables

Create a `.env` file in the project root:

```
DATABASE_URL=postgresql://user:password@db:5432/fairwaypro
SECRET_KEY=your-jwt-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=60
```

---

## Product categories and their variant fields

| Category | Required variant selectors |
|---|---|
| Clubs | Hand, Club Number/Loft, Flex, Shaft Material, Shaft Model |
| Balls | Color, Package Quantity |
| Apparel | Color, Size, Package Quantity |
| Accessories | Color, Glove Size, Package Quantity |

---

## What this project is NOT (MVP scope)

- No payment processing (no Stripe/PayPal)
- No user-submitted reviews (display static reviews only)
- No admin dashboard
- No email notifications
- No recommendation engine
