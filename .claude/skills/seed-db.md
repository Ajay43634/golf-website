Seed the FairwayPro PostgreSQL database with sample golf products across all 4 categories.

Create and run a seed script that inserts realistic sample data:

**Clubs** (5-8 products): drivers, irons, wedges, putters — with attributes: hand, flex, shaft_material, shaft_model, club_number
**Balls** (3-5 products): different brands and types — with attributes: color, quantity
**Apparel** (4-6 products): shirts, pants, hats — with attributes: color, size, quantity
**Accessories** (3-5 products): gloves, bags, tees — with attributes: color, glove_size, quantity

Use realistic product names, descriptions, prices, and stock levels. Insert via the SQLAlchemy models directly or via the POST /api/products endpoint.

Run the seed using:
```
docker compose -f docker/docker-compose.yml exec backend python seed.py
```
