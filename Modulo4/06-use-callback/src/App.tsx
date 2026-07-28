// src/App.tsx

import MemoizedList    from './components/MemoizedList'
import SearchWithFetch from './components/SearchWithFetch'
import FilterTable     from './components/FilterTable'
import PaginatedFetch  from './components/PaginatedFetch'

// ┌──────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.      │
// │  1  MemoizedList    — useCallback + React.memo: evita re-renders    │
// │  2  SearchWithFetch — useCallback en deps de useEffect (sin bucle)  │
// │  3  FilterTable     — tres callbacks estables, tabla memoizada      │
// │  4  PaginatedFetch  — useCallback con [page] para paginación        │
// └──────────────────────────────────────────────────────────────────────┘
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