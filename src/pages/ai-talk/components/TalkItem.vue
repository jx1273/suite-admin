<script lang="ts" setup>
import type { TalkType } from './types'
import { cn } from '@/lib/utils'
import Copy from './Copy.vue'
import Refresh from './Refresh.vue'
import RobotAvatar from './RobotAvatar.vue'
import ThumbDown from './ThumbDown.vue'
import ThumbUp from './ThumbUp.vue'

interface Props {
  content: string
  type: TalkType
}

defineProps<Props>()
</script>

<template>
  <div
    :class="cn(
      'text-popover-foreground w-fit flex',
      type === 'self' ? 'text-right ml-auto' : 'text-left mr-auto',
    )"
  >
    <RobotAvatar v-if="type !== 'self'" class="mt-2 mr-2" />
    <div>
      <p class="p-4 rounded-lg bg-muted">
        {{ content }}
      </p>
      <div v-if="type !== 'self'">
        <div class="flex items-center gap-2 mt-2">
          <Copy :content="content" />
          <Refresh />
          <ThumbUp />
          <ThumbDown />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
