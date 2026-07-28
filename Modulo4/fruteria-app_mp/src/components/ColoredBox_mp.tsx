// src/components/ColoredBox_mp.tsx

interface ColoredBoxProps {
  color: string
  width?: number
  height?: number
  borderRadius?: number
  label?: string
  onClick?: () => void
}

export default function ColoredBox({
  color,
  width = 80,
  height = 80,
  borderRadius = 8,
  label,
  onClick,
}: ColoredBoxProps) {
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
      <div
        onClick={onClick}
        style={{
          width,
          height,
          backgroundColor: color,
          borderRadius,
          border: 'none',
          cursor: onClick ? 'pointer' : 'default',
        }}
      />
      {label && <span style={{ fontSize: 12, color: '#666' }}>{label}</span>}
    </div>
  )
}
