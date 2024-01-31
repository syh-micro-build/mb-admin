<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { Infotip } from '@/components/Infotip'
import { useIcon } from '@/hooks/web/useIcon'
import { BaseButton } from '@/components/Button'
import { Icon } from '@/components/Icon'

const keyClick = (key: string) => {
  if (key === '访问地址') {
    window.open('https://iconify.design/')
  }
}

const peoples = useIcon({ icon: 'svg-icon:peoples' })
const money = useIcon({ icon: 'svg-icon:money' })
const aim = useIcon({ icon: 'ep:aim' })
const alarmClock = useIcon({ icon: 'ep:alarm-clock' })
</script>

<template>
  <Infotip
    :show-index="false"
    title="推荐使用 Iconify 组件"
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
  <ContentWrap title="本地图标">
    <div class="flex justify-between">
      <Icon icon="svg-icon:peoples" />
      <Icon icon="svg-icon:money" />
      <Icon icon="svg-icon:message" />
      <Icon icon="svg-icon:shopping" />
    </div>
  </ContentWrap>
  <ContentWrap title="Iconify组件">
    <div class="flex justify-between">
      <Icon icon="ep:aim" />
      <Icon icon="ep:alarm-clock" />
      <Icon icon="ep:baseball" />
      <Icon icon="ep:chat-line-round" />
    </div>
  </ContentWrap>
  <ContentWrap title="useIcon">
    <div class="flex justify-between">
      <BaseButton :icon="peoples">Button</BaseButton>
      <BaseButton :icon="money">Button</BaseButton>
      <BaseButton :icon="aim">Button</BaseButton>
      <BaseButton :icon="alarmClock">Button</BaseButton>
    </div>
  </ContentWrap>
</template>
