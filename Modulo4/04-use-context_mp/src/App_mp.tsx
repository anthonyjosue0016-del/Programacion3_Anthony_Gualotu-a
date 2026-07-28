// src/App_mp.tsx

import { useAuth }  from './contexts/AuthContext'
import AppHeader    from './components/AppHeader'
import LoginForm    from './components/LoginForm'
import ThemeToggle  from './components/ThemeToggle'
import UserBadge    from './components/UserBadge'

// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
// â”‚  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      â”‚
// â”‚  1  ThemeToggle   â€” botÃ³n que alterna el tema desde el contexto     â”‚
// â”‚  2  UserBadge     â€” badge de usuario autenticado con logout         â”‚
// â”‚  3  LoginForm     â€” formulario de login conectado a AuthContext      â”‚
// â”‚  4  AppHeader     â€” header con dos contextos simultÃ¡neos            â”‚
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
const PASO = 4

export default function App() {
  const { state } = useAuth()

  const content =
    PASO === 1 ? <ThemeToggle /> :
    PASO === 2 ? <UserBadge /> :
    PASO === 3 ? <LoginForm /> :
    PASO === 4 ? <AppHeader /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {PASO === 4 ? content : (
        <>
          {state.user && (
            <p style={{ marginBottom: 16, fontSize: 14, color: '#6b7280' }}>
              SesiÃ³n activa: <strong>{state.user.name}</strong>
            </p>
          )}
          {content}
        </>
      )}
    </main>
  )
}
