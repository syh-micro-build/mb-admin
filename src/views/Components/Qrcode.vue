<script setup lang="ts">
import { Qrcode } from '@/components/Qrcode'
import { ContentWrap } from '@/components/ContentWrap'
import { computed, ref, unref } from 'vue'
import { useAppStore } from '@/stores/app'
import { ElRow, ElCard, ElCol, ElMessage } from 'element-plus'
// @ts-ignore
import logoImg from '@/assets/imgs/logo.png'

const appStore = useAppStore()

const title = computed(() => appStore.getTitle)

const asyncTitle = ref('')

setTimeout(() => {
  asyncTitle.value = unref(title)
}, 3000)

const codeClick = () => {
  ElMessage.info('点击事件')
}

const disabledClick = () => {
  ElMessage.info('失效')
}
</script>

<template>
  <ContentWrap title="二维码" message="基于 qrcode 二次封装">
    <ElRow :gutter="20" justify="space-between">
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">基础用法</div>
          <Qrcode :text="title" />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">img标签</div>
          <Qrcode :text="title" tag="img" />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">样式配置</div>
          <Qrcode
            :text="title"
            :options="{
              color: {
                dark: '#55D187',
                light: '#2d8cf0'
              }
            }"
          />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">点击事件</div>
          <Qrcode :text="title" @click="codeClick" />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">异步内容</div>
          <Qrcode :text="asyncTitle" />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">失效</div>
          <Qrcode :text="title" disabled @disabled-click="disabledClick" />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">logo配置</div>
          <Qrcode :text="title" :logo="logoImg" />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">logo样式</div>
          <Qrcode
            :text="title"
            :logo="{
              src: logoImg,
              logoSize: 0.2,
              borderSize: 0.05,
              borderRadius: 50,
              bgColor: 'blue'
            }"
          />
        </ElCard>
      </ElCol>
      <ElCol :xl="6" :lg="6" :md="12" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-10px text-center">
          <div class="font-bold">大小配置</div>
          <Qrcode :text="title" :width="100" />
        </ElCard>
      </ElCol>
    </ElRow>
  </ContentWrap>
</template>
