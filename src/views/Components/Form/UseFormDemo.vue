<script setup lang="tsx">
import { Form, type FormSchema } from '@/components/Form'
import { ContentWrap } from '@/components/ContentWrap'
import { useForm } from '@/hooks/web/useForm'
import { reactive, unref, ref } from 'vue'
import {
  ElInput,
  type FormItemProp,
  type ComponentSize,
  ElMessage,
  ElMessageBox
} from 'element-plus'
import { useValidator } from '@/hooks/web/useValidator'
import { getDictOneApi } from '@/api/common'
import { BaseButton } from '@/components/Button'

const { required } = useValidator()

const treeSelectData = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1'
          }
        ]
      }
    ]
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1'
          }
        ]
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1'
          }
        ]
      }
    ]
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1'
          }
        ]
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1'
          }
        ]
      }
    ]
  }
]

// 模拟远程加载
const getTreeSelectData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(treeSelectData)
    }, 3000)
  })
}

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
    componentProps: {
      options: [
        {
          label: 'option1',
          value: '1'
        },
        {
          label: 'option2',
          value: '2'
        }
      ]
    },
    formItemProps: {
      rules: [required()]
    }
  },
  {
    field: 'field3',
    label: '单选框',
    component: 'RadioGroup',
    hidden: true,
    value: '1',
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
    value: ['1'],
    remove: true,
    componentProps: {
      options: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        },
        {
          label: 'option-3',
          value: '3'
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
  },
  {
    field: 'field7',
    label: `树形选择器`,
    component: 'TreeSelect',
    // 远程加载option
    optionApi: async () => {
      const res = await getTreeSelectData()
      return res
    }
  },
  {
    field: 'field8',
    component: 'Upload',
    label: `默认`,
    componentProps: {
      limit: 3,
      action: 'https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15',
      // fileList: ,
      multiple: true,
      onPreview: (uploadFile: any) => {
        console.log(uploadFile)
      },
      onRemove: (file: any) => {
        console.log(file)
      },
      beforeRemove: (uploadFile: { name: any }) => {
        return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(
          () => true,
          () => false
        )
      },
      onExceed: (files: string | any[], uploadFiles: string | any[]) => {
        ElMessage.warning(
          `The limit is 3, you selected ${files.length} files this time, add up to ${
            files.length + uploadFiles.length
          } totally`
        )
      },
      slots: {
        default: () => <BaseButton type="primary">Click to upload</BaseButton>,
        tip: () => <div class="el-upload__tip">jpg/png files with a size less than 500KB.</div>
      }
    }
  }
])

const { formRegister, formMethods } = useForm()
const {
  setProps,
  delSchema,
  addSchema,
  setValues,
  setSchema,
  getComponentExpose,
  getFormItemExpose,
  getElFormExpose,
  getFormData
} = formMethods

const changeLabelWidth = (width: number | string) => {
  setProps({
    labelWidth: width
  })
}

const changeSize = (size: ComponentSize) => {
  setProps({
    size
  })
}

const changeDisabled = (bool: boolean) => {
  setProps({
    disabled: bool
  })
}

const changeSchema = (del: boolean) => {
  if (del) {
    delSchema('field2')
  } else if (!del && schema[1].field !== 'field2') {
    addSchema(
      {
        field: 'field2',
        label: '选择器',
        component: 'Select',
        componentProps: {
          options: [
            {
              label: 'option1',
              value: '1'
            },
            {
              label: 'option2',
              value: '2'
            }
          ]
        }
      },
      1
    )
  }
}

const setValue = async (reset: boolean) => {
  const elFormExpose = await getElFormExpose()
  if (reset) {
    elFormExpose?.resetFields()
  } else {
    setValues({
      field1: 'field1',
      field2: '2',
      field3: '2',
      field4: ['1', '3'],
      field5: '2022-01-27',
      field6: '17:00',
      field8: [
        {
          name: 'element-plus-logo.svg',
          url: 'https://element-plus.org/images/element-plus-logo.svg'
        },
        {
          name: 'element-plus-logo2.svg',
          url: 'https://element-plus.org/images/element-plus-logo.svg'
        }
      ]
    })
    const formData = await getFormData()
    console.log(formData)
  }
}

