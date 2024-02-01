<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Infotip } from '@/components/Infotip'

const keyClick = (key: string) => {
  if (key === '访问地址') {
    window.open('https://iconify.design/')
  }
}
</script>

<template>
  <ContentWrap title="信息提示" message="基于 Highlight 组件二次封装">
    <Infotip
      :show-index="false"
      title="推荐使用Iconify组件"
      :schema="[
        {
          label:
            'Iconify组件基本包含所有的图标，你可以查询到你想要的任何图标。并且打包只会打包所用到的图标。',
          keys: ['Iconify']
        },
        {
          label: '访问地址',
          keys: ['访问地址']
        }
      ]"
      @click="keyClick"
    />
  </ContentWrap>
</template>
