import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppMascotas from './AppMascotas.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppMascotas />
  </StrictMode>,
)
