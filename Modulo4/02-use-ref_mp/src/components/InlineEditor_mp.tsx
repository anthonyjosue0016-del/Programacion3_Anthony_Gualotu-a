// src/components/InlineEditor_mp.tsx

import { useRef, useState } from 'react'

export default function InlineEditor() {
  const inputRef = useRef<HTMLInputElement>(null)
  const lastNameRef = useRef<HTMLInputElement>(null)
  const [saved, setSaved] = useState('Escribe algo y guarda')

  function handleSave() {
    // Se lee el valor directamente del DOM â€” sin useState intermedio
    const firstName = inputRef.current?.value ?? ''
    const lastName = lastNameRef.current?.value ?? ''
    const value = `${firstName} ${lastName}`.trim()
    setSaved(value.trim() === '' ? '(vacÃ­o)' : value)
  }

  function handleClear() {
    if (inputRef.current) {
      inputRef.current.value = ''  // muta el DOM directamente
    }
    if (lastNameRef.current) {
      lastNameRef.current.value = ''
    }
    inputRef.current.focus()
  }

  return (
    <div style={{ maxWidth: 340, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Guardado: <strong style={{ color: '#111827' }}>{saved}</strong>
      </p>
      <p style={{ margin: 0, color: '#6b7280', fontSize: 13 }}>
        Este componente es no controlado: escribir no causa renders hasta que pulses Guardar.
      </p>

      <input
        ref={inputRef}
        defaultValue=""
        placeholder="Nombre"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={lastNameRef}
        defaultValue=""
        placeholder="Apellido"
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />

      <div style={{ display: 'flex', gap: 8 }}>
        <button
          onClick={handleSave}
          style={{ flex: 1, padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Guardar
        </button>
        <button
          onClick={handleClear}
          style={{ padding: '8px 16px', background: '#f3f4f6', color: '#6b7280', border: 'none', borderRadius: 6, cursor: 'pointer' }}
        >
          Limpiar
        </button>
      </div>
    </div>
  )
}




