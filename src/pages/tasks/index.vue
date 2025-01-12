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
    <div class="w-[calc(100svw-2rem)] md:w-full overflow-x-auto">
      <DataTable :data="tasks" :columns="columns" />
    </div>
  </Page>
</template>
