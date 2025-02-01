export interface Link {
  id: string
  originalUrl: string
  shortCode: string
  createdAt: string
  visits: number
  userId: string
}

export interface User {
  id: string
  email: string
  password: string
  createdAt: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
}

export interface LinksState {
  links: Link[]
}
