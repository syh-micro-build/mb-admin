<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { useGuide } from '@/hooks/web/useGuide'
import { BaseButton } from '@/components/Button'

const { drive } = useGuide()

const guideStart = () => {
  drive()
}
</script>

<template>
  <ContentWrap
    title="引导页"
    message="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。引导页基于 driver.js"
  >
    <BaseButton type="primary" @click="guideStart">开始</BaseButton>
  </ContentWrap>
</template>
