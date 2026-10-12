# FairwayPro — Roadmap

Each module is a self-contained chunk of work that can be built, tested, and merged independently. Complete modules in order — later modules depend on earlier ones.

---

## Module 1 — Project scaffold & Docker setup

**Goal:** One command spins up the full environment. No app logic yet, just the skeleton running.

Tasks:
- [ ] Initialize Next.js frontend (`npx create-next-app`)
- [ ] Initialize FastAPI backend with `main.py` and a `/health` endpoint
- [ ] Set up PostgreSQL service in Docker Compose
- [ ] Write `docker/docker-compose.yml` with all four services (frontend, backend, db, nginx)
- [ ] Write `docker/nginx.conf` — route `/api/` → FastAPI, `/` → Next.js
- [ ] Confirm `docker compose up --build` runs with no errors
- [ ] Confirm `/health` returns `{"status": "ok"}` through Nginx

**Done when:** `curl localhost/api/health` returns 200 and the Next.js default page loads at `localhost`.

---

## Module 2 — Database models & migrations

**Goal:** PostgreSQL schema is defined in code and migrations run cleanly.

Tasks:
- [ ] Install SQLAlchemy + Alembic + asyncpg
- [ ] Write `backend/database.py` — connection setup, session factory
- [ ] Write SQLAlchemy models: `User`, `Product`, `Order`, `OrderItem`
- [ ] Add `attributes` JSONB column to `Product`
- [ ] Initialize Alembic (`alembic init alembic`)
- [ ] Write and run initial migration (`alembic upgrade head`)
- [ ] Write seed script `backend/seed.py` with sample products for all 4 categories:
  - Clubs: TaylorMade QI4D Fairway, Ping G440 Hybrid, TaylorMade P790 Irons (×3 variants), Titleist GT4 Driver
  - Balls: Titleist Pro V1, Callaway Supersoft, Bridgestone e6 Soft, Srixon Soft Feel
  - Apparel: Nike Dri-Fit Par 5 Polo, Nike Velocity Stripe Polo, TravisMathew Sun Society Cap
  - Accessories: FootJoy WeatherSof Golf Glove Two Pack

**Done when:** `alembic upgrade head` succeeds and seed script populates all tables.

---

## Module 3 — Products API

**Goal:** Frontend can fetch product data from the backend.

Tasks:
- [ ] Write Pydantic schemas: `ProductBase`, `ProductCreate`, `ProductResponse`
- [ ] Write CRUD functions: `get_products`, `get_product_by_id`, `get_featured_products`
- [ ] Write `backend/routers/products.py` with routes:
  - `GET /api/products` (optional `?category=` query param)
  - `GET /api/products/featured`
  - `GET /api/products/{id}`
- [ ] Register router in `main.py`
- [ ] Test all endpoints in FastAPI Swagger UI (`/api/docs`)

**Done when:** `GET /api/products?category=clubs` returns seeded club data as JSON.

---

## Module 4 — Auth (register & login)

**Goal:** Users can create accounts and log in. Protected routes require a valid JWT.

Tasks:
- [ ] Install `python-jose`, `passlib[bcrypt]`
- [ ] Write `backend/auth.py` — password hashing, JWT creation and verification
- [ ] Write Pydantic schemas: `UserCreate`, `UserResponse`, `Token`
- [ ] Write CRUD: `create_user`, `get_user_by_email`
- [ ] Write `backend/routers/auth.py`:
  - `POST /api/auth/register`
  - `POST /api/auth/login` → returns `{ access_token, token_type }`
- [ ] Write `get_current_user` dependency (decode JWT from Authorization header)
- [ ] Protect `GET /api/users/me` with the dependency
- [ ] Test register → login → access protected route flow

**Done when:** Register a user, log in, use the token to hit `/api/users/me` and get back user data.

---

## Module 5 — Frontend: landing page

**Goal:** The landing page renders with real data from the API.

Tasks:
- [ ] Set up Tailwind CSS in Next.js
- [ ] Write `lib/api.ts` — typed fetch wrapper pointing at `/api`
- [ ] Build `Navbar` component — logo, search bar (UI only), user icon, cart icon with badge
- [ ] Build `FeaturedProducts` section — fetch from `/api/products/featured`, render 3 product cards
- [ ] Build `BrowseByCategory` section — 4 category cards (Clubs, Balls, Apparel, Accessories), each links to its category route
- [ ] Build `Footer` component
- [ ] Wire together on `app/page.tsx`

**Done when:** Landing page loads with real product data, category cards are clickable.

---

## Module 6 — Frontend: category pages

**Goal:** Each category page lists its products fetched from the API.

Tasks:
- [ ] Build reusable `ProductCard` component (image, name, price, review stars, Add to Cart button)
- [ ] Build `app/clubs/page.tsx` — fetch `?category=clubs`, show sub-category filter tabs (Drivers, Fairways, Hybrids, Irons, Wedges, Putters, Package Sets), filter client-side
- [ ] Build `app/balls/page.tsx` — fetch `?category=balls`, grid of product cards
- [ ] Build `app/apparel/page.tsx` — fetch `?category=apparel`, grid of product cards
- [ ] Build `app/accessories/page.tsx` — fetch `?category=accessories`, grid of product cards
- [ ] Make all product cards link to `/products/[id]`

