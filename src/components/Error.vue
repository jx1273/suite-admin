<script setup lang="ts">
import Button from './ui/button/Button.vue'

defineProps<{
  code: number
  subtitle: string
  error: string
}>()
</script>

<template>
  <div class="text-center max-w-2xl mx-auto">
    <h1 class="text-8xl font-bold">
      {{ code }}
    </h1>
    <h2 class="text-2xl font-bold mt-4">
      {{ subtitle }}
    </h2>
    <p class="text-stone-400">
      {{ error }}
    </p>

    <footer class="mt-8">
      <slot>
        <div class="flex gap-2 justify-center">
          <Button variant="outline" @click="$router.back()">
            Go Back
          </Button>
          <Button @click="$router.push('/')">
            Back to Home
          </Button>
        </div>
      </slot>
    </footer>
  </div>
</template>

<style scoped>
</style>
