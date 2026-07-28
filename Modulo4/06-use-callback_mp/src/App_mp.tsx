// src/App_mp.tsx

import MemoizedList    from './components/MemoizedList'
import SearchWithFetch from './components/SearchWithFetch'
import FilterTable     from './components/FilterTable'
import PaginatedFetch  from './components/PaginatedFetch'

// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
// â”‚  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      â”‚
// â”‚  1  MemoizedList    â€” useCallback + React.memo: evita re-renders    â”‚
// â”‚  2  SearchWithFetch â€” useCallback en deps de useEffect (sin bucle)  â”‚
// â”‚  3  FilterTable     â€” tres callbacks estables, tabla memoizada      â”‚
// â”‚  4  PaginatedFetch  â€” useCallback con [page] para paginaciÃ³n        â”‚
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
const PASO = 1

export default function App() {
  const content =
    PASO === 1 ? <MemoizedList /> :
    PASO === 2 ? <SearchWithFetch /> :
    PASO === 3 ? <FilterTable /> :
    PASO === 4 ? <PaginatedFetch /> :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 720, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
