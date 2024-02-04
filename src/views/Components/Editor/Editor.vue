<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Editor, type EditorExpose } from '@/components/Editor'
import type { IDomEditor } from '@wangeditor/editor'
import { ref, onMounted, unref } from 'vue'

const change = (editor: IDomEditor) => {
  console.log(editor.getHtml())
}

const editorRef = ref<typeof Editor & EditorExpose>()

const defaultHtml = ref('')

onMounted(async () => {
  const editor = await unref(editorRef)?.getEditorRef()
  console.log(editor)
})

setTimeout(() => {
  defaultHtml.value = '<p>hello <strong>world</strong></p>'
}, 3000)
</script>

<template>
  <ContentWrap title="富文本" message="基于 wangeditor 二次封装">
    <Editor v-model="defaultHtml" ref="editorRef" @change="change" />
  </ContentWrap>
</template>
