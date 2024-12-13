<script setup lang="ts">
import type { AutoFormFieldConfig } from '@/types/auto-form'
import { AutoForm } from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/toast'
import { z } from 'zod'
import Layout from './components/Layout.vue'

const formSchema = z.object({
  name: z.string(),
  birthday: z.coerce.date(),
  language: z.enum(['English', 'French', 'Spanish', 'Japanese', 'Chinese']),
})

const fieldConfig: AutoFormFieldConfig<typeof formSchema> = {
  name: {
    description: 'This is the name that will be displayed on your profile and emails.',
    inputProps: {
      placeholder: 'Your name',
    },
  },
  birthday: {
  },
  language: {
    description: 'This is your preferred language.',
    inputProps: {
      placeholder: 'Language',
    },
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
          Account
        </CardTitle>
        <CardDescription>
          Update your account settings. Set your preferred language and timezone.
        </CardDescription>
      </CardHeader>

      <CardContent class="grid gap-4">
        <AutoForm
          :schema="formSchema"
          :field-config="fieldConfig"
          @submit="onSubmit"
        >
          <CardFooter class="px-0 mt-2">
            <Button type="submit">
              Update account
            </Button>
          </CardFooter>
        </AutoForm>
      </CardContent>
    </Card>
  </Layout>
</template>
