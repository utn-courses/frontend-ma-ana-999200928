import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Saludo } from './App.jsx'
import { Header } from './Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Saludo nombre="Gustavo" />
    <Saludo nombre="Zoe" />
  </StrictMode>,
)
