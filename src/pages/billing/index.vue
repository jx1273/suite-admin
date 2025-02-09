<script lang="ts" setup>
import Page from '@/components/Layout/Page.vue'
import BillingHistory from './components/BillingHistory/index.vue'
import Plans from './components/Plan/Plans.vue'
</script>

<template>
  <Page
    title="Plans & Billing"
    description="Manage your plan and billing history here."
  >
    <Plans />
    <BillingHistory class="mt-2" />
  </Page>
</template>

<style>

</style>
