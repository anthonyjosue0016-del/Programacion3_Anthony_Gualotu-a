import UserProfileCard from './components/UserProfileCard'

export default function App() {
  return (
    <main style={{ maxWidth: 480, margin: '40px auto', fontFamily: 'sans-serif' }}>
      <UserProfileCard
        fullName="Ana García"
        email="ana@ejemplo.com"
        role="admin"
        isActive={true}
        skills={['TypeScript', 'React', 'Node.js']}
        bio="Desarrolladora fullstack con 5 años de experiencia."
      />

      <UserProfileCard
        fullName="Luis Mora"
        email="luis@ejemplo.com"
        role="viewer"
        isActive={false}
        skills={['Figma', 'CSS']}
        bio="Diseñador con experiencia en sistemas UI"
      />
    </main>
  )
}