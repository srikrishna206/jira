import React from 'react'

export default function TicketCard({ ticket, onDragStart }){
  return (
    <div
      draggable
      onDragStart={(e)=> onDragStart(e, ticket.id)}
      style={{background:'#fff',padding:12,borderRadius:6,boxShadow:'0 1px 3px rgba(0,0,0,0.1)',marginBottom:8,cursor:'grab'}}
    >
      <div style={{fontWeight:600}}>{ticket.title}</div>
      <div style={{fontSize:12,color:'#666'}}>{ticket.type} • {ticket.priority}</div>
    </div>
  )
}
