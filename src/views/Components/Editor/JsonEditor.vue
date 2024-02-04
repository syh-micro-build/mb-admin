<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { JsonEditor } from '@/components/JsonEditor'
import { ref, watch } from 'vue'

const defaultData = ref({
  title: '标题',
  content: '内容'
})

watch(
  () => defaultData.value,
  (val) => {
    console.log(val)
  },
  {
    deep: true
  }
)

setTimeout(() => {
  defaultData.value = {
    title: '异步标题',
    content: '异步内容'
  }
}, 4000)
</script>

<template>
  <ContentWrap title="JSON编辑器" message="基于 vue-json-pretty 二次封装">
    <JsonEditor v-model="defaultData" />
  </ContentWrap>
</template>
