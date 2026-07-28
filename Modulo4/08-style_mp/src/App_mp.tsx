// src/App_mp.tsx

import { ThemeProvider }    from './theme/ThemeContext'
import CssGlobalDemo        from './components/CssGlobalDemo'
import InlineStyleDemo      from './components/InlineStyleDemo'
import CssModuleDemo        from './styles/CssModuleDemo'
import StyledComponentsDemo from './components/StyledComponentsDemo'
import LiveStyleEditor      from './components/LiveStyleEditor'
import HoverDemo            from './components/HoverDemo'
import ThemePanel           from './components/ThemePanel'
import './theme/theme_mp.css'

// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
// â”‚  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      â”‚
// â”‚  1  CssGlobalDemo        â€” clases globales y riesgo de colisiÃ³n     â”‚
// â”‚  2  InlineStyleDemo      â€” objetos JS, sin :hover ni @media         â”‚
// â”‚  3  CssModuleDemo        â€” scope local, :hover con CSS Modules      â”‚
// â”‚  4  StyledComponentsDemo â€” CSS-in-JS con props transient ($)        â”‚
// â”‚  5  LiveStyleEditor      â€” hook useStyles para estilos dinÃ¡micos    â”‚
// â”‚  6  HoverDemo            â€” hook useHover para efectos hover         â”‚
// â”‚  7  ThemePanel           â€” Context + CSS variables para theming     â”‚
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
const PASO = 7

export default function App() {
  const content =
    PASO === 1 ? <CssGlobalDemo /> :
    PASO === 2 ? <InlineStyleDemo /> :
    PASO === 3 ? <CssModuleDemo /> :
    PASO === 4 ? <StyledComponentsDemo /> :
    PASO === 5 ? <LiveStyleEditor /> :
    PASO === 6 ? <HoverDemo /> :
    PASO === 7 ? <ThemePanel /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <ThemeProvider>
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '32px 16px' }}>
        {content}
      </main>
    </ThemeProvider>
  )
}
