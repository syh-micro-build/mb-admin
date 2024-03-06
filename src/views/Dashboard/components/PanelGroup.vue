<script setup lang="ts">
import { ElRow, ElCol, ElCard, ElSkeleton } from 'element-plus'
import { CountTo } from '@/components/CountTo'
import { ref, reactive } from 'vue'
import { getCountApi } from '@/api/dashboard/analysis'
import type { AnalysisTotalTypes } from '@/api/dashboard/analysis/types'

const loading = ref(true)

let totalState = reactive<AnalysisTotalTypes>({
  users: 0,
  messages: 0,
  moneys: 0,
  shoppings: 0
})

const getCount = async () => {
  const res = await getCountApi()
    .catch(() => {})
    .finally(() => {
      loading.value = false
    })
  totalState = Object.assign(totalState, res?.data || {})
}

getCount()
</script>

<template>
  <ElRow :gutter="20" justify="space-between" class="panel">
    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="2">
          <template #default>
            <div :class="`panel__item flex justify-between`">
              <div>
                <div
                  :class="`panel__item--icon panel__item--peoples p-16px inline-block rounded-6px`"
                >
                  <Icon icon="svg-icon:peoples" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`panel__item--text text-16px text-gray-500 text-right`">新增用户</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="102400"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
        </ElSkeleton>
      </ElCard>
    </ElCol>

    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="2">
          <template #default>
            <div :class="`panel__item flex justify-between`">
              <div>
                <div
                  :class="`panel__item--icon panel__item--message p-16px inline-block rounded-6px`"
                >
                  <Icon icon="svg-icon:message" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`panel__item--text text-16px text-gray-500 text-right`">未读消息</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="81212"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
        </ElSkeleton>
      </ElCard>
    </ElCol>

    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="2">
          <template #default>
            <div :class="`panel__item flex justify-between`">
              <div>
                <div
                  :class="`panel__item--icon panel__item--money p-16px inline-block rounded-6px`"
                >
                  <Icon icon="svg-icon:money" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`panel__item--text text-16px text-gray-500 text-right`">成交金额</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="9280"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
        </ElSkeleton>
      </ElCard>
    </ElCol>

    <ElCol :xl="6" :lg="6" :md="12" :sm="12" :xs="24">
      <ElCard shadow="hover" class="mb-20px">
        <ElSkeleton :loading="loading" animated :rows="2">
          <template #default>
            <div :class="`panel__item flex justify-between`">
              <div>
                <div
                  :class="`panel__item--icon panel__item--shopping p-16px inline-block rounded-6px`"
                >
                  <Icon icon="svg-icon:shopping" :size="40" />
                </div>
              </div>
              <div class="flex flex-col justify-between">
                <div :class="`panel__item--text text-16px text-gray-500 text-right`">购物总量</div>
                <CountTo
                  class="text-20px font-700 text-right"
                  :start-val="0"
                  :end-val="13600"
                  :duration="2600"
                />
              </div>
            </div>
          </template>
        </ElSkeleton>
      </ElCard>
    </ElCol>
  </ElRow>
</template>

<style lang="less" scoped>
.panel {
  &__item {
    &--peoples {
      color: #40c9c6;
    }

    &--message {
      color: #36a3f7;
    }

    &--money {
      color: #f4516c;
    }

    &--shopping {
      color: #34bfa3;
    }

    &:hover {
      :deep(.icon) {
        color: #fff !important;
      }

      .panel__item--icon {
        transition: all 0.38s ease-out;
      }

      .panel__item--peoples {
        background: #40c9c6;
      }

      .panel__item--message {
        background: #36a3f7;
      }

      .panel__item--money {
        background: #f4516c;
      }

      .panel__item--shopping {
        background: #34bfa3;
      }
    }
  }
}
</style>
