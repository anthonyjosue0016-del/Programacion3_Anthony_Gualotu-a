// src/components/StatusBadge_mp.tsx

type BadgeStatus = 'active' | 'inactive' | 'pending' | 'error' | 'warning'

interface StatusBadgeProps {
  status: BadgeStatus
  label?: string
  icon?: string
}

export default function StatusBadge({ status, label, icon }: StatusBadgeProps) {
  const config: Record<BadgeStatus, { bg: string; color: string; text: string }> = {
    active:   { bg: '#dcfce7', color: '#166534', text: 'Activo' },
    inactive: { bg: '#f3f4f6', color: '#6b7280', text: 'Inactivo' },
    pending:  { bg: '#fef9c3', color: '#854d0e', text: 'Pendiente' },
    error:    { bg: '#fee2e2', color: '#991b1b', text: 'Error' },
    warning:  { bg: '#fef3c7', color: '#92400e', text: 'Advertencia' },
  }

  const { bg, color, text } = config[status]

  return (
    <span
      style={{
        backgroundColor: bg,
        color,
        padding: '6px 16px',
        borderRadius: 4,
        fontSize: 12,
        fontWeight: 600,
        display: 'inline-block',
      }}
    >
      {icon && `${icon} `}{label ?? text}
    </span>
  )
}
