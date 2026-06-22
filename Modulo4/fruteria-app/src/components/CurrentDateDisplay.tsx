interface CurrentDateDisplayProps {
  showTime?: boolean
}

export default function CurrentDateDisplay({ showTime = true }: CurrentDateDisplayProps) {
  const now = new Date()

  const fecha = now.toLocaleDateString('en-US', {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Mexico_City',
  })

  const hora = now.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'America/Mexico_City',
  })

  return (
    <div style={{ fontSize: 14, color: '#555' }}>
      <span style={{ textTransform: 'capitalize' }}>{fecha}</span>
      {showTime && (
        <span style={{ marginLeft: 12, color: '#999' }}>{hora}</span>
      )}
    </div>
  )
}