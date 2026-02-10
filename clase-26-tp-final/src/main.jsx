import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Aside } from './components/Aside'
import { Chat } from './components/Chat'

// main styles
import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className='app'>
      <Aside />
      <Chat />
    </main>
  </StrictMode>,
)
