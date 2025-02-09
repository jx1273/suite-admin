<script setup lang="ts">
import type { Billing } from './data/schema'
import { columns } from './columns'
import billings from './data/billings.json'
import DataTable from './DataTable.vue'
</script>

<template>
  <DataTable :data="billings as unknown as Billing[]" :columns />
</template>
