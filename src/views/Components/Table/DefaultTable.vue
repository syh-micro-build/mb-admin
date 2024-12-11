<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Table, type TableColumn } from '@/components/Table'
import { getTableListApi } from '@/api/table'
import type { TableData } from '@/api/table/types'
import { ref, h } from 'vue'
import { ElTag } from 'element-plus'
import { BaseButton } from '@/components/Button'

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
    field: 'author',
    label: '作者'
  },
  {
    field: 'display_time',
    label: '创建时间',
    sortable: true
  },
  {
    field: 'importance',
    label: '重要性',
    formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
      return h(
        ElTag,
        {
          type: cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'
        },
        () => (cellValue === 1 ? '重要' : cellValue === 2 ? '良好' : '一般')
      )
    }
  },
  {
    field: 'pageviews',
    label: '阅读数'
  },
  {
    field: 'action',
    label: '操作',
    slots: {
      default: (data) => {
        return (
          <BaseButton type="primary" onClick={() => actionFn(data)}>
            操作
          </BaseButton>
        )
      }
    }
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

const actionFn = (data: any) => {
  console.log(data)
}
</script>

<template>
  <ContentWrap title="表格" message="基于 ElementPlus 的 Table 组件二次封装">
    <Table
      :columns="columns"
      :data="tableDataList"
      :loading="loading"
      :defaultSort="{ prop: 'display_time', order: 'descending' }"
    />
  </ContentWrap>
</template>
