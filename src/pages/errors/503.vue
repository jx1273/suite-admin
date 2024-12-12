<script setup lang="ts">
import Error from '@/components/Error.vue'
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <Error
      :code="503"
      subtitle="Service Unavailable"
      error="The server is currently unable to handle the request due to a temporary overloading or maintenance of the server."
    />
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
  meta:
    layout: blank
  </route>
