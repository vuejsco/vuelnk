import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { nanoid } from 'nanoid'
import type { Link } from '../types'

export const useLinksStore = defineStore('links', () => {
  const links = ref<Link[]>([])

  const userLinks = computed(() => {
    const userId = JSON.parse(localStorage.getItem('currentUser') || '{}').id
    return links.value.filter(link => link.userId === userId)
  })

  function createLink(originalUrl: string): Link {
    const userId = JSON.parse(localStorage.getItem('currentUser') || '{}').id
    const newLink: Link = {
      id: crypto.randomUUID(),
      originalUrl,
      shortCode: nanoid(6),
      createdAt: new Date().toISOString(),
      visits: 0,
      userId
    }

    links.value.push(newLink)
    saveLinks()
    return newLink
  }

  function getLink(shortCode: string): Link | undefined {
    return links.value.find(link => link.shortCode === shortCode)
  }

  function incrementVisits(shortCode: string) {
    const link = links.value.find(link => link.shortCode === shortCode)
    if (link) {
      link.visits++
      saveLinks()
    }
  }

  function saveLinks() {
    localStorage.setItem('links', JSON.stringify(links.value))
  }

  // Initialize from localStorage
  const storedLinks = localStorage.getItem('links')
  if (storedLinks) {
    links.value = JSON.parse(storedLinks)
  }

  return {
    links,
    userLinks,
    createLink,
    getLink,
    incrementVisits
  }
})
