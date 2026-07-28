import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index_mp.css'
import AppMascotas from './AppMascotas_mp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppMascotas />
  </StrictMode>,
)

