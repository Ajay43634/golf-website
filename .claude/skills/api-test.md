Test all key FairwayPro API endpoints and report their status.

Run HTTP requests against the following endpoints and check for expected responses:

1. GET  /api/products              → 200, returns list
2. GET  /api/products?category=clubs → 200, returns filtered list
3. GET  /api/products/featured     → 200, returns list
4. GET  /api/products/1            → 200 or 404
5. POST /api/auth/register         → 201, test with dummy user
6. POST /api/auth/login            → 200, returns JWT token
7. GET  /api/cart                  → 200 or 401
8. POST /api/orders                → 401 (requires auth)
9. GET  /api/orders/me             → 401 (requires auth)

Use curl or httpx against http://localhost/api. Report each endpoint with its status code and whether it passed or failed. Summarize total passed/failed at the end.
