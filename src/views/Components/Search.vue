<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Search } from '@/components/Search'
import { BaseButton } from '@/components/Button'
import { reactive, ref, unref } from 'vue'
import { getDictOneApi } from '@/api/common'
import type { FormSchema } from '@/components/Form'
import { useSearch } from '@/hooks/web/useSearch'

const { searchRegister, searchMethods } = useSearch()
const { setSchema, setProps, setValues } = searchMethods

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
    component: 'Input'
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
      ],
      on: {
        change: (value: string) => {
          console.log(value)
        }
      }
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
    field: 'field8',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field9',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field10',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field11',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field12',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field13',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field14',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field15',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field16',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field17',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field18',
    label: '输入框',
    component: 'Input'
  },
  {
    field: 'field19',
    label: '树形选择器',
    component: 'TreeSelect',
    // 远程加载option
    optionApi: async () => {
      const res = await getTreeSelectData()
      return res
    }
  }
])

const isGrid = ref(false)

const changeGrid = (grid: boolean) => {
  setProps({
    isCol: grid
  })
  // isGrid.value = grid
}

const layout = ref('inline')

const changeLayout = () => {
  layout.value = unref(layout) === 'inline' ? 'bottom' : 'inline'
}

const buttonPosition = ref('left')

const changePosition = (position: string) => {
  layout.value = 'bottom'
  buttonPosition.value = position
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

const handleSearch = (data: any) => {
  console.log(data)
}

const delRadio = () => {
  setSchema([
    {
      field: 'field3',
      path: 'remove',
      value: true
    }
  ])
}

const restoreRadio = () => {
  setSchema([
    {
      field: 'field3',
      path: 'remove',
      value: false
    }
  ])
}

const setValue = () => {
  setValues({
    field1: 'Joy'
  })
}

const searchLoading = ref(false)
const changeSearchLoading = () => {
  searchLoading.value = true
  setTimeout(() => {
    searchLoading.value = false
  }, 2000)
}

const resetLoading = ref(false)
const changeResetLoading = () => {
  resetLoading.value = true
  setTimeout(() => {
    resetLoading.value = false
  }, 2000)
}
</script>

<template>
  <ContentWrap :title="`查询 操作`" style="margin-bottom: 20px">
    <BaseButton @click="changeGrid(true)">栅格</BaseButton>
    <BaseButton @click="changeGrid(false)"> 还原 栅格 </BaseButton>

    <BaseButton @click="changeLayout"> 按钮 位置 </BaseButton>

    <BaseButton @click="changePosition('left')"> 底部 位置-左 </BaseButton>
    <BaseButton @click="changePosition('center')"> 底部 位置-中 </BaseButton>
    <BaseButton @click="changePosition('right')"> 底部 位置-右 </BaseButton>
    <BaseButton @click="getDictOne"> 选择器 动态选项 </BaseButton>
    <BaseButton @click="delRadio">删除单选框</BaseButton>
    <BaseButton @click="restoreRadio">还原单选框</BaseButton>
    <BaseButton @click="setValue">设置值</BaseButton>

    <BaseButton @click="changeSearchLoading"> 查询 加载中 </BaseButton>
    <BaseButton @click="changeResetLoading"> 重置 加载中 </BaseButton>
  </ContentWrap>

  <ContentWrap title="查询" message="基于 Form 组件二次封装，实现查询、重置功能">
    <Search
      :schema="schema"
      :is-col="isGrid"
      :layout="layout"
      :button-position="buttonPosition"
      :search-loading="searchLoading"
      :reset-loading="resetLoading"
      show-expand
      expand-field="field6"
      @search="handleSearch"
      @reset="handleSearch"
      @register="searchRegister"
    />
  </ContentWrap>
</template>

<style lang="less" scoped>
.el-button {
  margin-top: 10px;
}
</style>
