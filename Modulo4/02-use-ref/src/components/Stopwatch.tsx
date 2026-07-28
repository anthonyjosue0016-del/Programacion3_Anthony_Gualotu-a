// src/components/Stopwatch.tsx

import { useState, useRef, useEffect } from 'react'

export default function Stopwatch() {
  const [time,    setTime]    = useState(0)
  const [running, setRunning] = useState(false)
  const [value, setValue] = useState('')
  const [laps, setLaps] = useState<number[]>([])

  // Contar renders sin causar renders adicionales
  const renderCount = useRef(0)
  renderCount.current += 1

  // ReturnType<typeof setInterval> es el tipo correcto para el ID
  // del interval — funciona igual en browser y Node.js.
  // Si se usara useState para el interval ID, cada setInterval/clearInterval
  // generaría un render innecesario.
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  // Guardar el ID de un timer
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Guardar el valor anterior de un estado
  const prevTime = useRef<string>('')

  // El tipo genérico <HTMLInputElement> indica qué nodo referencia
  const inputRef = useRef<HTMLInputElement>(null)
  const uncontrolledInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()  // ?. porque current puede ser null antes del mount
  }, [])

  function handleStart() {
    if (running) return
    setRunning(true)
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
    timerRef.current = setTimeout(() => {}, 1000)
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    clearTimeout(timerRef.current ?? undefined)
    timerRef.current = null
    setRunning(false)
  }

  function handleReset() {
    handleStop()
    setTime(0)
  }

  function handleLap() {
    setLaps((prev) => [...prev, time])
  }

  const minutes = Math.floor(time / 60).toString().padStart(2, '0')
  const seconds = (time % 60).toString().padStart(2, '0')
  const previousTime = prevTime.current
  prevTime.current = time.toString()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
      <input
        ref={inputRef}
        placeholder="Autofocus con useRef"
        style={{ width: '100%', maxWidth: 320, padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 320 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <small>Controlado — cada tecla dispara un render</small>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
          />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <small>No controlado — cero renders mientras se escribe</small>
          <input
            ref={uncontrolledInputRef}
            defaultValue=""
            style={{ padding: '8px 12px', border: '1px solid #d1d5db', borderRadius: 6 }}
          />
        </div>
        <p style={{ margin: 0, fontSize: 14, color: '#374151' }}>
          Renders: {renderCount.current} · Valor anterior: {previousTime}
        </p>
      </div>
      <p style={{ fontFamily: 'monospace', fontSize: 36, margin: 0, letterSpacing: 4 }}>
        {minutes}:{seconds}
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        <button
          onClick={handleStart}
          disabled={running}
          style={btnStyle('#22c55e')}
        >
          Iniciar
        </button>
        <button
          onClick={handleStop}
          disabled={!running}
          style={btnStyle('#f59e0b')}
        >
          Pausar
        </button>
        <button
          onClick={handleReset}
          style={btnStyle('#6b7280')}
        >
          Reset
        </button>
        <button
          onClick={handleLap}
          style={btnStyle('#3b82f6')}
        >
          Vuelta
        </button>
      </div>
      {laps.length > 0 && (
        <div style={{ width: '100%', maxWidth: 320, textAlign: 'left' }}>
          <p style={{ margin: '8px 0 4px', color: '#374151', fontSize: 14 }}>Vueltas guardadas:</p>
          <ol style={{ margin: 0, paddingLeft: 18, color: '#111827' }}>
            {laps.map((lap, index) => (
              <li key={index}>{Math.floor(lap / 60).toString().padStart(2, '0')}:{(lap % 60).toString().padStart(2, '0')}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

function btnStyle(bg: string) {
  return {
    padding: '8px 16px',
    background: bg,
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    cursor: 'pointer',
    fontWeight: 500,
  }
}