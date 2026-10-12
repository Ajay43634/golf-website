Create a new Alembic database migration for FairwayPro.

Ask the user for a short migration name describing what changed (e.g. "add_stock_column", "create_orders_table").

Then run from the project root:
```
docker compose -f docker/docker-compose.yml exec backend alembic revision --autogenerate -m "<migration_name>"
```

After creating the migration, show the user the generated file path and remind them to review the auto-generated migration before applying it with:
```
docker compose -f docker/docker-compose.yml exec backend alembic upgrade head
```
