<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Dialog } from '@/components/Dialog'
import { BaseButton } from '@/components/Button'
import { ref, reactive } from 'vue'
import { Form, type FormSchema } from '@/components/Form'
import { useValidator } from '@/hooks/web/useValidator'
import { getDictOneApi } from '@/api/common'
import { useForm } from '@/hooks/web/useForm'
import Echart from './Echart.vue'

const { required } = useValidator()

const dialogVisible = ref(false)

const dialogVisible2 = ref(false)

const { formRegister, formMethods } = useForm()
const { getElFormExpose } = formMethods

const schema = reactive<FormSchema[]>([
  {
    field: 'field1',
    label: '输入框',
    component: 'Input',
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'field2',
    label: '选择器',
    component: 'Select',
    // componentProps: {
    //   options: []
    // },
    optionApi: async () => {
      const res = await getDictOneApi()
      return res.data
    }
  },
  {
    field: 'field3',
    label: '单选框',
    component: 'RadioGroup',
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ]
    }
  },
  {
    field: 'field4',
    label: '多选框',
    component: 'CheckboxGroup',
    value: [],
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        }
      ]
    }
  },
  {
    field: 'field5',
    component: 'DatePicker',
    label: '日期选择器',
    componentProps: {
      type: 'date'
    }
  },
  {
    field: 'field6',
    component: 'TimeSelect',
    label: '时间选择'
  }
])

const formSubmit = async () => {
  const elFormExpose = await getElFormExpose()
  elFormExpose?.validate((valid) => {
    if (valid) {
      console.log('submit success')
    } else {
      console.log('submit fail')
    }
  })
}
</script>

<template>
  <ContentWrap title="弹窗" message="基于 ElementPlus 的 Dialog 组件二次封装">
    <BaseButton type="primary" @click="dialogVisible = !dialogVisible"> 打开 </BaseButton>

    <BaseButton type="primary" @click="dialogVisible2 = !dialogVisible2"> 与表单结合 </BaseButton>

    <Dialog v-model="dialogVisible" title="弹窗">
      <Echart />
      <template #footer>
        <BaseButton @click="dialogVisible = false">关闭</BaseButton>
      </template>
    </Dialog>

    <Dialog v-model="dialogVisible2" title="弹窗">
      <Form :schema="schema" @register="formRegister" />
      <template #footer>
        <BaseButton type="primary" @click="formSubmit">提交</BaseButton>
        <BaseButton @click="dialogVisible2 = false">关闭</BaseButton>
      </template>
    </Dialog>
  </ContentWrap>
</template>
