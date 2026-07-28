import UserProfileCard from './components/UserProfileCard'

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <UserProfileCard
        fullName="Ana GarcÃ­a"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 aÃ±os de experiencia."
      />

      <UserProfileCard
        fullName="Luis Mora"
        email="luis@ejemplo.com"
        role="viewer"
        isActive={false}
        skills={['Figma', 'CSS']}
        bio="DiseÃ±ador con experiencia en sistemas UI"
      />
    </main>
  )
}
