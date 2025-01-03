<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import Input from '@/components/ui/input/Input.vue'

import { MessagesSquare, Search } from 'lucide-vue-next'
import User from './components/User.vue'
import { users } from './data/user'

const activeUser = users[0]
</script>

<template>
  <div class="grid gap-4 grid-cols-[280px_1fr] h-[calc(100svh-64px-16px)] overflow-hidden">
    <aside class="h-full overflow-hidden">
      <h2 class="sticky top-0 z-10 flex items-center gap-2 mb-4 text-xl font-bold">
        <span>Inbox</span>
        <MessagesSquare class="w-4 h-4" />
      </h2>

      <div class="relative items-center w-full max-w-sm mb-4">
        <Input placeholder="Search chat" class="pl-8" />
        <span class="absolute inset-y-0 flex items-center justify-center px-2 start-0">
          <Search class="w-4 h-4 text-muted-foreground" />
        </span>
      </div>

      <ul class="h-full overflow-y-auto">
        <li
          v-for="user in users"
          :key="user.id"
          class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-slate-100"
          :class="user.id === activeUser.id ? 'bg-slate-100' : ''"
        >
          <router-link :to="`/chats/${user.id}`">
            <User :user="user">
            <!-- last: {{ user.lastMessage }} -->
            </User>
          </router-link>
        </li>
      </ul>
    </aside>

    <main class="h-full overflow-hidden">
      <Card class="flex flex-col h-full overflow-hidden bg-slate-100">
        <CardHeader class="sticky top-0 z-10">
          <User :user="activeUser">
            <span class="text-xs text-muted-foreground">{{ activeUser.role }}</span>
          </User>
        </CardHeader>
        <CardContent class="flex-1 overflow-y-auto">
          asdf
          <div v-for="i in 100" :key="i">
            {{ i }}
          </div>
        </CardContent>
        <CardFooter>
          footer
        </CardFooter>
      </Card>
    </main>
  </div>
</template>

<style scoped>
</style>
