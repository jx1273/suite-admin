<script lang="ts" setup>
// import { toast } from '@/components/ui/toast/use-toast'
import { Upload } from 'lucide-vue-next'
import { defineEmits } from 'vue'
import * as XLSX from 'xlsx-js-style'

const emit = defineEmits<{
  (event: 'onSubmit', value: any[]): void
}>()
const isOpen = ref(false)
const file = ref()
const error = ref()
const fileObject = ref<File>()
watch(file, () => {
  error.value = null
})
watch(isOpen, () => {
  file.value = null
})
async function xlsxUpload(e: Event) {
  // console.log(e, 'e');
  const input = e.target as HTMLInputElement
  // const file = input.files?.[0]
  fileObject.value = input.files![0]
  // console.log(file, 'file');
  if (!fileObject.value) {

  }
}
async function onSubmit() {
  error.value = null
  // console.log(fileObject.value, 'fileObject.value');
  if (!fileObject.value) {
    error.value = 'File is required'
    return
  }
  const buffer = await fileObject.value.arrayBuffer()
  const workbook = XLSX.read(buffer)
  const worksheet = workbook.Sheets[workbook.SheetNames[0]]
  if (!workbook.SheetNames.length) {
    throw new Error('Excel 文件中没有工作表')
  }
  // 开始读取数据
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { range: 0 })
  // console.log(jsonData, 'jsonData');
  emit(
    'onSubmit',
    jsonData.map((item: any) => {
      return { ISBN: item.ISBN, name: item['书名'] }
    }),
  )
  // 关闭对话框
  isOpen.value = false
}
</script>

<template>
  <UiDialog v-model:open="isOpen">
    <UiDialogTrigger as-child>
      <UiButton variant="outline">
        上传
        <Upload />
      </UiButton>
    </UiDialogTrigger>

    <UiDialogContent>
      <UiDialogHeader>
        <UiDialogTitle>上传ISBN录入数据</UiDialogTitle>
        <UiDialogDescription>
          从excel文件上传ISBN录入数据
        </UiDialogDescription>
      </UiDialogHeader>

      <div class="grid w-full max-w-sm items-center gap-1.5">
        <UiLabel>文件上传</UiLabel>
        <UiInput id="file" v-model="file" type="file" accept=".xlsx,.xls" @change="xlsxUpload" />
        <span v-if="error" class="text-destructive">{{ error }}</span>
      </div>
      <UiDialogFooter>
        <UiButton variant="secondary" @click="isOpen = false">
          Cancel
        </UiButton>
        <UiButton @click="onSubmit">
          Import
        </UiButton>
      </UiDialogFooter>
    </UiDialogContent>
  </UiDialog>
</template>

<style scoped></style>
