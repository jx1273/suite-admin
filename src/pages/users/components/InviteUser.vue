<script setup lang="ts">
import AutoForm from '@/components/ui/auto-form/AutoForm.vue'
import Button from '@/components/ui/button/Button.vue'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { toast } from '@/components/ui/toast'
import { MailPlus, Send } from 'lucide-vue-next'
import { z } from 'zod'

const schema = z.object({
  email: z.string().email(),
  role: z.enum(['superadmin', 'admin', 'cashier', 'manager']),
  description: z.string().optional(),
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
  <Dialog>
    <DialogTrigger>
      <Button variant="outline">
        Invite User
        <MailPlus />
      </Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>
          <div class="flex items-center gap-2">
            <MailPlus />
            <span>Invite User</span>
          </div>
        </DialogTitle>
        <DialogDescription>
          Invite new user to join your team by sending them an email invitation. Assign a role to define their access level.
        </DialogDescription>
      </DialogHeader>

      <AutoForm
        v-auto-animate
        class="w-full space-y-6"
        :schema="schema"
        :field-config="{
          email: {
            label: 'Email address',
            inputProps: {
              type: 'email',
            },
          },
          role: {
            label: 'Role',
            component: 'select',
          },
          description: {
            label: 'Description(Optional)',
            component: 'textarea',
          },
        }"
        @submit="onSubmit"
      >
        <div class="flex items-center justify-end space-x-2">
          <Button variant="outline" type="reset">
            Reset
          </Button>
          <Button type="submit">
            Invite
            <Send />
          </Button>
        </div>
      </AutoForm>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
</style>
