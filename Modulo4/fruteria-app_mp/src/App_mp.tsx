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
// â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
// â”‚  Cambia PASO y guarda (Ctrl+S) para navegar entre componentes.          â”‚
// â”‚   1  WelcomeBanner       â€” banner estÃ¡tico sin props                    â”‚
// â”‚   2  UserGreeting        â€” props string + cÃ¡lculo de iniciales          â”‚
// â”‚   3  CurrentDateDisplay  â€” fecha calculada al renderizar                â”‚
// â”‚   4  ColoredBox          â€” estilos dinÃ¡micos con props numÃ©ricas        â”‚
// â”‚   5  ConditionalGreeting â€” renderizado condicional + tipo uniÃ³n         â”‚
// â”‚   6  FruitList           â€” lista tipada con .map()                      â”‚
// â”‚   7  PriceTag            â€” cÃ¡lculos con props numÃ©ricas                 â”‚
// â”‚   8  StatusBadge         â€” Record para mapear tipos a estilos           â”‚
// â”‚   9  MiniProfileCard     â€” composiciÃ³n de componentes                   â”‚
// â”‚  10  SimpleInfoTable     â€” tabla con rows tipadas                       â”‚
// â”‚  11  ProductCard         â€” interfaz de props con opcionales y booleanas â”‚
// â”‚  12  ProductCatalogList  â€” lista con renderizado condicional de items   â”‚
// â”‚  13  UserProfileCard     â€” ejercicio: props complejas + rol             â”‚
// â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
const PASO = 6 ;

const fruits = [
  { name: 'Manzana', emoji: 'ðŸŽ', calories: 52, inSeason: true },
  { name: 'Banana',  emoji: 'ðŸŒ', calories: 89, inSeason: false },
  { name: 'Naranja', emoji: 'ðŸŠ', calories: 47, inSeason: true },
  { name: 'Kiwi',    emoji: 'ðŸ¥', calories: 61, inSeason: true },
]

export default function App() {
  const content =
    PASO ===  1 ? (
      <WelcomeBanner subtitle="Aprende React 19 con TypeScript" />
    ) :
    PASO ===  2 ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <UserGreeting name="Carlos LÃ³pez Ruiz" />
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
        <StatusBadge status="pending" label="En espera" icon="â³" />
        <StatusBadge status="active" icon="âœ…" />
        <StatusBadge status="warning" icon="âš ï¸" />
        <StatusBadge status="error" icon="âŒ" />
      </div>
    ) :
    PASO ===  9 ? (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <MiniProfileCard
          fullName="Ana GarcÃ­a"
          role="Senior Developer"
          status="error"
          joinedYear={new Date().getFullYear()}
          avatarColor="#e11d48"
        />
        <MiniProfileCard
          fullName="Luis PÃ©rez"
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
          { label: 'EnvÃ­o',     value: '$5.00' },
          { label: 'IVA',       value: '$15.20' },
          { label: 'Descuento', value: 0 },
          { label: 'Total',     value: '$105.19', highlight: false },
        ]}
      />
    ) :
    PASO === 11 ? (
      <p style={{ color: '#e00' }}>
        Paso 11: el componente ProductCard aÃºn no estÃ¡ disponible.
      </p>
    ) :
    PASO === 12 ? (
      <p style={{ color: '#e00' }}>
        Paso 12: el componente ProductCatalogList aÃºn no estÃ¡ disponible.
      </p>
    ) :
    PASO === 13 ? (
      <p style={{ color: '#e00' }}>
        Paso 13: el componente UserProfileCard aÃºn no estÃ¡ disponible.
      </p>
    ) :
    <p style={{ color: '#e00' }}>Paso {PASO}: crea el componente primero</p>

  return (
    <main style={{ maxWidth: 540, margin: '40px auto', fontFamily: 'sans-serif', padding: '0 16px' }}>
      {content}
    </main>
  )
}
