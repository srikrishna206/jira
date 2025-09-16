import axios from 'axios'

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api' })

export const getBoard = () => API.get('/board')
export const createTicket = (payload) => API.post('/tickets', payload)
export const updateTicket = (id, payload) => API.patch(`/tickets/${id}`, payload)
export const getTickets = (params) => API.get('/tickets', { params })
