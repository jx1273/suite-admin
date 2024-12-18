<script setup lang="ts">
import type { IUser } from '../types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineProps<{
  user: IUser
}>()
</script>

<template>
  <div class="flex items-center gap-4">
    <Avatar class="h-12 w-12">
      <AvatarImage :src="user.avatar" :alt="user.name" />
      <AvatarFallback>
        {{ user.name[0].toUpperCase() }}
      </AvatarFallback>
    </Avatar>
    <div class="flex-1">
      <h3>{{ user.name }}</h3>
      <div class="text-xs text-muted-foreground line-clamp-2">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
