// src/components/AutoFocusForm_mp.tsx

import { useRef, useEffect } from 'react'

export default function AutoFocusForm() {
  const nameRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)
  const submitButtonRef = useRef<HTMLButtonElement>(null)

  // Foco en el primer campo al montar
  useEffect(() => {
    nameRef.current?.focus()
  }, [])

  function handleNameKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      emailRef.current?.focus()
    }
  }

  function handleEmailKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (emailRef.current?.value) {
        emailRef.current.select()
      } else {
        phoneRef.current?.focus()
      }
    }
  }

  function handlePhoneKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      e.preventDefault()
      submitButtonRef.current?.focus()
    }
  }

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 320 }}>
      <input
        ref={nameRef}
        placeholder="Nombre"
        onKeyDown={handleNameKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        onKeyDown={handleEmailKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <input
        ref={phoneRef}
        type="tel"
        placeholder="TelÃ©fono"
        onKeyDown={handlePhoneKeyDown}
        style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <button
        ref={submitButtonRef}
        type="submit"
        style={{ padding: '8px', background: '#0070f3', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer' }}
      >
        Enviar
      </button>
    </form>
  )
}




