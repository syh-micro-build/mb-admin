<script setup lang="tsx">
import { type PropType, reactive } from 'vue'
import type { TableData } from '@/api/table/types'
import { Descriptions, type DescriptionsSchema } from '@/components/Descriptions'
import { ElTag } from 'element-plus'

defineProps({
  currentRow: {
    type: Object as PropType<Nullable<TableData>>,
    default: () => null
  }
})

const schema = reactive<DescriptionsSchema[]>([
  {
    field: 'title',
    label: '标题',
    span: 24
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
    slots: {
      default: (data: any) => {
        return (
          <ElTag
            type={data.importance === 1 ? 'success' : data.importance === 2 ? 'warning' : 'danger'}
          >
            {data.importance === 1 ? '重要' : data.importance === 2 ? '良好' : '一般'}
          </ElTag>
        )
      }
    }
  },
  {
    field: 'pageviews',
    label: '阅读数'
  },
  {
    field: 'content',
    label: '内容',
    span: 24,
    slots: {
      default: (data: any) => {
        return <div innerHTML={data.content}></div>
      }
    }
  }
])
</script>

<template>
  <Descriptions :schema="schema" :data="currentRow || {}" />
</template>
