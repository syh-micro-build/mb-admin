<script setup lang="ts">
import Detail from './components/Detail.vue'
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { BaseButton } from '@/components/Button'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getTableDetApi } from '@/api/table'
import type { TableData } from '@/api/table/types'

const { push, go } = useRouter()

const { query } = useRoute()

const currentRow = ref<Nullable<TableData>>(null)

const getTableDet = async () => {
  const res = await getTableDetApi(query.id as string)
  if (res) {
    currentRow.value = res.data
  }
}

getTableDet()
</script>

<template>
  <ContentDetailWrap title="详情" @back="push('/example/example-page')">
    <template #header>
      <BaseButton @click="go(-1)"> 返回 </BaseButton>
    </template>
    <Detail :current-row="currentRow" />
  </ContentDetailWrap>
</template>
