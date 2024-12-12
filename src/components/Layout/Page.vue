<script lang="ts" setup>
import type { LayoutHeaderProps } from './types'
import Header from './Header.vue'

defineProps<LayoutHeaderProps>()
</script>

<template>
  <main>
    <Header
      :title="title"
      :description="description"
      :sticky="sticky"
    >
      <template #actions>
        <slot name="actions" />
      </template>
    </Header>

    <slot />
  </main>
</template>
