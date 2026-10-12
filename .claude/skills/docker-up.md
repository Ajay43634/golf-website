Start all FairwayPro services using Docker Compose.

Run the following command from the project root:
```
docker compose -f docker/docker-compose.yml up --build
```

After running, inform the user:
- Frontend is available at http://localhost
- Backend API docs at http://localhost/api/docs
- Direct FastAPI at http://localhost:4000
- Direct Next.js at http://localhost:3000