const index = ref(7)

const setLabel = () => {
  setSchema([
    {
      field: 'field2',
      path: 'label',
      value: `选择器 ${index.value}`
    },
    {
      field: 'field2',
      path: 'componentProps.options',
      value: [
        {
          label: 'option-1',
          value: '1'
        },
        {
          label: 'option-2',
          value: '2'
        },
        {
          label: 'option-3',
          value: '3'
        }
      ]
    }
  ])
  index.value++
}

const addItem = () => {
  if (unref(index) % 2 === 0) {
    addSchema({
      field: `field${unref(index)}`,
      label: `输入框${unref(index)}`,
      component: 'Input'
    })
  } else {
    addSchema(
      {
        field: `field${unref(index)}`,
        label: `输入框${unref(index)}`,
        component: 'Input'
      },
      unref(index)
    )
  }
  index.value++
}

const formValidation = async () => {
  const elFormExpose = await getElFormExpose()
  elFormExpose?.validate((isValid) => {
    console.log(isValid)
  })
}

const verifyReset = async () => {
  const elFormExpose = await getElFormExpose()
  elFormExpose?.resetFields()
}

const getDictOne = async () => {
  const res = await getDictOneApi()
  if (res) {
    setSchema([
      {
        field: 'field2',
        path: 'componentProps.options',
        value: res.data
      }
    ])
  }
}

const inoutFocus = async () => {
  const inputEl: ComponentRef<typeof ElInput> = await getComponentExpose('field1')
  inputEl?.focus()
}

const inoutValidation = async () => {
  const formItem = await getFormItemExpose('field1')
  const inputEl: ComponentRef<typeof ElInput> = await getComponentExpose('field1')
  inputEl?.focus()
  formItem?.validate('focus', (val: boolean) => {
    console.log(val)
  })
}

const formValidate = (prop: FormItemProp, isValid: boolean, message: string) => {
  console.log(prop, isValid, message)
}

setTimeout(async () => {
  const formData = await getFormData()
  console.log(formData)
}, 2000)

const getData = async () => {
  const formData = await getFormData()
  console.log(formData)
}
</script>

<template>
  <ContentWrap :title="`UseForm 操作`" style="margin-bottom: 20px">
    <BaseButton @click="changeLabelWidth(150)">更改 labelWidth</BaseButton>
    <BaseButton @click="changeLabelWidth('auto')">还原 labelWidth</BaseButton>

    <BaseButton @click="changeSize('large')">更改 size</BaseButton>
    <BaseButton @click="changeSize('default')">还原 size</BaseButton>

    <BaseButton @click="changeDisabled(true)">禁用</BaseButton>
    <BaseButton @click="changeDisabled(false)">解除禁用</BaseButton>

    <BaseButton @click="changeSchema(true)"> 删除 选择器 </BaseButton>
    <BaseButton @click="changeSchema(false)"> 添加 选择器 </BaseButton>

    <BaseButton @click="setValue(false)">设置值</BaseButton>
    <BaseButton @click="setValue(true)">重置值</BaseButton>

    <BaseButton @click="setLabel"> 设置 选择器 label </BaseButton>

    <BaseButton @click="addItem"> 添加 子项 </BaseButton>

    <BaseButton @click="formValidation"> 表单验证 </BaseButton>
    <BaseButton @click="verifyReset"> 验证重置 </BaseButton>

    <BaseButton @click="getDictOne"> 选择器 动态选项 </BaseButton>

    <BaseButton @click="inoutFocus"> 输入框 聚焦 </BaseButton>
    <BaseButton @click="inoutValidation"> 输入框 表单验证 </BaseButton>
    <BaseButton @click="getData"> 获取值 </BaseButton>
  </ContentWrap>
  <ContentWrap title="UseForm 示例">
    <Form :schema="schema" @register="formRegister" @validate="formValidate" />
  </ContentWrap>
</template>

<style lang="less" scoped>
.el-button {
  margin-top: 10px;
}
</style>
