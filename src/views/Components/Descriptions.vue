<script setup lang="tsx">
import { Descriptions, type DescriptionsSchema } from '@/components/Descriptions'
import { BaseButton } from '@/components/Button'
import { reactive } from 'vue'
import { Form } from '@/components/Form'
import { ElFormItem, ElInput } from 'element-plus'
import { useValidator } from '@/hooks/web/useValidator'
import { useForm } from '@/hooks/web/useForm'

const { required } = useValidator()

const data = reactive({
  username: 'chenkl',
  nickName: '梦似花落。',
  age: 26,
  phone: '13655971xxxx',
  email: '502431556@qq.com',
  addr: '这是一个很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长很长的地址',
  sex: '男',
  certy: '3505831994xxxxxxxx'
})

const schema = reactive<DescriptionsSchema[]>([
  {
    field: 'username',
    label: '用户名'
  },
  {
    field: 'nickName',
    label: '昵称'
  },
  {
    field: 'phone',
    label: '联系电话'
  },
  {
    field: 'email',
    label: '邮箱'
  },
  {
    field: 'addr',
    label: '地址',
    span: 24
  }
])

const schema2 = reactive<DescriptionsSchema[]>([
  {
    field: 'username',
    label: '用户名',
    slots: {
      label: (row) => {
        return <span class="is-required--item">{row.label}</span>
      },
      default: () => {
        return (
          <ElFormItem prop="username">
            <ElInput v-model={form.username} />
          </ElFormItem>
        )
      }
    }
  },
  {
    field: 'nickName',
    label: '昵称',
    slots: {
      label: (row) => {
        return <span class="is-required--item">{row.label}</span>
      },
      default: () => {
        return (
          <ElFormItem prop="nickName">
            <ElInput v-model={form.nickName} />
          </ElFormItem>
        )
      }
    }
  },
  {
    field: 'phone',
    label: '联系电话',
    slots: {
      label: (row) => {
        return <span class="is-required--item">{row.label}</span>
      },
      default: () => {
        return (
          <ElFormItem prop="phone">
            <ElInput v-model={form.phone} />
          </ElFormItem>
        )
      }
    }
  },
  {
    field: 'email',
    label: '邮箱',
    slots: {
      label: (row) => {
        return <span class="is-required--item">{row.label}</span>
      },
      default: () => {
        return (
          <ElFormItem prop="email">
            <ElInput v-model={form.email} />
          </ElFormItem>
        )
      }
    }
  },
  {
    field: 'addr',
    label: '地址',
    slots: {
      label: (row) => {
        return <span class="is-required--item">{row.label}</span>
      },
      default: () => {
        return (
          <ElFormItem prop="addr">
            <ElInput v-model={form.addr} />
          </ElFormItem>
        )
      }
    },
    span: 24
  }
])

const form = reactive({
  username: '',
  nickName: '',
  phone: '',
  email: '',
  addr: ''
})

const rules = reactive({
  username: [required()],
  nickName: [required()],
  phone: [required()],
  email: [required()],
  addr: [required()]
})

const { formRegister, formMethods } = useForm()
const { getElFormExpose } = formMethods

const formValidation = async () => {
  const elFormExpose = await getElFormExpose()
  elFormExpose?.validate((isValid) => {
    console.log(isValid)
  })
}
</script>

<template>
  <Descriptions
    title="描述"
    message="基于 ElementPlus 的 Descriptions 组件二次封装"
    :data="data"
    :schema="schema"
  />

  <Form is-custom :model="form" :rules="rules" @register="formRegister">
    <Descriptions title="与 Form 组件组合" :data="data" :schema="schema2" class="mt-20px" />
    <div class="text-center mt-10px">
      <BaseButton @click="formValidation"> 表单验证 </BaseButton>
    </div>
  </Form>
</template>

<style lang="less" scoped>
:deep(.is-required--item) {
  position: relative;

  &::before {
    margin-right: 4px;
    color: var(--el-color-danger);
    content: '*';
  }
}
</style>
