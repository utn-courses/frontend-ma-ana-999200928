import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Home } from './components/Home'
import { Test } from './components/Test'
import { Effect } from './components/Effect'

import "./styles/main.css"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Effect />
  </StrictMode>,
)
