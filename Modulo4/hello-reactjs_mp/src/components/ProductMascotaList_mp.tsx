interface Mascota {
  id: number
  tipo: string
  edad: number
  precio: number
  outOfStock?: boolean
}

interface MascotaCatalogListProps {
  Mascotas: Mascota[]
  title?: string
}

export default function MascotaCatalogList({
  Mascotas,
  title = 'CatÃ¡logo',
}: MascotaCatalogListProps) {
  return (
    <section>
      <h2 style={{ marginBottom: 16 }}>{title}</h2>

      {Mascotas.length === 0 && (
        <p style={{ color: '#999' }}>No hay Mascotaos disponibles.</p>
      )}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {Mascotas.map((Mascota) => (
          <li
            key={Mascota.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '10px 0',
              borderBottom: '1px solid #eee',
              opacity: Mascota.outOfStock ? 0.4 : 1,
            }}
          >
            <span>
              {Mascota.tipo}
              {Mascota.outOfStock && (
                <em style={{ marginLeft: 8, fontSize: 12, color: '#e00' }}>
                  Agotado
                </em>
              )}
            </span>
            <strong>${Mascota.edad.toFixed(2)}</strong>
          </li>
        ))}
      </ul>
    </section>
  )
}
