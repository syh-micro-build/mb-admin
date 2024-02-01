<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Highlight } from '@/components/Highlight'
import { ElMessage } from 'element-plus'

const keyClick = (key: string) => {
  ElMessage.info(key)
}
</script>

<template>
  <ContentWrap title="高亮">
    <Highlight :keys="['十年前', '现在']" @click="keyClick">
      种一棵树最好的时间是十年前，其次就是现在。
    </Highlight>
  </ContentWrap>
</template>
