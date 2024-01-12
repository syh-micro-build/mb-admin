<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { ConfigGlobal } from '@/components/ConfigGlobal'
import { useDark } from '@vueuse/core'

const appStore = useAppStore()

const currentSize = computed(() => appStore.getCurrentSize)

const greyMode = computed(() => appStore.getGreyMode)

const isDark = useDark({
  valueDark: 'dark',
  valueLight: 'light'
})

isDark.value = appStore.getIsDark
</script>

<template>
  <ConfigGlobal :size="currentSize">
    <RouterView :class="greyMode ? `app-grey-mode` : ''" />
  </ConfigGlobal>
</template>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}

html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size;
  }
}

.app-grey-mode {
  filter: grayscale(100%);
}
</style>
