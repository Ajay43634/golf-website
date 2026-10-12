Tear down all FairwayPro Docker services, wipe the database volume, and restart fresh.

Run these commands in order from the project root:
```
docker compose -f docker/docker-compose.yml down -v
docker compose -f docker/docker-compose.yml up --build
```

The `-v` flag removes all volumes including the PostgreSQL data. Warn the user that all database data will be lost before proceeding. Ask for confirmation first.
