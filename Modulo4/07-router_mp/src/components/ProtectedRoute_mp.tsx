// src/components/ProtectedRoute_mp.tsx

import { Navigate, useLocation } from 'react-router-dom'

interface ProtectedRouteProps {
  isAuthenticated: boolean
  children:        React.ReactNode
}

export default function ProtectedRoute({
  isAuthenticated,
  children,
}: ProtectedRouteProps) {
  const location = useLocation()

  if (!isAuthenticated) {
    // Guarda la ruta actual para redirigir despuÃ©s del login
    return <Navigate to="/login" state={{ from: location.pathname }} replace />
  }

  return <>{children}</>
}   
