// src/components/DigitalCounter.tsx

import { useState } from 'react'

interface DigitalCounterProps {
  initialValue?: number
  step?: number
  label?: string
  min?: number
  max?: number
}

export default function DigitalCounter({
  initialValue = 0,
  step = 1,
  label = 'Contador',
  min,
  max,
}: DigitalCounterProps) {
  const [count, setCount] = useState(initialValue)

  function increment() {
    setCount((prev) => prev + step)
  }

  function decrement() {
    setCount((prev) => prev - step)
  }

  function reset() {
    setCount(initialValue)
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ fontSize: 14, color: '#666' }}>{label}</span>
      <button onClick={decrement} style={btnStyle} disabled={min !== undefined && count <= min}>−</button>
      <span style={{ fontSize: 20, fontWeight: 600, minWidth: 60, textAlign: 'center' }}>
        {count}
      </span>
      <button onClick={increment} style={btnStyle} disabled={max !== undefined && count >= max}>+</button>
      <button onClick={reset} style={{ ...btnStyle, fontSize: 12, color: '#999' }}>
        Reset
      </button>
    </div>
  )
}

const btnStyle = {
  width: 32,
  height: 32,
  borderRadius: 6,
  border: '1px solid #ddd',
  background: '#f5f5f5',
  cursor: 'pointer',
  fontSize: 16,
}