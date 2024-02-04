<script setup lang="ts">
import { type CrudSchema, useCrudSchemas } from '@/hooks/web/useCrudSchemas'
import { reactive } from 'vue'
import { JsonEditor } from '@/components/JsonEditor'
import { ContentWrap } from '@/components/ContentWrap'
import { ElRow, ElCol } from 'element-plus'

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
      span: 24
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
    }
  }
])

const { allSchemas } = useCrudSchemas(crudSchemas)
</script>

<template>
  <ContentWrap title="useCrudSchemas">
    <ElRow :gutter="20">
      <ElCol :span="24">
        <ContentWrap title="原始数据数据" class="mt-20px">
          <JsonEditor v-model="crudSchemas" />
        </ContentWrap>
      </ElCol>
      <ElCol :span="24">
        <ContentWrap title="查询组件数据结构" class="mt-20px">
          <JsonEditor v-model="allSchemas.searchSchema" />
        </ContentWrap>
      </ElCol>
      <ElCol :span="24">
        <ContentWrap title="表单组件数据结构" class="mt-20px">
          <JsonEditor v-model="allSchemas.formSchema" />
        </ContentWrap>
      </ElCol>
      <ElCol :span="24">
        <ContentWrap title="表格组件数据结构" class="mt-20px">
          <JsonEditor v-model="allSchemas.tableColumns" />
        </ContentWrap>
      </ElCol>
      <ElCol :span="24">
        <ContentWrap title="详情组件数据结构" class="mt-20px">
          <JsonEditor v-model="allSchemas.detailSchema" />
        </ContentWrap>
      </ElCol>
    </ElRow>
  </ContentWrap>
</template>
