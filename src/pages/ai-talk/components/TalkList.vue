<script lang="ts" setup>
import TalkItem from './TalkItem.vue'

interface Props {
  talks: {
    type: string
    text: string
  }[]
}

defineProps<Props>()
</script>

<template>
  <div class="">
    <TalkItem
      v-for="talk in talks" :key="talk.text"
      :content="talk.text"
      :type="talk.type"
      class="mb-2"
    />
  </div>
</template>

<style scoped>

</style>
