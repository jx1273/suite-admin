<script setup lang="ts">
import Page from '@/components/Layout/Page.vue'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'

interface ISocialMediaAccount {
  title: string
  desc: string
  url: string
}

const socialMediaAccounts = ref<ISocialMediaAccount[]>([
  { title: 'GitHub', desc: ' The source code of Shadcn UI is publicly available on GitHub.', url: '' },
  { title: 'Discord', desc: 'Join our Discord server to ask questions, share your projects, and get involved in the community.', url: '' },
  { title: 'Bilibili', desc: '在哔哩哔哩上找到我们', url: '' },
])
</script>

<template>
  <Page
    title="Help Center"
    description="Help Center description"
  >
    <Alert class="mt-4">
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can find answers to your questions in our help center.
      </AlertDescription>
    </Alert>

    <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <li v-for="account in socialMediaAccounts" :key="account.title">
        <a href="#" target="_blank" rel="noopener noreferrer" class="block p-4 bg-white rounded-lg border border-stone-200 shadow">
          <h2 class="text-lg font-bold mb-2">{{ account.title }}</h2>
          <p class="text-sm text-stone-500">
            {{ account.desc }}
          </p>
        </a>
      </li>
    </ul>
  </Page>
</template>

<style scoped>
</style>
