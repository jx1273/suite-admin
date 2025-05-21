<script setup lang="ts">
import type { ISBNInfoStruct } from './components/types'
import { ref } from 'vue'
import * as XLSX from 'xlsx-js-style'
import Page from '@/components/global-layout/basic-page.vue'
import ISBNImport from './components/ISBN-import.vue'
// import { columns } from './components/columns'
// import DataTable from './components/data-table.vue'
import ISBNSearch from './components/ISBN-search.vue'
import ISBNTable from './components/ISBN-table.vue'
// import tasks from './data/tasks.json'
const data = ref<ImportListStruct[]>([])
const jobWait = ref(0)

async function ISBNImported(jsonData: ImportListStruct[]) {
  // console.log(jsonData, 'data----');
  data.value = jsonData
  // console.log(data, 'data');
}
const isbnTableRef = ref<any>(null)
interface ImportListStruct {
  ISBN: string
  name: string
  author: string
  publisher: string
  class: string
}
interface SearchReport {
  info: ISBNInfoStruct
  total: number
  wait: number
}
async function ISBNSearchResult(searchReport: SearchReport) {
  jobWait.value = searchReport.wait
  // console.log(jsonData, 'data???');
  const info = searchReport.info
  if (!info)
    return
  // const data = searchReport.info
  // console.log(data.value, 'data2???');
  const index = data.value.findIndex((x: any) => {
    // console.log(x.ISBN, info.isbn);
    return x.ISBN === info.isbn
  })

  if (index !== -1) {
    const old = { ...data.value[index] }
    // console.log('find', info);
    // console.log('index', index);
    // console.log(data.value[index], 'data3???');
    old.author = info.author || ''
    old.publisher = info.publisher || ''
    old.class = info.class || ''
    // old.name = info.name
    data.value.splice(index, 1, old)
    // console.log(data.value[index], 'data4???');
    isbnTableRef.value.refresh()
  }
}
async function download() {
  // const template = ['书名', '作者', '出版社', '中图分类号', '入库日期', '来源', '去向', 'ISBN']
  const t = data.value.map((item: any) => {
    return {
      书名: item.name,
      作者: item.author || '',
      出版社: item.publisher || '',
      中图分类号: item.class || '',
      入库日期: '',
      来源: '',
      去向: '',
      ISBN: item.isbn || item.ISBN,
    }
  })
  // console.log(t, '>>>>>>>>>')
  // return
  const worksheet = XLSX.utils.json_to_sheet(t)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet)
  XLSX.writeFile(workbook, '书库导入.xlsx')
  // const xlsxbuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' })
}
</script>

<template>
  <Page title="ISBN 查询" description="导入ISBN录入记录，导出ISBN查询结果" sticky>
    <template #actions>
      <ISBNImport @on-submit="ISBNImported" />
      <!-- <TaskCreate /> -->
      <ISBNSearch :books="data" @search-result="ISBNSearchResult" />

      <UiButton variant="outline" :disabled="jobWait ? true : (data.length === 0 ? true : false)" @click="download">
        {{
          jobWait === 0 ? '导出' : `${data.length - jobWait}/${data.length}` }}
      </UiButton>
    </template>
    <div class="w-[calc(100svw-2rem)] md:w-full overflow-x-auto">
      <ISBNTable ref="isbnTableRef" :books="data" />
    </div>
  </Page>
</template>
