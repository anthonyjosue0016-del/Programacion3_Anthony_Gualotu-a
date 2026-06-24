import WelcomeBanner       from './components/WelcomeBanner'
import UserGreeting        from './components/UserGreeting'
import CurrentDateDisplay  from './components/CurrentDateDisplay'

import ColoredBox          from './components/ColoredBox'
import ConditionalGreeting from './components/ConditionalGreeting'
import FruitList           from './components/FruitList'
import PriceTag            from './components/PriceTag'
import StatusBadge         from './components/StatusBadge'
import MiniProfileCard     from './components/MiniProfileCard'
import SimpleInfoTable     from './components/SimpleInfoTable'
/*import ProductCard         from './components/ProductCard'
import ProductCatalogList  from './components/ProductCatalogList'
import UserProfileCard     from './components/UserProfileCard'
*/
// ┌──────────────────────────────────────────────────────────────────────────┐
// │  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          │
// │   1  WelcomeBanner       — banner estático sin props                    │
// │   2  UserGreeting        — props string + cálculo de iniciales          │
// │   3  CurrentDateDisplay  — fecha calculada al renderizar                │
// │   4  ColoredBox          — estilos dinámicos con props numéricas        │
// │   5  ConditionalGreeting — renderizado condicional + tipo unión         │
// │   6  FruitList           — lista tipada con .map()                      │
// │   7  PriceTag            — cálculos con props numéricas                 │
// │   8  StatusBadge         — Record para mapear tipos a estilos           │
// │   9  MiniProfileCard     — composición de componentes                   │
// │  10  SimpleInfoTable     — tabla con rows tipadas                       │
// │  11  ProductCard         — interfaz de props con opcionales y booleanas │
// │  12  ProductCatalogList  — lista con renderizado condicional de items   │
// │  13  UserProfileCard     — ejercicio: props complejas + rol             │
// └──────────────────────────────────────────────────────────────────────────┘
const PASO = 6 ;

const fruits = [
  { name: 'Manzana', emoji: '🍎', calories: 52, inSeason: true },
  { name: 'Banana',  emoji: '🍌', calories: 89, inSeason: false },
  { name: 'Naranja', emoji: '🍊', calories: 47, inSeason: true },
  { name: 'Kiwi',    emoji: '🥝', calories: 61, inSeason: true },
]

export default function App() {
  const content =
    PASO ===  1 ? (
      <WelcomeBanner subtitle="Aprende React 19 con TypeScript" />
    ) :
    PASO ===  2 ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <UserGreeting name="Carlos López Ruiz" />
        <UserGreeting name="A" occupation="DevOps Engineer" online />
      </div>
    ) :
    PASO ===  3 ? <CurrentDateDisplay showTime /> :
    
    PASO ===  4 ? (
      <div style={{ display: 'flex', gap: 12 }}>
        <ColoredBox
          color="#f59e0b"
          width={120}
          height={40}
          onClick={() => alert('#f59e0b')}
          label="Primary"
        />
        <ColoredBox
          color="#8b5cf6"
          width={80}
          height={80}
          borderRadius={50}
          onClick={() => alert('#8b5cf6')}
          label="Circle"
        />
        <ColoredBox
          color="#ec4899"
          onClick={() => alert('#ec4899')}
        />
      </div>
    ) :
    PASO ===  5 ? (
      <ConditionalGreeting
        isLoggedIn={true}
        userName="Carlos"
        timeOfDay="morning"
      />
    ) :
    PASO ===  6 ? <FruitList fruits={fruits} title="Frutas favoritas" /> :
    PASO ===  7 ? (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-end' }}>
        <PriceTag amount={99.99} currency="EUR" discountPercent={50} size="large" />
        <PriceTag amount={149.99} currency="GBP" size="small" />
      </div>
    ) :
    PASO ===  8 ? (
      <div style={{ display: 'flex', gap: 8 }}>
        <StatusBadge status="pending" label="En espera" icon="⏳" />
        <StatusBadge status="active" icon="✅" />
        <StatusBadge status="warning" icon="⚠️" />
        <StatusBadge status="error" icon="❌" />
      </div>
    ) :
    PASO ===  9 ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <MiniProfileCard
          fullName="Ana García"
          role="Senior Developer"
          status="error"
          joinedYear={new Date().getFullYear()}
          avatarColor="#e11d48"
        />
        <MiniProfileCard
          fullName="Luis Pérez"
          role="Product Manager"
          department="Marketing"
          status="active"
          joinedYear={new Date().getFullYear() - 3}
          avatarColor="#0ea5e9"
        />
      </div>
    ) :
    PASO === 10 ? (
      <SimpleInfoTable
        title="Detalle de costos"
        striped
        rows={[
          { label: 'Subtotal',  value: '$89.99' },
          { label: 'Envío',     value: '$5.00' },
          { label: 'IVA',       value: '$15.20' },
          { label: 'Descuento', value: 0 },
          { label: 'Total',     value: '$105.19', highlight: false },
        ]}
      />
    ) :
    PASO === 11 ? (
      <p style={{ color: '#e00' }}>
        Paso 11: el componente ProductCard aún no está disponible.
      </p>
    ) :
    PASO === 12 ? (
      <p style={{ color: '#e00' }}>
        Paso 12: el componente ProductCatalogList aún no está disponible.
      </p>
    ) :
    PASO === 13 ? (
      <p style={{ color: '#e00' }}>
        Paso 13: el componente UserProfileCard aún no está disponible.
      </p>
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}