interface WelcomeProps {
  subtitle?: string
}

export default function WelcomeBanner({ subtitle }: WelcomeProps) {
  return (
    <div
      style={{
        background: '#16a34a',
        color: '#fff',
        padding: '16px 24px',
        borderRadius: 0,
        opacity: 0.5,
      }}
    >
      <h1 style={{ margin: 0, fontSize: 32 }}>Bienvenido al curso de React</h1>
      <p style={{ margin: '6px 0 0', opacity: 0.85 }}>
        {subtitle ?? 'Aprende React 19 con TypeScript'}
      </p>
    </div>
  )
}