<script lang="ts" setup>
import type { ISBNInfoStruct } from './types'
import { Search } from 'lucide-vue-next'
// import TaskResourceDialog from './task-resource-dialog.vue'
import PQueue from 'p-queue'

// const isOpen = ref(false)
const props = defineProps({
  books: {
    type: Array,
    default: () => [],
  },
})

const emit = defineEmits(['searchResult'])

const queue = new PQueue({ concurrency: 1 })

async function ISBNSearchApi(ISBN: string): Promise<undefined | ISBNInfoStruct> {
  const response = await fetch(
    `http://localhost:3000/api/lms/isbn?isbn=${ISBN}`,
  )
  // await sleep(5000)
  // const response = await fetch(
  //   `https://data.isbn.work/openApi/getInfoByIsbn?isbn=${ISBN}&appKey=ae1718d4587744b0b79f940fbef69e77`
  // )
  const data: { data: ISBNInfoStruct } = await response.json()
  if (!data.data)
    return
  return data.data
}

// const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

async function ISBNSearch() {
  queue.on('completed', (result: ISBNInfoStruct) => {
    // console.log(result, 'each-completed');
    emit('searchResult', { info: result, wait: queue.size, total: props.books.length })
  })

  // const x:any[] = []
  props.books.forEach(async (book: any) => {
    // console.log(book.ISBN, 'ISBN');
    // await sleep(10000)
    // const result = await ISBNSearchApi(book.ISBN)
    if (book.author)
      return
    queue.add(async (): Promise<ISBNInfoStruct | undefined> => {
      const result = await ISBNSearchApi(book.ISBN)
      const data = result
      if (!data)
        return

      return {
        name: data.name,
        isbn: data.isbn,
        author: data.author,
        publisher: data.publisher,
        class: data.class,
        // , name: data.name || data.bookName // 名字不改，以CIP为准
      }
    })
  })
}
</script>

<template>
  <UiButton @click="ISBNSearch">
    ISBN 查询
    <Search />
  </UiButton>
  <!-- <UiDialog v-model:open="isOpen">
    <UiDialogTrigger as-child>
      <UiButton>
        ISBN 查询
        <Plus />
      </UiButton>
    </UiDialogTrigger>

    <UiDialogContent>
      <TaskResourceDialog :task="null" @close="isOpen = false" />
    </UiDialogContent>
  </UiDialog> -->
</template>

<style scoped></style>
