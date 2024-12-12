<script setup lang="ts">
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { BellDot, ChevronsUpDown, Palette, PictureInPicture2, User, Wrench } from 'lucide-vue-next'
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

const currentLink = computed(() => links.find(link => link.path === currentPath.value))
</script>

<template>
  <nav class="flex flex-col gap-2">
    <router-link
      v-for="link in links" :key="link.path"
      :to="link.path"
      class="hidden lg:flex items-center px-2 py-1 rounded-md hover:bg-primary/5"
      :class="link.path === currentPath ? activeClass : ''"
    >
      <component :is="link.icon" class="mr-1 w-4 h-4" />
      <span>{{ link.label }}</span>
    </router-link>

    <DropdownMenu class="lg:hidden">
      <DropdownMenuTrigger>
        <div class="lg:hidden w-48 flex items-center px-2 py-1 rounded-md hover:bg-primary/5 border border-primary/4">
          <component :is="currentLink?.icon" class="mr-1 w-4 h-4" />
          <span>{{ currentLink?.label }}</span>
          <ChevronsUpDown class="ml-auto w-4 h-4" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent class="w-48" align="start">
        <DropdownMenuItem
          v-for="link in links" :key="link.path"
          @click="$router.push(link.path)"
        >
          <component :is="link.icon" class="mr-1 w-4 h-4" />
          {{ link.label }}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </nav>
</template>

<style scoped>
</style>
