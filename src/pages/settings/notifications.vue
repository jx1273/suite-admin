<script setup lang="ts">
import { Button } from '@/components/ui/button'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Layout from './components/Layout.vue'
</script>

<template>
  <Layout>
    <Card class="w-full border-none shadow-none">
      <CardHeader>
        <CardTitle class="text-2xl">
          Notifications
        </CardTitle>
        <CardDescription>
          Configure how you receive notifications.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="store-name">Store name</Label>
          <Input id="store-name" type="text" placeholder="Store name" />
        </div>
        <div class="grid gap-2">
          <Label for="store-email">Store email</Label>
          <Input id="store-email" type="email" placeholder="Store email" />
        </div>
        <div class="grid gap-2">
          <Label for="store-url">Store URL</Label>
          <Input id="store-url" type="text" placeholder="Store URL" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  </Layout>
</template>
