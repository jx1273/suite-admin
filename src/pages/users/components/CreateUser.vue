<script setup lang="ts">
import AutoForm from '@/components/ui/auto-form/AutoForm.vue'
import Button from '@/components/ui/button/Button.vue'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { toast } from '@/components/ui/toast'
import { UserRoundPlus } from 'lucide-vue-next'
import { z } from 'zod'

const schema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string().email(),
  phoneNumber: z.string().optional(),
  role: z.enum(['superadmin', 'admin', 'cashier', 'manager']),
  password: z.string().default('admin888'),
  confirm: z.string().default('admin888'),
}).refine(data => data.password === data.confirm, {
  message: 'Passwords do not match',
  path: ['confirm'],
})

function onSubmit(values: Record<string, any>) {
  toast({
    title: 'You submitted the following values:',
    description: h(
      'pre',
      { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' },
      h('code', { class: 'text-white' }, JSON.stringify(values, null, 2)),
    ),
  })
}
</script>

<template>
  <Drawer>
    <DrawerTrigger as-child>
      <Button>
        Create User
        <UserRoundPlus />
      </Button>
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Create User</DrawerTitle>
        <DrawerDescription>
          Enter the required information below to create a new user.
        </DrawerDescription>
      </DrawerHeader>
      <AutoForm
        v-auto-animate
        class="container mx-auto space-y-6 max-h-[500px] overflow-y-auto"
        :schema="schema"
        :field-config="{
          email: {
            label: 'Email address',
            inputProps: {
              type: 'email',
            },
          },
          password: {
            label: 'Password',
            inputProps: {
              type: 'password',
            },
          },
          confirm: {
            label: 'Password',
            inputProps: {
              type: 'password',
            },
          },
          // role: {
          //   label: 'Role',
          //   component: 'select',
          // },
        }"
        @submit="onSubmit"
      >
        <DrawerFooter>
          <div class="flex items-center justify-end space-x-2">
            <Button variant="outline" type="reset" class="w-full">
              Reset
            </Button>
            <Button type="submit" class="w-full">
              SaveChanges
            </Button>
          </div>
          <DrawerClose>
            <Button variant="outline" class="w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </AutoForm>
    </DrawerContent>
  </Drawer>
</template>

<style scoped>
</style>
