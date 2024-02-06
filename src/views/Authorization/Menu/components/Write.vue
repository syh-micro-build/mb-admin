<script setup lang="tsx">
import { Form, type FormSchema } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { type PropType, reactive, watch, ref, unref } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import { getMenuListApi } from '@/api/menu'
import { ElTag } from 'element-plus'
import AddButtonPermission from './AddButtonPermission.vue'
import { BaseButton } from '@/components/Button'
import { cloneDeep } from 'lodash-es'

const { required } = useValidator()

const props = defineProps({
  currentRow: {
    type: Object as PropType<any>,
    default: () => null
  }
})

const handleClose = async (tag: any) => {
  const formData = await getFormData()
  // 删除对应的权限
  setValues({
    permissionList: formData?.permissionList?.filter((v: any) => v.value !== tag.value)
  })
}

const showDrawer = ref(false)

const formSchema = reactive<FormSchema[]>([
  {
    field: 'type',
    label: '菜单类型',
    component: 'RadioButton',
    value: 0,
    colProps: {
      span: 24
    },
    componentProps: {
      options: [
        {
          label: '目录',
          value: 0
        },
        {
          label: '菜单',
          value: 1
        }
      ],
      on: {
        change: async (val: number) => {
          const formData = await getFormData()
          if (val === 1) {
            setSchema([
              {
                field: 'component',
                path: 'componentProps.disabled',
                value: false
              }
            ])
            setValues({
              component: unref(cacheComponent)
            })
          } else {
            setSchema([
              {
                field: 'component',
                path: 'componentProps.disabled',
                value: true
              }
            ])

            if (formData.parentId === void 0) {
              setValues({
                component: '#'
              })
            } else {
              setValues({
                component: '##'
              })
            }
          }
        }
      }
    }
  },
  {
    field: 'parentId',
    label: '父级菜单',
    component: 'TreeSelect',
    componentProps: {
      nodeKey: 'id',
      props: {
        label: 'title',
        value: 'id',
        children: 'children'
      },
      highlightCurrent: true,
      expandOnClickNode: false,
      checkStrictly: true,
      checkOnClickNode: true,
      clearable: true,
      on: {
        change: async (val: number) => {
          const formData = await getFormData()
          if (val && formData.type === 0) {
            setValues({
              component: '##'
            })
          } else if (!val && formData.type === 0) {
            setValues({
              component: '#'
            })
          } else if (formData.type === 1) {
            setValues({
              component: unref(cacheComponent) ?? ''
            })
          }
        }
      }
    },
    optionApi: async () => {
      const res = await getMenuListApi()
      return res.data.list || []
    }
  },
  {
    field: 'meta.title',
    label: '菜单名称',
    component: 'Input'
  },
  {
    field: 'component',
    label: '组件',
    component: 'Input',
    value: '#',
    componentProps: {
      disabled: true,
      placeholder: '#为顶级目录，##为子目录',
      on: {
        change: (val: string) => {
          cacheComponent.value = val
        }
      }
    }
  },
  {
    field: 'name',
    label: '组件名称',
    component: 'Input'
  },
  {
    field: 'meta.icon',
    label: '图标',
    component: 'Input'
  },
  {
    field: 'path',
    label: '路径',
    component: 'Input'
  },
  {
    field: 'meta.activeMenu',
    label: '高亮菜单',
    component: 'Input'
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        {
          label: '禁用',
          value: 0
        },
        {
          label: '启用',
          value: 1
        }
      ]
    }
  },
  {
    field: 'permissionList',
    label: '按钮权限',
    component: 'CheckboxGroup',
    colProps: {
      span: 24
    },
    formItemProps: {
      slots: {
        default: (data: any) => (
          <>
            {data?.permissionList?.map((v: any) => {
              return (
                <ElTag class="mr-1" key={v.value} closable onClose={() => handleClose(v)}>
                  {v.label}
                </ElTag>
              )
            })}
            <BaseButton type="primary" size="small" onClick={() => (showDrawer.value = true)}>
              添加权限
            </BaseButton>
          </>
        )
      }
    }
  },
  {
    field: 'meta.hidden',
    label: '是否隐藏',
    component: 'Switch'
  },
  {
    field: 'meta.alwaysShow',
    label: '是否一直显示',
    component: 'Switch'
  },
  {
    field: 'meta.noCache',
    label: '是否清除缓存',
    component: 'Switch'
  },
  {
    field: 'meta.breadcrumb',
    label: '是否显示面包屑',
    component: 'Switch'
  },
  {
    field: 'meta.affix',
    label: '是否固定在标签页',
    component: 'Switch'
  },
  {
    field: 'meta.noTagsView',
    label: '是否隐藏标签页',
    component: 'Switch'
  },
  {
    field: 'meta.canTo',
    label: '是否可跳转',
    component: 'Switch'
  }
])

const rules = reactive({
  component: [required()],
  path: [required()],
  'meta.title': [required()]
})

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose, setSchema } = formMethods

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

const cacheComponent = ref('')

watch(
  () => props.currentRow,
  (value) => {
    if (!value) return
    const currentRow = cloneDeep(value)
    cacheComponent.value = currentRow.type === 1 ? currentRow.component : ''
    if (currentRow.parentId === 0) {
      setSchema([
        {
          field: 'component',
          path: 'componentProps.disabled',
          value: true
        }
      ])
    } else {
      setSchema([
        {
          field: 'component',
          path: 'componentProps.disabled',
          value: false
        }
      ])
    }
    if (currentRow.type === 1) {
      setSchema([
        {
          field: 'component',
          path: 'componentProps.disabled',
          value: false
        }
      ])
    } else {
      setSchema([
        {
          field: 'component',
          path: 'componentProps.disabled',
          value: true
        }
      ])
    }
    setValues(currentRow)
  },
  {
    deep: true,
    immediate: true
  }
)

defineExpose({
  submit
})

const confirm = async (data: any) => {
  const formData = await getFormData()
  setValues({
    permissionList: [...(formData?.permissionList || []), data]
  })
}
</script>

<template>
  <Form :rules="rules" @register="formRegister" :schema="formSchema" />
  <AddButtonPermission v-model="showDrawer" @confirm="confirm" />
</template>
