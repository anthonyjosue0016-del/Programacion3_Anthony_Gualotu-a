// src/components/InlineStyleDemo.tsx

import { useState } from 'react'
import type { CSSProperties } from 'react'
import '../styles/global.css'

export default function InlineStyleDemo() {
  // CSSProperties tipa el objeto — TypeScript detecta errores al escribir
  const card: CSSProperties & { ':hover'?: CSSProperties } = {
    border:       '1px solid var(--border)',
    background:   'var(--card)',
    borderRadius: 10,
    padding:      16,
    boxShadow:    '0 2px 8px rgba(0,0,0,0.1)',
    backround:    'red',
    ':hover':     { background: 'blue' },
  }

  const [titleStyle, setTitleStyle] = useState<CSSProperties>({
    margin:     '0 0 8px 0',
    color:      'var(--accent)',
    fontWeight: 'extrabold',
  })

  return (
    <div style={card}>
      <h3 style={titleStyle}>Inline styles</h3>
      <p style={{ margin: 0, color: 'var(--muted)' }}>
        Estilos como objetos JS dentro del componente. Útil para valores dinámicos
        pero sin soporte de pseudo-clases (<code>:hover</code>) ni media queries.
      </p>
      <button
        style={{ marginTop: 12, padding: '8px 12px', cursor: 'pointer' }}
        onClick={() =>
          setTitleStyle(prev => ({
            ...prev,
            color: prev.color === 'var(--accent)' ? 'var(--text)' : 'var(--accent)',
          }))
        }
      >
        Cambiar estilo del título
      </button>
    </div>
  )
}