<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card'
import Input from '@/components/ui/input/Input.vue'

import { MessagesSquare, Search } from 'lucide-vue-next'
import User from './_components/User.vue'
import { users } from './_data/user'

const activeUser = users[0]
</script>

<template>
  <div class="grid gap-4 grid-cols-[280px_1fr] h-[calc(100svh-64px-16px)] overflow-hidden">
    <aside class="overflow-hidden h-full">
      <h2 class="flex items-center gap-2 text-xl font-bold mb-4 sticky top-0 z-10">
        <span>Inbox</span>
        <MessagesSquare class="w-4 h-4" />
      </h2>

      <div class="relative w-full max-w-sm items-center mb-4">
        <Input placeholder="Search chat" class="pl-8" />
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
          <Search class="w-4 h-4 text-muted-foreground" />
        </span>
      </div>

      <ul class="overflow-y-auto h-full">
        <li
          v-for="user in users"
          :key="user.id"
          class="flex items-center gap-2 py-2 px-4 hover:bg-slate-100 cursor-pointer"
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
      <Card class="bg-slate-100 flex flex-col h-full overflow-hidden">
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
