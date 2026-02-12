import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './components/App'

// main styles
import "./styles/main.css"
import { ChatProvider } from './context/ChatContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ChatProvider>
      <App />
    </ChatProvider>
  </StrictMode>,
)
