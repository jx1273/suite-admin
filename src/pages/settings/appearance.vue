<script setup lang="ts">
import type { AutoFormFieldConfig } from '@/types/auto-form'

import { AutoForm } from '@/components/ui/auto-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { toast } from '@/components/ui/toast'
import { z } from 'zod'
import Layout from './components/Layout.vue'
import SelectTheme from './components/SelectTheme.vue'

const formSchema = z.object({
  font: z.enum(['Arial', 'Helvetica', 'Times New Roman']),
  theme: z.enum(['light', 'dark', 'auto']),
})

const fieldConfig: AutoFormFieldConfig<typeof formSchema> = {
  font: {
    description: 'This is your preferred font.',
    inputProps: {
      placeholder: 'Font',
    },
  },
  theme: {
    component: SelectTheme,
    description: 'This is your preferred theme.',
    inputProps: {
      placeholder: 'Theme',
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
          Appearance
        </CardTitle>
        <CardDescription>
          Customize the appearance of the app. Automatically switch between day and night themes.
        </CardDescription>
      </CardHeader>
      <CardContent class="grid gap-4">
        <AutoForm
          :schema="formSchema"
          :field-config="fieldConfig"
          @submit="onSubmit"
        >
          <CardFooter class="px-0 mt-4">
            <Button type="submit">
              Update appearance
            </Button>
          </CardFooter>
        </AutoForm>
      </CardContent>
    </Card>
  </Layout>
</template>
