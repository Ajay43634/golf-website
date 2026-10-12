# FairwayPro

A full-stack golf equipment e-commerce web application built as a portfolio project. Customers can browse, filter, and purchase golf gear across four product categories: clubs, balls, apparel, and accessories.

**Local dev:** http://localhost:3000

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router, SSR, Tailwind CSS) |
| Backend | FastAPI (Python, Pydantic v2, async) |
| Database | PostgreSQL 15 with JSONB for product attributes |
| ORM | SQLAlchemy 2.0 + Alembic migrations |
| Reverse Proxy | Nginx (routes /api → FastAPI, / → Next.js) |
| Auth | JWT (python-jose) + bcrypt via passlib |
| Containerization | Docker + Docker Compose |

## Architecture

```
Browser
  └── Nginx :80
        ├── /api/*  →  FastAPI :4000
        └── /*      →  Next.js :3000
                              │
                        SSR fetches
                              │
                         FastAPI :4000
                              │
                         PostgreSQL :5432
```

## Quick Start

```bash
# Clone the repo
git clone <repo-url>
cd Golf_website

# Copy environment variables
cp .env.example .env

# Start all services
docker compose -f docker/docker-compose.yml up --build
```

- Frontend: http://localhost
- API docs (Swagger): http://localhost/api/docs
- Direct FastAPI: http://localhost:4000
- Direct Next.js: http://localhost:3000

## Seed the Database

After first run:

```bash
docker compose -f docker/docker-compose.yml exec backend python seed.py
```

This loads 12 products across all four categories.

## Project Structure

```
Golf_website/
├── frontend/               # Next.js app
│   ├── app/                # App router pages
│   ├── components/         # Shared UI components
│   └── lib/                # API client, types, helpers
├── backend/                # FastAPI app
│   ├── main.py             # App entry point
│   ├── models/             # SQLAlchemy models
│   ├── schemas/            # Pydantic schemas
│   ├── routers/            # Route handlers
│   ├── crud/               # DB query functions
│   └── database.py         # DB connection
├── docker/
│   ├── docker-compose.yml  # All services
│   └── nginx.conf          # Reverse proxy config
└── alembic/                # DB migrations
```

## API Endpoints

| Method | Path | Description |
|---|---|---|
| GET | /api/products | List products (?category= filter) |
| GET | /api/products/featured | Featured products |
| GET | /api/products/{id} | Single product |
| POST | /api/auth/register | Create account |
| POST | /api/auth/login | Login, returns JWT |
| GET | /api/cart | Get cart |
| POST | /api/cart | Add item to cart |
| PUT | /api/cart/{item_id} | Update quantity |
| DELETE | /api/cart/{item_id} | Remove item |
| POST | /api/orders | Place order |
| GET | /api/orders/me | Current user's orders |

## Product Categories

| Category | Variant Selectors |
|---|---|
| Clubs | Hand, Club Number/Loft, Flex, Shaft Material, Shaft Model |
| Balls | Color, Package Quantity |
| Apparel | Color, Size, Package Quantity |
| Accessories | Color, Glove Size, Package Quantity |

## MVP Scope

- No payment processing
- No user-submitted reviews
- No admin dashboard
- No email notifications
