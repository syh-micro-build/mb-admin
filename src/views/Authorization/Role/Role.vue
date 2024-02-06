<script setup lang="tsx">
import { reactive, ref, unref } from 'vue'
import { getRoleListApi } from '@/api/role'
import { useTable } from '@/hooks/web/useTable'
import { Table, type TableColumn } from '@/components/Table'
import { ElTag } from 'element-plus'
import { Search } from '@/components/Search'
import type { FormSchema } from '@/components/Form'
import { ContentWrap } from '@/components/ContentWrap'
import Write from './components/Write.vue'
import Detail from './components/Detail.vue'
import { Dialog } from '@/components/Dialog'
import { BaseButton } from '@/components/Button'

const { tableRegister, tableState, tableMethods } = useTable({
  fetchDataApi: async () => {
    const res = await getRoleListApi()
    return {
      list: res.data.list || [],
      total: res.data.total
    }
  }
})

const { dataList, loading, total } = tableState
const { getList } = tableMethods

const tableColumns = reactive<TableColumn[]>([
  {
    field: 'index',
    label: '序号',
    type: 'index'
  },
  {
    field: 'roleName',
    label: '角色名称'
  },
  {
    field: 'status',
    label: '状态',
    slots: {
      default: (data: any) => {
        return (
          <>
            <ElTag type={data.row.status === 0 ? 'danger' : 'success'}>
              {data.row.status === 1 ? '启用' : '禁用'}
            </ElTag>
          </>
        )
      }
    }
  },
  {
    field: 'createTime',
    label: '创建时间'
  },
  {
    field: 'remark',
    label: '备注'
  },
  {
    field: 'action',
    label: '操作',
    width: 240,
    slots: {
      default: (data: any) => {
        const row = data.row
        return (
          <>
            <BaseButton type="primary" onClick={() => action(row, 'edit')}>
              编辑
            </BaseButton>
            <BaseButton type="success" onClick={() => action(row, 'detail')}>
              详情
            </BaseButton>
            <BaseButton type="danger">删除</BaseButton>
          </>
        )
      }
    }
  }
])

const searchSchema = reactive<FormSchema[]>([
  {
    field: 'roleName',
    label: '角色名称',
    component: 'Input'
  }
])

const searchParams = ref({})
const setSearchParams = (data: any) => {
  searchParams.value = data
  getList()
}

const dialogVisible = ref(false)
const dialogTitle = ref('')

const currentRow = ref()
const actionType = ref('')

const writeRef = ref<ComponentRef<typeof Write>>()

const saveLoading = ref(false)

const action = (row: any, type: string) => {
  dialogTitle.value = type === 'edit' ? '编辑' : '详情'
  actionType.value = type
  currentRow.value = row
  dialogVisible.value = true
}

const AddAction = () => {
  dialogTitle.value = '新增'
  currentRow.value = undefined
  dialogVisible.value = true
  actionType.value = ''
}

const save = async () => {
  const write = unref(writeRef)
  const formData = await write?.submit()
  if (formData) {
    saveLoading.value = true
    setTimeout(() => {
      saveLoading.value = false
      dialogVisible.value = false
    }, 1000)
  }
}
</script>

<template>
  <ContentWrap>
    <Search :schema="searchSchema" @reset="setSearchParams" @search="setSearchParams" />
    <div class="mb-10px">
      <BaseButton type="primary" @click="AddAction">新增</BaseButton>
    </div>
    <Table
      :columns="tableColumns"
      default-expand-all
      node-key="id"
      :data="dataList"
      :loading="loading"
      :pagination="{
        total
      }"
      @register="tableRegister"
    />
  </ContentWrap>

  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <Write v-if="actionType !== 'detail'" ref="writeRef" :current-row="currentRow" />
    <Detail v-else :current-row="currentRow" />

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
