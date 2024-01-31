<script setup lang="ts">
import { ContentWrap } from '@/components/ContentWrap'
import { pieOptions, barOptions, lineOptions, wordOptions } from './echarts-data'
import { Echart } from '@/components/Echart'
import { ElRow, ElCol, ElCard } from 'element-plus'
</script>

<template>
  <ContentWrap
    title="图表"
    message="基于 echarts 二次封装组件，自适应宽度，只需传入 options 与 height 属性即可展示对应的图表。"
  >
    <ElRow :gutter="20" justify="space-between">
      <ElCol :xl="10" :lg="10" :md="24" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-20px">
          <Echart :options="pieOptions" :height="300" />
        </ElCard>
      </ElCol>
      <ElCol :xl="14" :lg="14" :md="24" :sm="24" :xs="24">
        <ElCard shadow="hover" class="mb-20px">
          <Echart :options="barOptions" :height="300" />
        </ElCard>
      </ElCol>
      <ElCol :span="24">
        <ElCard shadow="hover" class="mb-20px">
          <Echart :options="lineOptions" :height="350" />
        </ElCard>
      </ElCol>
      <ElCol :span="24">
        <ElCard shadow="hover" class="mb-20px">
          <Echart :options="wordOptions as any" :height="300" />
        </ElCard>
      </ElCol>
    </ElRow>
  </ContentWrap>
</template>
