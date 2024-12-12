<script setup lang="ts">
import Toaster from '@/components/ui/toast/Toaster.vue'
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'
</script>

<template>
  <Toaster />
  <VueQueryDevtools />

  <router-view v-slot="{ Component, route }">
    <component :is="Component" :key="route" />
  </router-view>
</template>
