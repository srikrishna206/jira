import React from 'react'
import TicketCard from './TicketCard'

export default function Column({ title, tickets = [], onDrop, onDragOver, onDragStart }){
  return (
    <div style={{width:300, padding:12, background:'#e6e6e6', borderRadius:8}}>
      <h3 style={{marginTop:0}}>{title} ({tickets.length})</h3>
      <div onDrop={onDrop} onDragOver={onDragOver} style={{minHeight:200}}>
        {tickets.map(t => (
          <TicketCard key={t.id} ticket={t} onDragStart={onDragStart} />
        ))}
      </div>
    </div>
  )
}
