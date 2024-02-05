<script setup lang="ts">
import { ElCard } from 'element-plus'
import { propTypes } from '@/utils/propTypes'

defineProps({
  title: propTypes.string.def(''),
  message: propTypes.string.def('')
})
</script>

<template>
  <div :class="[`content-detail-wrap-container`, 'relative']">
    <ElCard :class="[`content-detail-wrap-body`, 'mb-20px']" shadow="never">
      <div class="mb-20px pb-20px" style="border-bottom: 1px solid var(--el-border-color)">
        <slot name="header"></slot>
      </div>
      <slot></slot>
    </ElCard>
  </div>
</template>
