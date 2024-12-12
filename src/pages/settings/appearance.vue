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
          Appearance
        </CardTitle>
        <CardDescription>
          Customize the appearance of the app. Automatically switch between day and night themes.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="Font">Font</Label>
          <Input id="Font" type="text" placeholder="Font" />
        </div>
        <div class="grid gap-2">
          <Label for="Text Size">Text Size</Label>
          <Input id="Text Size" type="text" placeholder="Text Size" />
        </div>
        <div class="grid gap-2">
          <Label for="Theme">Theme</Label>
          <Input id="Theme" type="text" placeholder="Theme" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Update Settings</Button>
      </CardFooter>
    </Card>
  </Layout>
</template>
