<script setup lang="ts">
import { computed, unref } from 'vue'
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import { useLocaleStore } from '@/stores/locale'
import { useLocale } from '@/hooks/web/useLocale'
import { propTypes } from '@/utils/propTypes'

defineProps({
  color: propTypes.string.def('')
})

const localeStore = useLocaleStore()

const langMap = computed(() => localeStore.getLocaleMap)

const currentLang = computed(() => localeStore.getCurrentLocale)

const setLang = (lang: LocaleType) => {
  if (lang === unref(currentLang).lang) return
  // 需要重新加载页面让整个语言多初始化
  window.location.reload()
  localeStore.setCurrentLocale({
    lang
  })
  const { changeLocale } = useLocale()
  changeLocale(lang)
}
</script>

<template>
  <ElDropdown class="locale-dropdown" trigger="click" @command="setLang">
    <Icon
      :size="18"
      icon="ion:language-sharp"
      class="cursor-pointer !p-0"
      :class="$attrs.class"
      :color="color"
    />
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem v-for="item in langMap" :key="item.lang" :command="item.lang">
          {{ item.name }}
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>
</template>
