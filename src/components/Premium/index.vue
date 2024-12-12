<script lang="ts" setup>
import ShimmerButton from '@/components/inspira-ui/ShimmerButton.vue'
import { PartyPopper } from 'lucide-vue-next'
</script>

<template>
  <div
    class="font-mono rounded-2xl bg-gradient-to-t from-zinc-600/20 to-zinc-600/70 bg-zinc-500/20 p-4"
  >
    <header class="flex items-center justify-between text-white">
      <div class="flex items-center gap-1">
        <PartyPopper />
        <h2 class="flex-1 text-2xl font-bold ml">
          458
        </h2>
      </div>

      <button
        class="bg-zinc-700 rounded-full text-white py-2 px-3 font-mono shadow text-sm"
      >
        {{ $t('premium.premium') }}
      </button>
    </header>

    <main class="my-4">
      <h3 class="text-white/70 text-xs">
        Creadits available
      </h3>
      <div class="text-white my-2 text-lg leading-5">
        Need More? Upgrade your plan
      </div>
    </main>
    <ShimmerButton
      class="bg-zinc-700 rounded-full w-full font-mono"
    >
      {{ $t('premium.UpgradeNow') }}
    </ShimmerButton>
  </div>
</template>

<style>

</style>
