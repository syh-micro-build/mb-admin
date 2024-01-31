<script setup lang="ts">
import { IconPicker } from '@/components/IconPicker'
import { ref } from 'vue'
import { ContentWrap } from '@/components/ContentWrap'

const currentIcon = ref('')
</script>

<template>
  <ContentWrap title="图标选择器">
    <IconPicker v-model="currentIcon" />
  </ContentWrap>
</template>
