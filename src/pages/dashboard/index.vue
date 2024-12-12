<script lang="ts" setup>
import Page from '@/components/Layout/Page.vue'
import Button from '@/components/ui/button/Button.vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import OverviewContent from './_components/OverviewContent.vue'

const tabs = ref([
  { name: 'Overview', value: 'overview' },
  { name: 'Analytics', value: 'analytics', disabled: true },
  { name: 'Reports', value: 'reports', disabled: true },
  { name: 'Notifications', value: 'notifications', disabled: true },
])

const activeTab = ref(tabs.value[0].value)
</script>

<template>
  <Page
    title="workspace"
    description="workspace description"
    sticky
  >
    <template #actions>
      <Button>Download</Button>
    </template>

    <Tabs :default-value="activeTab" class="w-full">
      <TabsList>
        <TabsTrigger
          v-for="tab in tabs" :key="tab.value"
          :value="tab.value"
          :disabled="tab.disabled"
        >
          {{ tab.name }}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" class="space-y-4">
        <OverviewContent />
      </TabsContent>
    </Tabs>
  </Page>
</template>

<style>

</style>
