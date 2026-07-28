export interface User {
  id: string
  username: string
  email: string
  isActive: boolean
  profile?: string | null
  avatarUrl?: string | null
  googleId?: string | null
}

export interface CreateUserPayload {
  username: string
  email: string
  password: string
  isActive?: boolean
}
