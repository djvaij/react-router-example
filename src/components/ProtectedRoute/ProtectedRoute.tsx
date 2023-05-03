import { FC } from 'react'
import { Navigate } from 'react-router-dom'

export interface ProtectedRouteProps {
  children: React.ReactNode
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = false

  if (!isAuthenticated) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}
