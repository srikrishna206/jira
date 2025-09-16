from sqlmodel import select
from .models import Ticket

def create_ticket(db, ticket: Ticket):
    db.add(ticket)
    db.commit()
    db.refresh(ticket)
    return ticket

def list_tickets(db):
    return db.exec(select(Ticket)).all()

def update_ticket(db, ticket_id: int, **patch):
    ticket = db.get(Ticket, ticket_id)
    if not ticket: return None
    for k,v in patch.items():
        if hasattr(ticket, k):
            setattr(ticket, k, v)
    db.add(ticket)
    db.commit()
    db.refresh(ticket)
    return ticket
