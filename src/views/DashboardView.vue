<script setup lang="ts">
/**
 * @view DashboardView
 * @description Protected dashboard page that displays user's shortened links.
 * Requires authentication to access.
 *
 * @example
 * ```vue
 * <RouterView />
 * ```
 *
 * @components
 * - LinkList: Displays user's shortened links
 *
 * @uses AuthStore - For handling logout
 * @uses Router - For navigation after logout
 */

import LinkList from '../components/LinkList.vue'
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

/**
 * Handles user logout and redirects to home page
 */
const handleLogout = () => {
  authStore.logout()
  router.push('/')
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
            <button @click="handleLogout" class="btn-secondary">Logout</button>
          </div>
        </div>
      </div>
    </nav>

    <div class="max-w-6xl mx-auto py-12 px-4">
      <div class="bg-white shadow-lg rounded-xl p-8">
        <h2 class="text-3xl font-bold text-[--secondary] mb-8">Your Links</h2>
        <LinkList />
      </div>
    </div>
  </div>
</template>
