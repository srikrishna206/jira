import React, { useEffect, useState } from 'react'
import Column from './Column'
import { getTickets, updateTicket } from '../services/api'

const defaultColumns = ['Backlog', 'In Progress', 'Review', 'Done']

export default function Board(){
  const [columns] = useState(defaultColumns)
  const [tickets, setTickets] = useState([])

  useEffect(()=>{ fetchTickets() }, [])

  async function fetchTickets(){
    try{
      const res = await getTickets()
      setTickets(res.data)
    }catch(e){
      setTickets([
        {id:1, title:'Sample bug', status:'Backlog', type:'Bug', priority:'High'},
        {id:2, title:'Add feature X', status:'In Progress', type:'Task', priority:'Medium'},
      ])
    }
  }

  function onDragStart(e, id){
    e.dataTransfer.setData('text/plain', id)
  }

  async function handleDrop(e, column){
    e.preventDefault()
    const id = Number(e.dataTransfer.getData('text/plain'))
    const ticket = tickets.find(t=>t.id===id)
    if(!ticket) return
    const updated = {...ticket, status: column}
    setTickets(ts => ts.map(t=> t.id===id ? updated : t))
    try{ await updateTicket(id, { status: column }) }catch(err){ console.error(err) }
  }

  return (
    <div style={{display:'flex',gap:16}}>
      {columns.map(col => (
        <Column
          key={col}
          title={col}
          tickets={tickets.filter(t=>t.status===col)}
          onDrop={(e)=>handleDrop(e,col)}
          onDragOver={(e)=>e.preventDefault()}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  )
}
