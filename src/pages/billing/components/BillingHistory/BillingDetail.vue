<script lang="ts" setup>
import type { Billing } from './data/schema'
import Transaction from '../Transaction/index.vue'

defineProps<{
  billing: Billing
}>()
</script>

<template>
  <div>
    <UiDialogTitle>
      <UiDialogDescription />
    </UiDialogTitle>
    <Transaction
      :card-no="billing.id"
      :order-id="billing.orderId || ''"
      :price="billing.amount"
      currency="$"
      :state="billing.status"
      :updated-at="billing.date"
      :invoice-no="`${billing.id}`"
      :description="billing.description"
    />
  </div>
</template>

<style scoped>

</style>
