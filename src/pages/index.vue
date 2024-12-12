<script setup lang="ts">
import Loading from '@/components/Loading/index.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
router.push({ name: 'dashboard' })
</script>

<template>
  <div class="w-screen h-screen flex items-center justify-center">
    <Loading />
  </div>
</template>

<route lang="yaml">
  meta:
    layout: blank
</route>
