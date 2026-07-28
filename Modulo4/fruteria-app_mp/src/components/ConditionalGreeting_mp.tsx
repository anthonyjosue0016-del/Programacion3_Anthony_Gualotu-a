type TimeOfDay = 'morning' | 'afternoon' | 'evening' | 'night'

interface ConditionalGreetingProps {
  isLoggedIn: boolean
  userName?: string
  timeOfDay?: TimeOfDay
  greeting?: string
}

export default function ConditionalGreeting({
  isLoggedIn,
  userName = 'visitante',
  timeOfDay = 'morning',
  greeting,
}: ConditionalGreetingProps) {
  const greetings: Record<TimeOfDay, string> = {
    morning:   'Buenos dÃ­as',
    afternoon: 'Buenas tardes',
    evening:   'Buenas noches',
    night:     'Buenas noches',
  }

  return (
    <p style={{ color: isLoggedIn ? '#333' : '#e00' }}>
      {!isLoggedIn
        ? 'Por favor inicia sesiÃ³n para continuar.'
        : `${greeting ?? greetings[timeOfDay]}, ${userName}. Bienvenido de vuelta.`}
    </p>
  )
}

