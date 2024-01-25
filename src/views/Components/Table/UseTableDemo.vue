<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Table, type TableColumn, type TableSlotDefault } from '@/components/Table'
import { getTableListApi } from '@/api/table'
import { ref, reactive, unref, onMounted } from 'vue'
import { ElTag } from 'element-plus'
import { useTable } from '@/hooks/web/useTable'
import { BaseButton } from '@/components/Button'

const { tableRegister, tableMethods, tableState } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTableListApi({
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
const { setProps, setColumn, getElTableExpose, addColumn, delColumn, refresh } = tableMethods

const columns = reactive<TableColumn[]>([])

onMounted(() => {
  setTimeout(() => {
    setProps({
      columns: [
        {
          field: 'expand',
          type: 'expand',
          slots: {
            default: (data: TableSlotDefault) => {
              const { row } = data
              return (
                <div class="ml-30px">
                  <div>标题：{row.title}</div>
                  <div>作者：{row.author}</div>
                  <div>创建时间：{row.display_time}</div>
                </div>
              )
            }
          }
        },
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
    })
  }, 2000)
})

const actionFn = (data: TableSlotDefault) => {
  console.log(data)
}

const canShowPagination = ref(true)
const showPagination = (show: boolean) => {
  canShowPagination.value = show
}

const reserveIndex = (custom: boolean) => {
  setProps({
    reserveIndex: custom
  })
}

const showSelections = (show: boolean) => {
  setColumn([
    {
      field: 'selection',
      path: 'hidden',
      value: !show
    }
  ])
}

const index = ref(1)

const changeTitle = () => {
  setColumn([
    {
      field: 'title',
      path: 'label',
      value: `标题${unref(index)}`
    }
  ])
  index.value++
}

const showExpandedRows = (show: boolean) => {
  setColumn([
    {
      field: 'expand',
      path: 'hidden',
      value: !show
    }
  ])
}

const selectAllNone = async () => {
  const elTableRef = await getElTableExpose()
  elTableRef?.toggleAllSelection()
}

const showAction = ref(true)
const delOrAddAction = () => {
  if (unref(showAction)) {
    delColumn('action')
    showAction.value = false
  } else {
    addColumn({
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
    })
    showAction.value = true
  }
}

const showStripe = ref(false)
const showOrHiddenStripe = () => {
  setProps({
    stripe: !unref(showStripe)
  })
  showStripe.value = !unref(showStripe)
}

const height = ref<string | number>('auto')
const fixedHeaderOrAuto = () => {
  if (unref(height) === 'auto') {
    setProps({
      height: 300
    })
    height.value = 300
  } else {
    setProps({
      height: 'auto'
    })
    height.value = 'auto'
  }
}

const getSelections = async () => {
  const elTableRef = await getElTableExpose()
  const selections = elTableRef?.getSelectionRows()
  console.log(selections)
}
</script>

<template>
  <ContentWrap :title="`UseTable 操作`" style="margin-bottom: 20px">
    <BaseButton @click="showPagination(true)"> 显示 分页 </BaseButton>
    <BaseButton @click="showPagination(false)"> 隐藏 分页 </BaseButton>

    <BaseButton @click="reserveIndex(true)">叠加序号</BaseButton>
    <BaseButton @click="reserveIndex(false)">还原序号</BaseButton>

    <BaseButton @click="showSelections(true)">显示多选</BaseButton>
    <BaseButton @click="showSelections(false)">隐藏多选</BaseButton>

    <BaseButton @click="changeTitle">修改标题</BaseButton>

    <BaseButton @click="showExpandedRows(true)">显示展开行</BaseButton>
    <BaseButton @click="showExpandedRows(false)">隐藏展开行</BaseButton>

    <BaseButton @click="selectAllNone">全选/全不选</BaseButton>

    <BaseButton @click="delOrAddAction">删除/添加操作列</BaseButton>

    <BaseButton @click="showOrHiddenStripe">显示/隐藏斑马纹</BaseButton>

    <BaseButton @click="fixedHeaderOrAuto">固定头部/自动</BaseButton>

    <BaseButton @click="getSelections">获取多选数据</BaseButton>

    <!-- <BaseButton @click="showOrHiddenSortable">{{ t('tableDemo.showOrHiddenSortable') }}</BaseButton> -->
  </ContentWrap>
  <ContentWrap title="UseTable 示例">
    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      showAction
      :columns="columns"
      :data="dataList"
      :loading="loading"
      :pagination="
        canShowPagination
          ? {
              total: total
            }
          : undefined
      "
      @register="tableRegister"
      @refresh="refresh"
    />
  </ContentWrap>
</template>

<style lang="less" scoped>
.el-button {
  margin-top: 10px;
}
</style>
