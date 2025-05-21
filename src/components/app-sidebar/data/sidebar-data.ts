import type { SidebarData, Team, User } from '../types'

import {
  GalleryVerticalEnd,
} from 'lucide-vue-next'

import { useSidebar } from '@/composables/use-sidebar'

const user: User = {
  name: '1273办公室',
  email: 'm@example.com',
  avatar: '/avatars/shadcn.jpg',
}

const teams: Team[] = [
  {
    name: '1273江夏文化传承基地',
    logo: GalleryVerticalEnd,
    plan: 'Enterprise',
  },
]

const { navData } = useSidebar()

export const sidebarData: SidebarData = {
  user,
  teams,
  navMain: navData.value!,
}
