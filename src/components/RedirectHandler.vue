<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useLinksStore } from '../stores/links'

const route = useRoute()
const router = useRouter()
const linksStore = useLinksStore()

onMounted(() => {
  const shortCode = route.params.shortCode as string
  const link = linksStore.getLink(shortCode)

  if (link) {
    linksStore.incrementVisits(shortCode)
    window.location.href = link.originalUrl
  } else {
    router.push('/')
  }
})
</script>

<template>
  <div class="flex items-center justify-center min-h-screen">
    <p class="text-xl">Redirecting...</p>
  </div>
</template>
