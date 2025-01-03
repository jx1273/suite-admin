<script setup lang="ts">
import AuthTitle from '@/components/AuthTitle.vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import {
  PinInput,
  PinInputGroup,
  PinInputInput,
} from '@/components/ui/pin-input'

const value = ref<string[]>([])
function handleComplete(e: string[]) {
  // eslint-disable-next-line no-alert
  alert(e.join(''))
}
</script>

<template>
  <div class="flex items-center justify-center min-h-screen p-4 min-w-screen">
    <main class="flex flex-col gap-4">
      <AuthTitle />
      <Card class="w-full max-w-sm">
        <CardHeader>
          <CardTitle class="text-2xl">
            Two-Factor Authentication
          </CardTitle>
          <CardDescription>
            <p>Please enter the authentication code.</p>
            <p>We have sent the authentication code to your email.</p>
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid items-center justify-center gap-2">
            <PinInput
              id="pin-input"
              v-model="value"
              placeholder="○"
              @complete="handleComplete"
            >
              <span class="text-xl">SA</span>
              <span>-</span>
              <PinInputGroup>
                <PinInputInput
                  v-for="(id, index) in 6"
                  :key="id"
                  :index="index"
                />
              </PinInputGroup>
            </PinInput>
          </div>
        </CardContent>
        <CardFooter class="">
          <Button class="w-full">
            Verify
          </Button>
        </CardFooter>
      </Card>
    </main>
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
  meta:
    layout: blank
  </route>
