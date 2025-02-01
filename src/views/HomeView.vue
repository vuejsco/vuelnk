<script setup lang="ts">
/**
 * @view HomeView
 * @description The main landing page of the application.
 * Features a navigation bar and URL shortening form.
 *
 * @example
 * ```vue
 * <RouterView />
 * ```
 *
 * @components
 * - ShortenForm: Form for URL shortening
 *
 * @uses AuthStore - For checking authentication status
 * @uses Router - For navigation to dashboard/auth pages
 */

import ShortenForm from '../components/ShortenForm.vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const router = useRouter()
const authStore = useAuthStore()

/**
 * Navigates to either dashboard or auth page based on authentication status
 */
const navigateToDashboard = () => {
  if (authStore.isAuthenticated) {
    router.push('/dashboard')
  } else {
    router.push('/auth')
  }
}
</script>

<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
    <nav class="bg-white shadow">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <h1 class="text-2xl font-bold text-[--primary]">VueLnk</h1>
          </div>
          <div class="flex items-center">
            <button @click="navigateToDashboard" class="btn-secondary">
              {{ authStore.isAuthenticated ? 'Dashboard' : 'Login' }}
            </button>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-4xl mx-auto py-16 px-4 sm:py-24">
      <div class="text-center mb-16">
        <h2 class="text-5xl font-bold text-[--secondary] mb-6">
          Shorten Your Links
        </h2>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto">
          Create short, memorable links in seconds. Track clicks and manage your
          links all in one place.
        </p>
      </div>
      <ShortenForm />
    </div>
  </div>
</template>
