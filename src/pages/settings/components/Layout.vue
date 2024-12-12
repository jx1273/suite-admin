<script setup lang="ts">
import Page from '@/components/Layout/Page.vue'

import Aside from './Aside.vue'
</script>

<template>
  <Page
    title="Settings"
    description="Manage your store settings."
  >
    <main class="mt-4 grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-4 w-full">
      <Aside />

      <section>
        <slot />
      </section>
    </main>
  </Page>
</template>
