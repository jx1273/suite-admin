<script setup lang="ts">
import Page from '@/components/Layout/Page.vue'
import { columns } from './components/columns'
import DataTable from './components/DataTable.vue'
import tasks from './data/tasks.json'
</script>

<template>
  <Page
    title="Tasks"
    description="Tasks description"
    sticky
  >
    <DataTable class="mt-4" :data="tasks" :columns="columns" />
  </Page>
</template>
