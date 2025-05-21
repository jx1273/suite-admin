<script setup lang="ts">
import {
  createColumnHelper,
  FlexRender,
  getCoreRowModel,
  useVueTable,
} from '@tanstack/vue-table'
import { ref } from 'vue'
//
// [
//     {
//         "ISBN": "9787811201093",
//         "name": "20世纪泰国华文文学史"
//     }
// ]

// 定义书籍类型
export interface Book {
  ISBN: string
  name: string
  author?: string
  publisher?: string
  class?: string
}

// 接收外部传入的数据
const props = defineProps<{
  books: Book[]
}>()
// 默认数据，用于测试
const defaultData: Book[] = [
  {
    ISBN: '9787811201093',
    name: '20世纪泰国华文文学史',
  },
  {
    ISBN: '9787000000000',
    name: '示例书籍1',
  },
  {
    ISBN: '9787111111111',
    name: '示例书籍2',
  },
]

const columnHelper = createColumnHelper<Book>()

// 定义表格列
const columns = [
  columnHelper.accessor('ISBN', {
    header: () => 'ISBN',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('name', {
    header: () => '书名',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('author', {
    header: () => '作者',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('publisher', {
    header: () => '出版社',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
  columnHelper.accessor('class', {
    header: () => '分类号',
    cell: info => info.getValue(),
    footer: props => props.column.id,
  }),
]

// 使用传入的数据或默认数据
const data = ref(props.books || defaultData)
const table = useVueTable({
  get data() {
    return data.value
  },
  columns,
  getCoreRowModel: getCoreRowModel(),
})
function refresh() {
  // console.log('refresh', data.value)
  data.value = [...props.books]
  table.getRowModel()
}
defineExpose({
  refresh,
})
watch(props, () => {
  // console.log(props, 'props change');
  data.value = props.books || defaultData
  table.getCoreRowModel()
})
</script>

<template>
  <div class="p-2">
    <div class="relative">
      <!-- 表格容器 -->
      <table class="tanstack-table w-full">
        <!-- 表头部分 -->
        <thead>
          <tr v-for="headerGroup in table.getHeaderGroups()" :key="headerGroup.id">
            <th
              v-for="header in headerGroup.headers" :key="header.id" :colSpan="header.colSpan"
              class="tanstack-th sticky top-0 z-10"
            >
              <FlexRender
                v-if="!header.isPlaceholder" :render="header.column.columnDef.header"
                :props="header.getContext()"
              />
            </th>
          </tr>
        </thead>
        <!-- 表格内容区域，设置固定高度和滚动 -->
        <tbody class="block max-h-[60vh] overflow-y-auto">
          <tr v-for="row in table.getRowModel().rows" :key="row.id" class="tanstack-tr">
            <td v-for="cell in row.getVisibleCells()" :key="cell.id" class="tanstack-td">
              <FlexRender :render="cell.column.columnDef.cell" :props="cell.getContext()" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="h-4" />
    <!-- <UiButton variant="outline" @click="download">导出</UiButton> -->
  </div>
</template>

<style>
.tanstack-table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.5rem;
    font-family: sans-serif;
    font-size: 14px;
}

.tanstack-th {
    position: relative;
    padding: 0.75rem 1rem;
    font-weight: 600;
    text-align: left;
    color: rgba(0, 0, 0, 0.87);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.04);
}

.tanstack-td {
    padding: 0.75rem 1rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.tanstack-tr:last-child .tanstack-td {
    border-bottom: none;
}

.tanstack-tr:hover {
    background-color: rgba(0, 0, 0, 0.02);
}

/* 确保表格内容区域可以滚动 */
tbody.overflow-y-auto {
    display: block;
    overflow-y: auto;
}

/* 修复表格行在滚动容器中的显示 */
tbody.overflow-y-auto tr {
    display: table;
    width: 100%;
    table-layout: fixed;
}

/* 确保表头固定 */
thead {
    display: table;
    width: 100%;
    table-layout: fixed;
}

tfoot {
    color: rgba(0, 0, 0, 0.6);
}

tfoot .tanstack-th {
    font-weight: normal;
    background-color: transparent;
}

button {
    background-color: #f9fafb;
    border-radius: 0.375rem;
    transition: all 0.2s;
}

button:hover {
    background-color: #f3f4f6;
}
</style>
