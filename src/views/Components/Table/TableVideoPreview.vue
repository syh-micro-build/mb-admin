<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Table, type TableColumn } from '@/components/Table'
import { getTableListApi } from '@/api/table'
import type { TableData } from '@/api/table/types'
import { ref } from 'vue'

interface Params {
  pageIndex?: number
  pageSize?: number
}

const columns: TableColumn[] = [
  {
    field: 'title',
    label: '标题'
  },
  {
    field: 'video_uri',
    label: '视频预览'
  },
  {
    field: 'author',
    label: '作者'
  },
  {
    field: 'display_time',
    label: '创建时间'
  },
  {
    field: 'pageviews',
    label: '阅读数'
  }
]

const loading = ref(true)

const tableDataList = ref<TableData[]>([])

const getTableList = async (params?: Params) => {
  const res = await getTableListApi(
    params || {
      pageIndex: 1,
      pageSize: 10
    }
  )
    .catch(() => {})
    .finally(() => {
      loading.value = false
    })
  if (res) {
    tableDataList.value = res.data.list
  }
}

getTableList()
</script>

<template>
  <ContentWrap title="表格图片预览">
    <Table
      :columns="columns"
      :data="tableDataList"
      :loading="loading"
      :video-preview="['image_uri', 'video_uri']"
    />
  </ContentWrap>
</template>
