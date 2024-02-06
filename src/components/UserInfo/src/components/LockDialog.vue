<script setup lang="ts">
import { ref } from 'vue'
import { Dialog } from '@/components/Dialog'
import { Form } from '@/components/Form'
import { useForm } from '@/hooks/web/useForm'
import { reactive, computed } from 'vue'
import { useValidator } from '@/hooks/web/useValidator'
import type { FormSchema } from '@/components/Form'
import { BaseButton } from '@/components/Button'
import { useLockStore } from '@/stores/lock'

const { required } = useValidator()

const lockStore = useLockStore()

const props = defineProps({
  modelValue: {
    type: Boolean
  }
})

const emit = defineEmits(['update:modelValue'])

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (val) => {
    console.log('set: ', val)
    emit('update:modelValue', val)
  }
})

const dialogTitle = ref('锁定屏幕')

const rules = reactive({
  password: [required()]
})

const schema: FormSchema[] = reactive([
  {
    label: '锁屏密码',
    field: 'password',
    component: 'Input',
    componentProps: {
      type: 'password',
      showPassword: true
    }
  }
])

const { formRegister, formMethods } = useForm()

const { getFormData, getElFormExpose } = formMethods

const handleLock = async () => {
  const formExpose = await getElFormExpose()
  formExpose?.validate(async (valid) => {
    if (valid) {
      dialogVisible.value = false
      const formData = await getFormData()
      lockStore.setLockInfo({
        isLock: true,
        ...formData
      })
    }
  })
}
</script>

<template>
  <Dialog
    v-model="dialogVisible"
    width="500px"
    max-height="170px"
    class="lock-dialog"
    :title="dialogTitle"
  >
    <div class="flex flex-col items-center">
      <img src="@/assets/imgs/avatar.jpg" alt="" class="w-70px h-70px rounded-[50%]" />
      <span class="text-14px my-10px text-[var(--top-header-text-color)]">ShanYi</span>
    </div>
    <Form :is-col="false" :schema="schema" :rules="rules" @register="formRegister" />
    <template #footer>
      <BaseButton type="primary" @click="handleLock">锁定</BaseButton>
    </template>
  </Dialog>
</template>

<style lang="less" scoped>
:global(.lock-dialog) {
  @media (width <= 767px) {
    max-width: calc(100vw - 16px);
  }
}
</style>
