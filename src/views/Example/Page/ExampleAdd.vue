<script setup lang="ts">
import Write from './components/Write.vue'
import { ContentDetailWrap } from '@/components/ContentDetailWrap'
import { BaseButton } from '@/components/Button'
import { ref, unref } from 'vue'
import { useRouter } from 'vue-router'
import { saveTableApi } from '@/api/table'
import { useEventBus } from '@/hooks/event/useEventBus'

const { emit } = useEventBus()

const { push, go } = useRouter()

const writeRef = ref<ComponentRef<typeof Write>>()

const loading = ref(false)

const save = async () => {
  const write = unref(writeRef)
  const formData = await write?.submit()
  if (formData) {
    loading.value = true
    const res = await saveTableApi(formData)
      .catch(() => {})
      .finally(() => {
        loading.value = false
      })
    if (res) {
      emit('getList', 'add')
      push('/example/example-page')
    }
  }
}
</script>

<template>
  <ContentDetailWrap title="新增" @back="push('/example/example-page')">
    <Write ref="writeRef" />

    <template #header>
      <BaseButton @click="go(-1)"> 返回 </BaseButton>
      <BaseButton type="primary" :loading="loading" @click="save">保存 </BaseButton>
    </template>
  </ContentDetailWrap>
</template>
