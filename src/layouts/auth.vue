<script setup lang="ts">
import ParticlesBg from '@/components/inspira-ui/ParticlesBg.vue'
import { useColorMode } from '@vueuse/core'

const { store, system } = useColorMode()
const isDark = computed(() => store.value === 'auto' ? system.value === 'dark' : store.value === 'dark')
</script>

<template>
  <div class="h-screen relative z-10">
    <div class="h-full grid items-center">
      <router-view />
    </div>
  </div>

  <ParticlesBg
    class="absolute inset-0"
    :quantity="500"
    :ease="100"
    :color="isDark ? '#FFF' : '#000'"
    :staticity="10"
    refresh
  />
</template>
