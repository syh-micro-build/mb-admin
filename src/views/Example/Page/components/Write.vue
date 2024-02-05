<script setup lang="ts">
import { Form, type FormSchema } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { type PropType, reactive, watch } from 'vue'
import type { TableData } from '@/api/table/types'
import { useValidator } from '@/hooks/web/useValidator'
import type { IDomEditor } from '@wangeditor/editor'

const { required } = useValidator()

const props = defineProps({
  currentRow: {
    type: Object as PropType<Nullable<TableData>>,
    default: () => null
  }
})

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose, setSchema } = formMethods

const schema = reactive<FormSchema[]>([
  {
    field: 'title',
    label: '标题',
    component: 'Input',
    formItemProps: {
      rules: [required()]
    },
    colProps: {
      span: 24
    }
  },
  {
    field: 'author',
    label: '作者',
    component: 'Input',
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'display_time',
    label: '创建时间',
    component: 'DatePicker',
    componentProps: {
      type: 'datetime',
      valueFormat: 'YYYY-MM-DD HH:mm:ss'
    },
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'importance',
    label: '重要性',
    component: 'Select',
    formItemProps: {
      rules: [required()]
    },
    componentProps: {
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
  {
    field: 'pageviews',
    label: '阅读数',
    component: 'InputNumber',
    value: 0,
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'content',
    component: 'Editor',
    colProps: {
      span: 24
    },
    componentProps: {
      defaultHtml: '',
      // @ts-ignore
      onChange: (edit: IDomEditor) => {
        setValues({
          content: edit.getHtml()
        })
      }
    },
    label: '内容'
  }
])

const rules = reactive({
  title: [required()],
  author: [required()],
  importance: [required()],
  pageviews: [required()],
  display_time: [required()],
  content: [required()]
})

const submit = async () => {
  const elForm = await getElFormExpose()
  const valid = await elForm?.validate().catch((err) => {
    console.log(err)
  })
  if (valid) {
    const formData = await getFormData()
    return formData
  }
}

watch(
  () => props.currentRow,
  (currentRow) => {
    if (!currentRow) return
    setValues(currentRow)
    setSchema([
      {
        field: 'content',
        path: 'componentProps.defaultHtml',
        value: currentRow.content
      }
    ])
  },
  {
    deep: true,
    immediate: true
  }
)

defineExpose({
  submit
})
</script>

<template>
  <Form :rules="rules" @register="formRegister" :schema="schema" />
</template>
