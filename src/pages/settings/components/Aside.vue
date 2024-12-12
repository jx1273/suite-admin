<script setup lang="ts">
import { BellDot, Palette, PictureInPicture2, User, Wrench } from 'lucide-vue-next'
import { h } from 'vue'

const route = useRoute()
const currentPath = computed(() => route.path)
const activeClass = 'text-primary font-semibold bg-primary/5'
const links = [
  { path: '/settings/', label: 'Profile', icon: h(User) },
  { path: '/settings/account', label: 'Account', icon: h(Wrench) },
  { path: '/settings/appearance', label: 'Appearance', icon: h(Palette) },
  { path: '/settings/notifications', label: 'Notifications', icon: h(BellDot) },
  { path: '/settings/display', label: 'Display', icon: h(PictureInPicture2) },
]
</script>

<template>
  <nav class="flex flex-col gap-2">
    <router-link
      v-for="link in links" :key="link.path"
      :to="link.path"
      class="flex items-center px-2 py-1 rounded-md hover:bg-primary/5"
      :class="link.path === currentPath ? activeClass : ''"
    >
      <component :is="link.icon" class="mr-1 w-4 h-4" />
      <span>{{ link.label }}</span>
    </router-link>
  </nav>
</template>

<style scoped>
</style>
