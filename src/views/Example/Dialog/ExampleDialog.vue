<script setup lang="tsx">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { Dialog } from '@/components/Dialog'
import { ElTag } from 'element-plus'
import { Table } from '@/components/Table'
import { getTableListApi, saveTableApi, delTableListApi } from '@/api/table'
import { useTable } from '@/hooks/web/useTable'
import type { TableData } from '@/api/table/types'
import { ref, unref, reactive } from 'vue'
import Write from './components/Write.vue'
import Detail from './components/Detail.vue'
import { type CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { BaseButton } from '@/components/Button'

const ids = ref<string[]>([])

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const { currentPage, pageSize } = tableState
    const res = await getTableListApi({
      pageIndex: unref(currentPage),
      pageSize: unref(pageSize),
      ...unref(searchParams)
    })
    return {
      list: res.data.list,
      total: res.data.total
    }
  },
  fetchDelApi: async () => {
    const res = await delTableListApi(unref(ids))
    return !!res
  }
})
const { loading, dataList, total, currentPage, pageSize } = tableState
const { getList, getElTableExpose, delList } = tableMethods

const searchParams = ref({})
const setSearchParams = (params: any) => {
  searchParams.value = params
  getList()
}

const crudSchemas = reactive<CrudSchema[]>([
  {
    field: 'selection',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      type: 'selection'
    }
  },
  {
    field: 'index',
    label: '序号',
    type: 'index',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    }
  },
  {
    field: 'title',
    label: '标题',
    search: {
      component: 'Input'
    },
    form: {
      component: 'Input',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24
    }
  },
  {
    field: 'author',
    label: '作者',
    search: {
      hidden: true
    }
  },
  {
    field: 'display_time',
    label: '创建时间',
    search: {
      hidden: true
    },
    form: {
      component: 'DatePicker',
      componentProps: {
        type: 'datetime',
        valueFormat: 'YYYY-MM-DD HH:mm:ss'
      }
    }
  },
  {
    field: 'importance',
    label: '重要性',
    search: {
      hidden: true
    },
    form: {
      component: 'Select',
      componentProps: {
        style: {
          width: '100%'
        },
        options: [
          {
            label: '重要',
            value: 3
          },
          {
            label: '良好',
            value: 2
          },
          {
            label: '一般',
            value: 1
          }
        ]
      }
    },
    detail: {
      slots: {
        default: (data: any) => {
          return (
            <ElTag
              type={
                data.importance === 1 ? 'success' : data.importance === 2 ? 'warning' : 'danger'
              }
            >
              {data.importance === 1 ? '重要' : data.importance === 2 ? '良好' : '一般'}
            </ElTag>
          )
        }
      }
    }
  },
  {
    field: 'pageviews',
    label: '阅读数',
    search: {
      hidden: true
    },
    form: {
      component: 'InputNumber',
      value: 0
    }
  },
  {
    field: 'content',
    label: '内容',
    search: {
      hidden: true
    },
    table: {
      show: false
    },
    form: {
      component: 'Editor',
      colProps: {
        span: 24
      }
    },
    detail: {
      span: 24,
      slots: {
        default: (data: any) => {
          return <div innerHTML={data.content}></div>
        }
      }
    }
  },
  {
    field: 'action',
    width: '260px',
    label: '操作',
    search: {
      hidden: true
    },
    form: {
      hidden: true
    },
    detail: {
      hidden: true
    },
    table: {
      slots: {
        default: (data: any) => {
          return (
            <>
              <BaseButton type="primary" onClick={() => action(data.row, 'edit')}>
                编辑
              </BaseButton>
              <BaseButton type="success" onClick={() => action(data.row, 'detail')}>
                详情
              </BaseButton>
              <BaseButton type="danger" onClick={() => delData(data.row)}>
                删除
              </BaseButton>
            </>
          )
        }
      }
    }
  }
])

// @ts-ignore
const { allSchemas } = useCrudSchemas(crudSchemas)

const dialogVisible = ref(false)
const dialogTitle = ref('')

const currentRow = ref<TableData | null>(null)
const actionType = ref('')

const AddAction = () => {
  dialogTitle.value = '新增'
  currentRow.value = null
  dialogVisible.value = true
  actionType.value = ''
}

const delLoading = ref(false)

const delData = async (row: TableData | null) => {
  const elTableExpose = await getElTableExpose()
  ids.value = row ? [row.id] : elTableExpose?.getSelectionRows().map((v: TableData) => v.id) || []
  delLoading.value = true
  await delList(unref(ids).length).finally(() => {
    delLoading.value = false
  })
}

const action = (row: TableData, type: string) => {
  dialogTitle.value = type === 'edit' ? '编辑' : '详情'
  actionType.value = type
  currentRow.value = row
  dialogVisible.value = true
}

const writeRef = ref<ComponentRef<typeof Write>>()

const saveLoading = ref(false)

const save = async () => {
  const write = unref(writeRef)
  const formData = await write?.submit()
  if (formData) {
    saveLoading.value = true
    const res = await saveTableApi(formData)
      .catch(() => {})
      .finally(() => {
        saveLoading.value = false
      })
    if (res) {
      dialogVisible.value = false
      currentPage.value = 1
      getList()
    }
  }
}
</script>

<template>
  <ContentWrap>
    <Search :schema="allSchemas.searchSchema" @search="setSearchParams" @reset="setSearchParams" />

    <div class="mb-10px">
      <BaseButton type="primary" @click="AddAction">新增</BaseButton>
      <BaseButton :loading="delLoading" type="danger" @click="delData(null)"> 删除 </BaseButton>
    </div>

    <Table
      v-model:pageSize="pageSize"
      v-model:currentPage="currentPage"
      :columns="allSchemas.tableColumns"
      :data="dataList"
      :loading="loading"
      :pagination="{
        total: total
      }"
      @register="tableRegister"
    />
  </ContentWrap>

  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <Write
      v-if="actionType !== 'detail'"
      ref="writeRef"
      :form-schema="allSchemas.formSchema"
      :current-row="currentRow"
    />

    <Detail
      v-if="actionType === 'detail'"
      :detail-schema="allSchemas.detailSchema"
      :current-row="currentRow"
    />

    <template #footer>
      <BaseButton
        v-if="actionType !== 'detail'"
        type="primary"
        :loading="saveLoading"
        @click="save"
      >
        保存
      </BaseButton>
      <BaseButton @click="dialogVisible = false">关闭</BaseButton>
    </template>
  </Dialog>
</template>
