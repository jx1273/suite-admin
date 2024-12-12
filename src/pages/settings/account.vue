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
          Account
        </CardTitle>
        <CardDescription>
          Update your account settings. Set your preferred language and timezone.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <div class="grid gap-2">
          <Label for="language">Language</Label>
          <Input id="language" type="text" placeholder="Language" />
        </div>
        <div class="grid gap-2">
          <Label for="timezone">Timezone</Label>
          <Input id="timezone" type="text" placeholder="Timezone" />
        </div>
      </CardContent>
      <CardFooter>
        <Button>Update account</Button>
      </CardFooter>
    </Card>
  </Layout>
</template>
