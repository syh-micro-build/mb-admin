<script setup lang="ts">
import { ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import LockDialog from './components/LockDialog.vue'
import { ref, computed } from 'vue'
import LockPage from './components/LockPage.vue'
import { useLockStore } from '@/stores/lock'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()

const lockStore = useLockStore()

const getIsLock = computed(() => lockStore.getLockInfo?.isLock ?? false)

const loginOut = () => {
  userStore.logoutConfirm()
}

const dialogVisible = ref<boolean>(false)

// 锁定屏幕
const lockScreen = () => {
  dialogVisible.value = true
}

const toDocument = () => {
  window.open('https://github.com/syh-micro-build/mb-admin?tab=readme-ov-file#mb-admin')
}
</script>

<template>
  <ElDropdown class="user-info custom-hover" trigger="click">
    <div class="flex items-center">
      <img
        src="@/assets/imgs/avatar.jpg"
        alt=""
        class="w-[calc(var(--logo-height)-25px)] rounded-[50%]"
      />
      <span class="<lg:hidden text-14px pl-[5px] text-[var(--top-header-text-color)]">{{
        userStore.getUserInfo?.username
      }}</span>
    </div>
    <template #dropdown>
      <ElDropdownMenu>
        <ElDropdownItem>
          <div @click="toDocument">项目文档</div>
        </ElDropdownItem>
        <ElDropdownItem divided>
          <div @click="lockScreen">锁定屏幕</div>
        </ElDropdownItem>
        <ElDropdownItem>
          <div @click="loginOut">退出系统</div>
        </ElDropdownItem>
      </ElDropdownMenu>
    </template>
  </ElDropdown>

  <LockDialog v-if="dialogVisible" v-model="dialogVisible" />
  <teleport to="body">
    <transition name="fade-bottom" mode="out-in">
      <LockPage v-if="getIsLock" />
    </transition>
  </teleport>
</template>

<style scoped lang="less">
.fade-bottom-enter-active,
.fade-bottom-leave-active {
  transition:
    opacity 0.25s,
    transform 0.3s;
}

.fade-bottom-enter-from {
  opacity: 0;
  transform: translateY(-10%);
}

.fade-bottom-leave-to {
  opacity: 0;
  transform: translateY(10%);
}
</style>
