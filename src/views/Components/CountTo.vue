<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { CountTo } from '@/components/CountTo'
import { BaseButton } from '@/components/Button'
import { ElRow, ElCol, ElInputNumber, ElInput } from 'element-plus'
import { ref, unref } from 'vue'

const countRef = ref<ComponentRef<typeof CountTo>>()

const startVal = ref(0)

const endVal = ref(1314521)

const duration = ref(3000)

const decimals = ref(0)

const separator = ref(',')

const prefix = ref('¥ ')

const suffix = ref(' rmb')

const autoplay = ref(false)

const start = () => {
  unref(countRef)?.start()
}

const pauseResume = () => {
  unref(countRef)?.pauseResume()
}
</script>

<template>
  <ContentWrap title="数字动画" message="基于 vue-count-to 进行改造，支持所有 vue-count-to 参数。">
    <div class="text-center mb-40px">
      <CountTo
        ref="countRef"
        :start-val="startVal"
        :end-val="endVal"
        :duration="duration"
        :decimals="decimals"
        :separator="separator"
        :prefix="prefix"
        :suffix="suffix"
        :autoplay="autoplay"
        class="text-30px font-bold text-[var(--el-color-primary)]"
      />
    </div>
    <ElRow :gutter="20" justify="space-between">
      <ElCol :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
        <div class="flex mb-20px items-center">
          <span class="min-w-90px text-right">开始值：</span>
          <ElInputNumber v-model="startVal" :min="0" />
        </div>
      </ElCol>
      <ElCol :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
        <div class="flex mb-20px items-center">
          <span class="min-w-90px text-right">结束值：</span>
          <ElInputNumber v-model="endVal" :min="1" />
        </div>
      </ElCol>
      <ElCol :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
        <div class="flex mb-20px items-center">
          <span class="min-w-90px text-right">持续时间：</span>
          <ElInputNumber v-model="duration" :min="1000" />
        </div>
      </ElCol>
      <ElCol :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
        <div class="flex mb-20px items-center">
          <span class="min-w-90px text-right">分割符号：</span>
          <ElInput v-model="separator" />
        </div>
      </ElCol>
      <ElCol :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
        <div class="flex mb-20px items-center">
          <span class="min-w-90px text-right">前缀：</span>
          <ElInput v-model="prefix" />
        </div>
      </ElCol>
      <ElCol :xl="8" :lg="8" :md="12" :sm="24" :xs="24">
        <div class="flex mb-20px items-center">
          <span class="min-w-90px text-right">后缀：</span>
          <ElInput v-model="suffix" />
        </div>
      </ElCol>
      <ElCol :span="24">
        <div class="text-center">
          <BaseButton type="primary" @click="start">开始</BaseButton>
          <BaseButton @click="pauseResume"> 暂停/继续 </BaseButton>
        </div>
      </ElCol>
    </ElRow>
  </ContentWrap>
</template>
