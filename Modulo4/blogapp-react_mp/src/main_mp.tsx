// src/main_mp.tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index_mp.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
