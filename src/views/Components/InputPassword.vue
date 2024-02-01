<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { InputPassword } from '@/components/InputPassword'
import { ref } from 'vue'

const password = ref('')
</script>

<template>
  <ContentWrap title="密码输入框" message="基于 ElementPlus 的 Input 组件二次封装">
    <InputPassword v-model="password" class="mb-20px" />
    <InputPassword v-model="password" strength />
    <InputPassword v-model="password" strength disabled class="mt-20px" />
  </ContentWrap>
</template>
