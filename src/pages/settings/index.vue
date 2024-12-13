<script setup lang="ts">
import type { AutoFormFieldConfig } from '@/types/auto-form'
import { AutoForm } from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/toast'
import { z } from 'zod'
import Layout from './components/Layout.vue'

const formSchema = z.object({
  username: z.string()
    .describe('Username')
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be at most 20 characters'),
  email: z.string()
    .email()
    .describe('Email'),
  bio: z.string()
    .describe('Bio'),
  urls: z.array(
    z.string().url(),
  ).describe('Social media URLs'),
})

const fieldConfig: AutoFormFieldConfig<typeof formSchema> = {
  username: {
    description: 'This is your username.',
    inputProps: {
      placeholder: 'Username',
    },
  },
  email: {
    label: 'Email address',
    inputProps: {
      type: 'email',
      placeholder: 'test@me.com',
    },
    description: 'This is the email address you use to log in.',
  },
  bio: {
    component: 'textarea',
    label: 'Bio',
    inputProps: {
      placeholder: 'Write a short bio about yourself.',
    },
    description: 'This is the bio you use to log in.',
  },
}

function onSubmit(data: z.infer<typeof formSchema>) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(data, null, 2))),
  })
}
</script>

<template>
  <Layout>
    <Card class="w-full border-none shadow-none">
      <CardHeader>
        <CardTitle class="text-2xl">
          Profile
        </CardTitle>
        <CardDescription>
          This is how others will see you on the app.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <AutoForm
          :schema="formSchema"
          :field-config="fieldConfig"
          @submit="onSubmit"
        >
          <CardFooter class="px-0">
            <Button type="submit">
              Update Profile
            </Button>
          </CardFooter>
        </AutoForm>
      </CardContent>
    </Card>
  </Layout>
</template>