**Done when:** Clicking any category from the landing page shows that category's products.

---

## Module 7 — Frontend: product detail pages

**Goal:** Each product has a detail page with the correct variant selectors for its category.

Tasks:
- [ ] Build `app/products/[id]/page.tsx` — fetch `/api/products/{id}`
- [ ] Build variant selector components:
  - `SelectField` — generic dropdown (used for Hand, Flex, Shaft Material, etc.)
  - `SizeSelector` — button grid (used for Size, Club Number/Loft)
  - `QuantityInput` — +/- stepper
- [ ] Render the correct selectors based on `product.category`:
  - clubs → Hand, Club Number/Loft, Flex, Shaft Material, Shaft Model
  - balls → Color, Package Quantity
  - apparel → Color, Size, Package Quantity
  - accessories → Color, Glove Size, Package Quantity
- [ ] Show Reviews section (static placeholder stars + text for MVP)
- [ ] Disable Add to Cart until all required selectors are chosen

**Done when:** Every product detail page renders the right selectors and the Add to Cart button activates only when all fields are filled.

---

## Module 8 — Cart (backend + frontend)

**Goal:** Users can add products to a cart and see what's in it.

Tasks:
- [ ] Decide cart storage strategy: session-based (cookie) for guests, user-bound in DB for logged-in users
- [ ] Write `backend/routers/cart.py`:
  - `POST /api/cart` — add item (product_id, quantity, selected attributes)
  - `GET /api/cart` — return current cart items
  - `DELETE /api/cart/{item_id}` — remove item
  - `PATCH /api/cart/{item_id}` — update quantity
- [ ] Build `app/cart/page.tsx` — list cart items, quantities, unit prices, total
- [ ] Wire Add to Cart button on product detail page to `POST /api/cart`
- [ ] Update Navbar cart badge count from cart state
- [ ] Allow quantity edit and item removal from cart page

**Done when:** Add a club with variants to cart, view cart page, see correct item + total, remove item.

---

## Module 9 — Checkout & orders

**Goal:** A logged-in user can place an order. The order is saved to the database.

Tasks:
- [ ] Write `backend/routers/orders.py`:
  - `POST /api/orders` — create Order + OrderItems from current cart, decrement stock (auth required)
  - `GET /api/orders/me` — list current user's orders (auth required)
  - `GET /api/orders/{id}` — get single order detail (auth required)
- [ ] Write Pydantic schemas: `OrderCreate`, `OrderResponse`, `OrderItemResponse`
- [ ] Build checkout flow on `app/cart/page.tsx` — "Place Order" button (requires login)
- [ ] Build `app/orders/page.tsx` — list past orders
- [ ] Build `app/orders/[id]/page.tsx` — order detail / confirmation screen
- [ ] Handle the unauthenticated case — redirect to login before checkout

**Done when:** Log in, add items to cart, place order, see order confirmation, check `/api/orders/me`.

---

## Module 10 — Auth UI (register & login pages)

**Goal:** Users can register and log in through the frontend.

Tasks:
- [ ] Build `app/login/page.tsx` — email + password form, calls `POST /api/auth/login`, stores JWT in httpOnly cookie or localStorage
- [ ] Build `app/register/page.tsx` — name + email + password form, calls `POST /api/auth/register`
- [ ] Update Navbar to show user icon when logged in, login link when logged out
- [ ] Add auth context / hook (`useAuth`) to share login state across the app
- [ ] Protect `/cart/checkout` and `/orders` — redirect to `/login` if not authenticated

**Done when:** Register → auto-login → land on home. Log out → cart badge still works (guest mode).

---

## Module 11 — Polish & deployment prep

**Goal:** App is presentable as a portfolio project and deployable.

Tasks:
- [ ] Add loading skeletons on category and product pages
- [ ] Add error boundaries and 404 page
- [ ] Make all pages mobile-responsive (375px, 768px, 1280px breakpoints)
- [ ] Add `<title>` and meta tags per page for SEO
- [ ] Write a proper `README.md` with setup instructions, screenshots, and architecture diagram
- [ ] Add `.env.example` file
- [ ] Set `NODE_ENV=production` in Docker Compose for frontend
- [ ] Test full flow end-to-end: register → browse → add to cart → place order
- [ ] Push to GitHub with all modules complete

**Done when:** A recruiter can clone the repo, run `docker compose up`, and use the full app.

---

## Module order summary

```
M1 Scaffold → M2 DB models → M3 Products API → M4 Auth API
                                    ↓                ↓
                              M5 Landing page   M10 Auth UI
                                    ↓
                              M6 Category pages
                                    ↓
                              M7 Product detail
                                    ↓
                               M8 Cart
                                    ↓
                               M9 Orders
                                    ↓
                              M11 Polish
```
