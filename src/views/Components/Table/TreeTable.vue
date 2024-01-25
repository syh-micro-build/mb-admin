<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Table, type TableColumn } from '@/components/Table'
import { getTreeTableListApi } from '@/api/table'
import { reactive, unref } from 'vue'
import { ElTag } from 'element-plus'
import { useTable } from '@/hooks/web/useTable'
import { BaseButton } from '@/components/Button'

const { tableRegister, tableState } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTreeTableListApi({
      pageIndex: unref(currentPage),
      pageSize: unref(pageSize)
    })
    return {
      list: res.data.list,
      total: res.data.total
    }
  }
})
const { loading, dataList, total, currentPage, pageSize } = tableState

const columns = reactive<TableColumn[]>([
  {
    field: 'selection',
    type: 'selection'
  },
  {
    field: 'index',
    label: '序号',
    type: 'index'
  },
  {
    field: 'content',
    label: '头部',
    children: [
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
        label: '创建时间'
      },
      {
        field: 'importance',
        label: '重要性',
        formatter: (_: Recordable, __: TableColumn, cellValue: number) => {
          return (
            <ElTag type={cellValue === 1 ? 'success' : cellValue === 2 ? 'warning' : 'danger'}>
              {cellValue === 1 ? '重要' : cellValue === 2 ? '良好' : '一般'}
            </ElTag>
          )
        }
      },
      {
        field: 'pageviews',
        label: '阅读数'
      }
    ]
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
])

const actionFn = (data: any) => {
  console.log(data)
}
</script>

<template>
  <ContentWrap :title="`树形表格 示例`">
    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="columns"
      :data="dataList"
      row-key="id"
      :loading="loading"
      sortable
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>
</template>

<style lang="less" scoped>
.el-button {
  margin-top: 10px;
}
</style>
