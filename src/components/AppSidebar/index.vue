<script lang="ts" setup>
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { sidebarData } from './data/sidebar-data'

import NavGroup from './NavGroup.vue'
import NavUser from './NavUser.vue'
import TeamSwitcher from './TeamSwitcher.vue'
</script>

<template>
  <Sidebar collapsible="icon">
    <SidebarHeader>
      <TeamSwitcher :teams="sidebarData.teams" />
    </SidebarHeader>

    <SidebarContent>
      <NavGroup :nav-main="sidebarData.navMain" />
    </SidebarContent>

    <SidebarFooter>
      <NavUser :user="sidebarData.user" />
    </SidebarFooter>

    <SidebarRail />
  </Sidebar>
</template>

<style></style>
