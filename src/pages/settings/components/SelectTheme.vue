<script setup lang="ts">
import type { FieldProps } from '@/components/ui/auto-form'
import { AutoFormLabel } from '@/components/ui/auto-form'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Moon, Sun, SunMoon } from 'lucide-vue-next'

defineProps<FieldProps>()
</script>

<template>
  <FormField v-slot="slotProps" class="select-theme" :name="fieldName">
    <FormItem v-bind="$attrs">
      <AutoFormLabel v-if="!config?.hideLabel" :required="required">
        {{ config?.label }}
      </AutoFormLabel>
      <FormControl>
        <RadioGroup v-bind="slotProps.componentField" class="flex gap-8">
          <FormItem class="form-item">
            <FormControl>
              <RadioGroupItem value="light" class="radio-group-item" />
            </FormControl>
            <FormLabel class="form-label">
              <Sun />
            </FormLabel>
          </FormItem>
          <FormItem class="form-item">
            <FormControl>
              <RadioGroupItem value="dark" class="radio-group-item" />
            </FormControl>
            <FormLabel class="form-label">
              <Moon />
            </FormLabel>
          </FormItem>
          <FormItem class="form-item">
            <FormControl>
              <RadioGroupItem value="auto" class="radio-group-item" />
            </FormControl>
            <FormLabel class="form-label">
              <SunMoon />
            </FormLabel>
          </FormItem>
        </RadioGroup>
      </FormControl>
      <FormDescription v-if="config?.description">
        {{ config.description }}
      </FormDescription>
      <FormMessage />
    </FormItem>
  </FormField>
</template>

<style scoped>
.form-item {
  @apply w-14 h-14 flex items-center;
}
.radio-group-item{
  @apply absolute top-0 right-0 rounded-sm;
}
.form-label {
  @apply border border-primary/10 p-3 rounded-md;
}
</style>
