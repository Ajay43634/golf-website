Run linters and formatters across the FairwayPro codebase.

**Backend (Python):**
```
cd backend
black .
flake8 . --max-line-length=88 --extend-ignore=E203
```

**Frontend (TypeScript/React):**
```
cd frontend
npx prettier --check .
npx eslint . --ext .ts,.tsx
```

Report any errors or warnings found. If there are auto-fixable issues, ask the user if they want to apply the fixes automatically.
