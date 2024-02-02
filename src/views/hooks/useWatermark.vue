<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { BaseButton } from '@/components/Button'
import { useWatermark } from '@/hooks/web/useWatermark'
import { computed, onBeforeUnmount } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

const title = computed(() => appStore.getTitle)

const { setWatermark, clear } = useWatermark()

onBeforeUnmount(() => {
  clear()
})
</script>

<template>
  <ContentWrap title="useWatermark">
    <BaseButton type="primary" @click="setWatermark(title)"> 创建水印 </BaseButton>
    <BaseButton type="danger" @click="clear">清除水印</BaseButton>
    <BaseButton type="warning" @click="setWatermark(`New${title}`)"> 重置水印 </BaseButton>
  </ContentWrap>
</template>
