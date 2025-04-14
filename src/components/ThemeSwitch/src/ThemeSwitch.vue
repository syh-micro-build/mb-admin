<script setup lang="ts">
import { computed } from 'vue'
import { useAppStore } from '@/stores/app'
import { ElSwitch } from 'element-plus'
import { useIcon } from '@/hooks/web/useIcon'
import { getCssVar } from '@/utils'

const emit = defineEmits(['change'])

const Sun = useIcon({ icon: 'emojione-monotone:sun', color: '#fde047' })

const CrescentMoon = useIcon({ icon: 'emojione-monotone:crescent-moon', color: '#fde047' })

const appStore = useAppStore()

// 初始化获取是否是暗黑主题
const isDark = computed({
  get() {
    return appStore.getIsDark
  },
  set(val: boolean) {
    appStore.setIsDark(val)
    const color = getCssVar('--el-bg-color')
    appStore.setMenuTheme(color)
    appStore.setHeaderTheme(color)
    emit('change', val)
  }
})

// 设置switch的背景颜色
const blackColor = 'var(--el-color-black)'
</script>

<template>
  <ElSwitch
    class="theme-switch"
    v-model="isDark"
    inline-prompt
    :border-color="blackColor"
    :inactive-color="blackColor"
    :active-color="blackColor"
    :active-icon="Sun"
    :inactive-icon="CrescentMoon"
  />
</template>

<style lang="less" scoped>
:deep(.el-switch__core .el-switch__inner .is-icon) {
  overflow: visible;
}
</style>
