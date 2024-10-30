<script setup lang="ts">
import { ElSwitch, ElMessage } from 'element-plus'
import { useAppStore } from '@/stores/app'
import { computed, ref, watch } from 'vue'
import { setCssVar } from '@/utils'

const appStore = useAppStore()

// 面包屑
const breadcrumb = ref(appStore.getBreadcrumb)

const breadcrumbChange = (show: string | number | boolean) => {
  appStore.setBreadcrumb(show as boolean)
}

// 面包屑图标
const breadcrumbIcon = ref(appStore.getBreadcrumbIcon)

const breadcrumbIconChange = (show: string | number | boolean) => {
  appStore.setBreadcrumbIcon(show as boolean)
}

// 折叠图标
const hamburger = ref(appStore.getHamburger)

const hamburgerChange = (show: string | number | boolean) => {
  appStore.setHamburger(show as boolean)
}

// 全屏图标
const screenfull = ref(appStore.getScreenfull)

const screenfullChange = (show: string | number | boolean) => {
  appStore.setScreenfull(show as boolean)
}

// 尺寸图标
const size = ref(appStore.getSize)

const sizeChange = (show: string | number | boolean) => {
  appStore.setSize(show as boolean)
}

// 标签页
const tagsView = ref(appStore.getTagsView)

const tagsViewChange = (show: string | number | boolean) => {
  // 切换标签栏显示时，同步切换标签栏的高度
  setCssVar('--tags-view-height', show ? '35px' : '0px')
  appStore.setTagsView(show as boolean)
}

// 标签页图标
const tagsViewIcon = ref(appStore.getTagsViewIcon)

const tagsViewIconChange = (show: string | number | boolean) => {
  appStore.setTagsViewIcon(show as boolean)
}

// logo
const logo = ref(appStore.getLogo)

const logoChange = (show: string | number | boolean) => {
  appStore.setLogo(show as boolean)
}

// 菜单手风琴
const uniqueOpened = ref(appStore.getUniqueOpened)

const uniqueOpenedChange = (uniqueOpened: string | number | boolean) => {
  appStore.setUniqueOpened(uniqueOpened as boolean)
}

// 固定头部
const fixedHeader = ref(appStore.getFixedHeader)

const fixedHeaderChange = (show: string | number | boolean) => {
  appStore.setFixedHeader(show as boolean)
}

// 页脚
const footer = ref(appStore.getFooter)

const footerChange = (show: string | number | boolean) => {
  appStore.setFooter(show as boolean)
}

// 灰色模式
const greyMode = ref(appStore.getGreyMode)

const greyModeChange = (show: string | number | boolean) => {
  appStore.setGreyMode(show as boolean)
}

// 动态路由
const dynamicRouter = ref(!!appStore.getDynamicRouter)

const dynamicRouterChange = (show: string | number | boolean) => {
  ElMessage.info('请重新退出登录体验')
  appStore.setDynamicRouter(show as boolean)
}

// 服务端动态路由
const serverDynamicRouter = ref(appStore.getServerDynamicRouter)

const serverDynamicRouterChange = (show: string | number | boolean) => {
  ElMessage.info('请重新退出登录体验')
  appStore.setServerDynamicRouter(show as boolean)
}

// 固定菜单
const fixedMenu = ref(appStore.getFixedMenu)

const fixedMenuChange = (show: string | number | boolean) => {
  appStore.setFixedMenu(show as boolean)
}

const layout = computed(() => appStore.getLayout)

watch(
  () => layout.value,
  (n) => {
    if (n === 'top') {
      appStore.setCollapse(false)
    }
  }
)
</script>

<template>
  <div class="interface-display">
    <div class="flex justify-between items-center">
      <span class="text-14px">面包屑</span>
      <ElSwitch v-model="breadcrumb" @change="breadcrumbChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">面包屑图标</span>
      <ElSwitch v-model="breadcrumbIcon" @change="breadcrumbIconChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">折叠图标</span>
      <ElSwitch v-model="hamburger" @change="hamburgerChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">全屏图标</span>
      <ElSwitch v-model="screenfull" @change="screenfullChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">尺寸图标</span>
      <ElSwitch v-model="size" @change="sizeChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">标签页</span>
      <ElSwitch v-model="tagsView" @change="tagsViewChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">标签页图标</span>
      <ElSwitch v-model="tagsViewIcon" @change="tagsViewIconChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">Logo</span>
      <ElSwitch v-model="logo" @change="logoChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">菜单手风琴</span>
      <ElSwitch v-model="uniqueOpened" @change="uniqueOpenedChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">固定头部</span>
      <ElSwitch v-model="fixedHeader" @change="fixedHeaderChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">页脚</span>
      <ElSwitch v-model="footer" @change="footerChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">灰色模式</span>
      <ElSwitch v-model="greyMode" @change="greyModeChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">开启动态路由</span>
      <ElSwitch v-model="dynamicRouter" @change="dynamicRouterChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">服务端动态路由</span>
      <ElSwitch v-model="serverDynamicRouter" @change="serverDynamicRouterChange" />
    </div>

    <div class="flex justify-between items-center">
      <span class="text-14px">固定菜单</span>
      <ElSwitch v-model="fixedMenu" @change="fixedMenuChange" />
    </div>
  </div>
</template>
