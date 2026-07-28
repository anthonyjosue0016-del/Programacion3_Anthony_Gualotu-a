// src/pages/ProductDetailPage_mp.tsx

import { useParams, Link } from 'react-router-dom'

// Define el tipo de los parÃ¡metros de la URL
interface ProductParams {
  id: string   // los params siempre son string â€” convierte si necesitas nÃºmero
}

export default function ProductDetailPage() {
  const { id } = useParams<ProductParams>()

  // Convierte a nÃºmero cuando lo necesites
  const productId = Number(id)

  if (!id || isNaN(productId)) {
    return <p style={{ color: '#ef4444' }}>ID de producto invÃ¡lido.</p>
  }

  return (
    <div>
      <Link
        to="/products"
        style={{ fontSize: 13, color: '#6b7280', textDecoration: 'none' }}
      >
        â† Volver a productos
      </Link>
      <h1 style={{ marginTop: 12 }}>Producto #{productId}</h1>
      <p style={{ color: '#6b7280' }}>
        AquÃ­ irÃ­a el detalle del producto con ID {productId}.
      </p>
    </div>
  )
}
