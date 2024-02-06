<script setup lang="tsx">
import { Form, type FormSchema } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { type PropType, reactive, watch, ref, unref, nextTick } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import { ElTree, ElCheckboxGroup, ElCheckbox } from 'element-plus'
import { getMenuListApi } from '@/api/menu'
import { filter, eachTree } from '@/utils/tree'
import { findIndex } from '@/utils'

const { required } = useValidator()

const props = defineProps({
  currentRow: {
    type: Object as PropType<any>,
    default: () => null
  }
})

const treeRef = ref<typeof ElTree>()

const formSchema = ref<FormSchema[]>([
  {
    field: 'roleName',
    label: '角色名称',
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
    field: 'menu',
    label: '菜单分配',
    colProps: {
      span: 24
    },
    formItemProps: {
      slots: {
        default: () => {
          return (
            <>
              <div class="flex w-full">
                <div class="flex-1">
                  <ElTree
                    ref={treeRef}
                    show-checkbox
                    node-key="id"
                    highlight-current
                    check-strictly
                    expand-on-click-node={false}
                    data={treeData.value}
                    onNode-click={nodeClick}
                  >
                    {{
                      default: (data: any) => {
                        return <span>{data.data.meta.title}</span>
                      }
                    }}
                  </ElTree>
                </div>
                <div class="flex-1">
                  {unref(currentTreeData) && unref(currentTreeData)?.permissionList ? (
                    <ElCheckboxGroup v-model={unref(currentTreeData).meta.permission}>
                      {unref(currentTreeData)?.permissionList.map((v: any) => {
                        return <ElCheckbox label={v.value}>{v.label}</ElCheckbox>
                      })}
                    </ElCheckboxGroup>
                  ) : null}
                </div>
              </div>
            </>
          )
        }
      }
    }
  }
])

const currentTreeData = ref()
const nodeClick = (treeData: any) => {
  currentTreeData.value = treeData
}

const rules = reactive({
  roleName: [required()],
  role: [required()],
  status: [required()]
})

const { formRegister, formMethods } = useForm()
const { setValues, getFormData, getElFormExpose } = formMethods

const treeData = ref([])
const getMenuList = async () => {
  const res = await getMenuListApi()
  if (res) {
    treeData.value = res.data.list
    if (!props.currentRow) return
    await nextTick()
    const checked: any[] = []
    eachTree(props.currentRow.menu, (v) => {
      checked.push({
        id: v.id,
        permission: v.meta?.permission || []
      })
    })
    eachTree(treeData.value, (v) => {
      const index = findIndex(checked, (item) => {
        return item.id === v.id
      })
      if (index > -1) {
        const meta = { ...(v.meta || {}) }
        meta.permission = checked[index].permission
        v.meta = meta
      }
    })
    for (const item of checked) {
      unref(treeRef)?.setChecked(item.id, true, false)
    }
    // unref(treeRef)?.setCheckedKeys(
    //   checked.map((v) => v.id),
    //   false
    // )
  }
}
getMenuList()

const submit = async () => {
  const elForm = await getElFormExpose()
  const valid = await elForm?.validate().catch((err) => {
    console.log(err)
  })
  if (valid) {
    const formData = await getFormData()
    const checkedKeys = unref(treeRef)?.getCheckedKeys() || []
    const data = filter(unref(treeData), (item: any) => {
      return checkedKeys.includes(item.id)
    })
    formData.menu = data || []
    console.log(formData)
    return formData
  }
}

watch(
  () => props.currentRow,
  (currentRow) => {
    if (!currentRow) return
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
</script>

<template>
  <Form :rules="rules" @register="formRegister" :schema="formSchema" />
</template>
