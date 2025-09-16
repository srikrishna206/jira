import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Board from './components/Board'

export default function App(){ 
  return (
    <div style={{minHeight:'100vh'}}>
      <header style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <h1>Mini JIRA — Tickets</h1>
        <nav>
          <Link to='/'>Board</Link>
          <Link to='/service'>Service Desk</Link>
        </nav>
      </header>
      <main style={{marginTop:20}}>
        <Routes>
          <Route path='/' element={<Board />} />
          <Route path='/service' element={<div>Service Desk (list view)</div>} />
        </Routes>
      </main>
    </div>
  )
}
