<script setup lang="ts">
/**
 * @component AuthComponent
 * @description Handles user authentication with login and registration functionality.
 * Provides a form that toggles between login and registration modes.
 *
 * @example
 * ```vue
 * <AuthComponent />
 * ```
 *
 * @internal State
 * - isLogin: Toggles between login and registration forms
 * - email: Stores user email input
 * - password: Stores user password input
 * - error: Stores authentication error messages
 *
 * @uses AuthStore - For handling authentication operations
 * @uses Router - For navigation after successful authentication
 */

import { ref } from 'vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const isLogin = ref(true)
const email = ref('')
const password = ref('')
const error = ref('')

/**
 * Handles form submission for both login and registration.
 * Validates inputs and performs the appropriate authentication action.
 * Redirects to dashboard on successful login.
 */
const handleSubmit = async () => {
  if (!email.value || !password.value) {
    error.value = 'Please fill in all fields'
    return
  }

  if (isLogin.value) {
    const success = authStore.login(email.value, password.value)
    if (success) {
      router.push('/dashboard')
    } else {
      error.value = 'Invalid credentials'
    }
  } else {
    const success = authStore.register(email.value, password.value)
    if (success) {
      isLogin.value = true
      error.value = 'Registration successful! Please login.'
      email.value = ''
      password.value = ''
    } else {
      error.value = 'Email already exists'
    }
  }
}
</script>

<template>
  <div
    class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4"
  >
    <div class="max-w-md mx-auto">
      <div class="bg-white shadow-lg rounded-xl p-8">
        <h2 class="text-3xl font-bold text-[--secondary] mb-8 text-center">
          {{ isLogin ? 'Welcome Back' : 'Create Account' }}
        </h2>
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Email</label
            >
            <input
              v-model="email"
              type="email"
              class="input-primary"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="input-primary"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" class="btn-primary w-full">
            {{ isLogin ? 'Login' : 'Register' }}
          </button>
        </form>
        <p v-if="error" class="mt-4 text-red-500 text-center">{{ error }}</p>
        <p class="mt-6 text-center text-gray-600">
          {{ isLogin ? "Don't have an account?" : 'Already have an account?' }}
          <button
            @click="isLogin = !isLogin"
            class="text-[--primary] hover:text-[--primary-dark] font-medium ml-1"
          >
            {{ isLogin ? 'Register' : 'Login' }}
          </button>
        </p>
      </div>
    </div>
  </div>
</template>
