<script setup lang="ts">
/**
 * @component ShortenForm
 * @description A form component that allows users to input and shorten URLs.
 * The component handles URL validation and displays success/error messages.
 *
 * @example
 * ```vue
 * <ShortenForm />
 * ```
 *
 * @internal State
 * - url: Stores the input URL value
 * - error: Stores error messages for invalid inputs
 * - success: Stores success message after shortening URL
 *
 * @uses LinksStore - For creating and managing shortened links
 */

import { ref } from 'vue'
import { useLinksStore } from '../stores/links'

const url = ref('')
const error = ref('')
const success = ref('')
const linksStore = useLinksStore()

/**
 * Handles the URL shortening process.
 * Validates the input URL and creates a new shortened link.
 * Updates the UI with success/error messages accordingly.
 */
const shortenUrl = () => {
  if (!url.value) {
    error.value = 'Please enter a URL'
    return
  }

  try {
    new URL(url.value)
    const link = linksStore.createLink(url.value)
    success.value = `Link shortened! Your short URL is: ${window.location.origin}/${link.shortCode}`
    url.value = ''
    error.value = ''
  } catch {
    error.value = 'Please enter a valid URL'
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <form
      @submit.prevent="shortenUrl"
      class="bg-white shadow-lg rounded-xl p-8"
    >
      <div class="space-y-6">
        <div>
          <input
            v-model="url"
            type="text"
            placeholder="Paste your long URL here"
            class="input-primary text-lg"
          />
        </div>
        <button type="submit" class="btn-primary w-full text-lg">
          Shorten URL
        </button>
      </div>
      <div class="mt-4">
        <p v-if="error" class="text-red-500 text-center">{{ error }}</p>
        <p v-if="success" class="text-[--primary] text-center font-medium">
          {{ success }}
        </p>
      </div>
    </form>
  </div>
</template>
