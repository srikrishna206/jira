# Jira-like Ticketing Tool — Starter (React + FastAPI + Azure)

## Quick start (local)

### Backend
```bash
cd backend
python -m venv .venv
source .venv/bin/activate   # on Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend
```bash
cd frontend
npm install
# set VITE_API_URL if backend is not on default
npm run dev
```

### Docker (quick)
```bash
docker-compose up --build
```

The scaffold includes minimal working frontend (Vite + React) and backend (FastAPI + SQLModel).
