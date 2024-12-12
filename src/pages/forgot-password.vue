<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Command } from 'lucide-vue-next'
</script>

<template>
  <div class="min-w-screen min-h-screen flex items-center justify-center">
    <div class="flex flex-col gap-4">
      <h1 class="text-xl font-bold flex items-center gap-2">
        <Command />
        <span>Shadcn Admin</span>
      </h1>
      <Card>
        <CardHeader>
          <CardTitle class="text-2xl">
            Reset Password
          </CardTitle>
          <CardDescription>
            Enter your email below to reset your password.
          </CardDescription>
        </CardHeader>
        <CardContent class="grid gap-4">
          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
        </CardContent>
        <CardFooter class="">
          <Button class="w-full">
            Reset Password
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>

<style scoped>
</style>

<route lang="yaml">
  meta:
    layout: blank
  </route>
