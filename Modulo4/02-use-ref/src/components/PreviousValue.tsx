import { useState, useEffect, useRef } from 'react'

export default function PreviousValue() {
  const [text, setText] = useState('')
  const previousRef = useRef('')

  useEffect(() => {
    previousRef.current = text
  }, [text])

  const previous = previousRef.current
  const actualText = text || '—'
  const previousText = previous || '—'
  const growth = text.length > previous.length ? 'creció' : text.length < previous.length ? 'se redujo' : 'mantuvo el mismo tamaño'

  return (
    <div style={{ maxWidth: 420, display: 'flex', flexDirection: 'column', gap: 12 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Pulsa letra por letra y observa cómo "Anterior" siempre muestra el valor previo.
      </p>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Escribe aquí..."
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <p style={{ margin: 0, color: '#111827' }}>
        Actual: <strong>{actualText}</strong>
      </p>
      <p style={{ margin: 0, color: '#111827' }}>
        Anterior: <strong>{previousText}</strong>
      </p>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Si se moviera `previousRef.current = text` al cuerpo del componente, Actual y Anterior serían iguales porque la ref se actualizaría antes de renderizar.
      </p>
      <p style={{ margin: 0, color: '#374151', fontSize: 14 }}>
        El texto {growth} ({previous.length} → {text.length})
      </p>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Desde aquí puedes volver a cualquier PASO anterior cambiando el número y guardando.
      </p>
    </div>
  )
}
