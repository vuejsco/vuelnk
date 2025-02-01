<script setup lang="ts">
/**
 * @component LinkList
 * @description Displays a list of shortened links for the authenticated user.
 * Shows link details including original URL, shortened URL, visit count, and creation date.
 *
 * @example
 * ```vue
 * <LinkList />
 * ```
 *
 * @uses LinksStore - For accessing user's shortened links
 * @uses storeToRefs - For reactive store properties
 *
 * @displays
 * - Empty state message when no links exist
 * - List of links with:
 *   - Original URL
 *   - Shortened URL
 *   - Visit count
 *   - Creation date
 */

import { useLinksStore } from '../stores/links'
import { storeToRefs } from 'pinia'

const linksStore = useLinksStore()
const { userLinks } = storeToRefs(linksStore)
</script>

<template>
  <div class="space-y-6">
    <div v-if="userLinks.length === 0" class="text-center py-12">
      <p class="text-gray-500 text-lg">
        No links yet. Start shortening URLs to see them here!
      </p>
    </div>
    <div
      v-for="link in userLinks"
      :key="link.id"
      class="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
    >
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center gap-4"
      >
        <div class="flex-1">
          <p class="text-sm text-gray-500 mb-1">Original URL</p>
          <a
            :href="link.originalUrl"
            target="_blank"
            class="text-[--primary] hover:text-[--primary-dark] truncate block"
          >
            {{ link.originalUrl }}
          </a>
        </div>
        <div class="flex-1">
          <p class="text-sm text-gray-500 mb-1">Short URL</p>
          <a
            :href="`/${link.shortCode}`"
            target="_blank"
            class="text-[--primary] hover:text-[--primary-dark] font-medium"
          >
            {{ `${window.location.origin}/${link.shortCode}` }}
          </a>
        </div>
        <div class="flex items-center gap-8">
          <div>
            <p class="text-sm text-gray-500 mb-1">Visits</p>
            <p class="font-medium text-[--secondary]">{{ link.visits }}</p>
          </div>
          <div>
            <p class="text-sm text-gray-500 mb-1">Created</p>
            <p class="text-[--secondary]">
              {{ new Date(link.createdAt).toLocaleDateString() }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
