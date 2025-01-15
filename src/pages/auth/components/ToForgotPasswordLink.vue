<script lang="ts" setup>
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="link" class="text-muted-foreground" @click="$router.push('/auth/forgot-password')">
    Forgot password?
  </Button>
</template>

<style scoped>

</style>
