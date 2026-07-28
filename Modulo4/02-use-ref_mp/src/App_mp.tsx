// src/App_mp.tsx

import AutoFocusForm from './components/AutoFocusForm'
import Stopwatch from './components/Stopwatch'
import InlineEditor from './components/InlineEditor'
import PreviousValue from './components/PreviousValue'
// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
// â”‚  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       â”‚
// â”‚  1  AutoFocusForm    â€” foco automÃ¡tico y salto de campo con Enter   â”‚
// â”‚  2  Stopwatch        â€” interval guardado en ref, sin re-renders     â”‚
// â”‚  3  InlineEditor     â€” leer un input sin useState (ref no controlado)â”‚
// â”‚  4  PreviousValue    â€” guardar el valor anterior de un input        â”‚
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
const PASO = 3

export default function App() {
  const content = PASO === 1 ? <AutoFocusForm /> :
    PASO === 2 ? <Stopwatch /> :
    PASO === 3 ? <InlineEditor /> :
    PASO === 4 ? <PreviousValue /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 500, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}




