<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar/index.vue'
import MenuSearch from '@/components/Search/Menu.vue'
import ToggleTheme from '@/components/ToggleTheme.vue'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12"
      >
        <div class="flex items-center gap-2 px-4 w-full">
          <SidebarTrigger class="-ml-1" />
          <MenuSearch />
          <div class="flex-1" />
          <ToggleTheme />
        </div>
      </header>
      <div
        class="flex flex-1 flex-col gap-4 p-4 pt-0"
      >
        <router-view />
      </div>
    </SidebarInset>
  </SidebarProvider>
</template>
