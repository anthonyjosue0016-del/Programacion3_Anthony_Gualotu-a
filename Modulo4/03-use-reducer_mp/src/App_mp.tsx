// src/App_mp.tsx

import BasicCounter     from './components/BasicCounter'
import RegistrationForm from './components/RegistrationForm'
import ShoppingCart     from './components/ShoppingCart'
// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
// â”‚  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.       â”‚
// â”‚  1  BasicCounter      â€” useReducer bÃ¡sico con acciones tipadas       â”‚
// â”‚  2  RegistrationForm  â€” formulario con validaciÃ³n y estados de envÃ­o â”‚
// â”‚  3  ShoppingCart      â€” carrito de compras completo                  â”‚
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
const PASO: number = 3

export default function App() {
  const content =
    PASO === 1 ? <BasicCounter /> :
    PASO === 2 ? <RegistrationForm /> :
    PASO === 3 ? <ShoppingCart /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
