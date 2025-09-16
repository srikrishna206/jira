from fastapi import FastAPI, Depends, HTTPException
from sqlmodel import Session
from .database import init_db, get_session
from .models import Ticket
from .crud import create_ticket, list_tickets, update_ticket

app = FastAPI(title='Jira-like Starter API')

@app.on_event('startup')
def on_startup():
    init_db()

@app.get('/api/board')
def board():
    return { 'columns': ['Backlog','In Progress','Review','Done'] }

@app.get('/api/tickets')
def get_tickets(session: Session = Depends(get_session)):
    return list_tickets(session)

@app.post('/api/tickets')
def post_ticket(ticket: Ticket, session: Session = Depends(get_session)):
    return create_ticket(session, ticket)

@app.patch('/api/tickets/{ticket_id}')
def patch_ticket(ticket_id: int, ticket_patch: dict, session: Session = Depends(get_session)):
    t = update_ticket(session, ticket_id, **ticket_patch)
    if not t:
        raise HTTPException(status_code=404, detail='Ticket not found')
    return t
