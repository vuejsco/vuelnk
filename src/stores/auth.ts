import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { User, AuthState } from '../types'

export const useAuthStore = defineStore('auth', () => {
  const state = ref<AuthState>({
    user: null,
    isAuthenticated: false
  })

  const isAuthenticated = computed(() => state.value.isAuthenticated)
  const currentUser = computed(() => state.value.user)

  function login(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    const user = users.find(
      (u: User) => u.email === email && u.password === password
    )

    if (user) {
      state.value.user = user
      state.value.isAuthenticated = true
      localStorage.setItem('currentUser', JSON.stringify(user))
      return true
    }
    return false
  }

  function register(email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]')
    if (users.some((u: User) => u.email === email)) {
      return false
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      password,
      createdAt: new Date().toISOString()
    }

    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))
    return true
  }

  function logout() {
    state.value.user = null
    state.value.isAuthenticated = false
    localStorage.removeItem('currentUser')
  }

  // Initialize state from localStorage
  const storedUser = localStorage.getItem('currentUser')
  if (storedUser) {
    state.value.user = JSON.parse(storedUser)
    state.value.isAuthenticated = true
  }

  return {
    isAuthenticated,
    currentUser,
    login,
    register,
    logout
  }
})
