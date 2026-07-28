// src/App_mp.tsx

import PrimeSieve        from './components/PrimeSieve'
import FilteredCatalog   from './components/FilteredCatalog'
import OrderMetrics      from './components/OrderMetrics'
import MultiTagFilter    from './components/MultiTagFilter'

// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
// â”‚  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      â”‚
// â”‚  1  PrimeSieve       â€” useMemo para cÃ¡lculo costoso (criba primos)  â”‚
// â”‚  2  FilteredCatalog  â€” dos useMemo encadenados: filtrar â†’ ordenar   â”‚
// â”‚  3  OrderMetrics     â€” mÃºltiples useMemo derivados de un filtro     â”‚
// â”‚  4  MultiTagFilter   â€” filtro AND por tags con conteos memoizados   â”‚
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
const PASO = 2

export default function App() {
  const content =
    PASO === 1 ? <PrimeSieve /> :
    PASO === 2 ? <FilteredCatalog /> :
    PASO === 3 ? <OrderMetrics /> :
    PASO === 4 ? <MultiTagFilter /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 620, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
