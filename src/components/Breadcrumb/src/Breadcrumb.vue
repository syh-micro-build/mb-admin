<script lang="tsx">
import { ElBreadcrumb, ElBreadcrumbItem } from 'element-plus'
import { ref, watch, computed, unref, defineComponent, TransitionGroup } from 'vue'
import { useRouter } from 'vue-router'
import { usePermissionStore } from '@/stores/permission'
import { filterBreadcrumb } from './helper'
import { filter, treeToList } from '@/utils/tree'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import { Icon } from '@/components/Icon'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()

// 面包屑图标
const breadcrumbIcon = computed(() => appStore.getBreadcrumbIcon)

export default defineComponent({
  name: 'Breadcrumb',
  setup() {
    const { currentRoute } = useRouter()

    const levelList = ref<AppRouteRecordRaw[]>([])

    const permissionStore = usePermissionStore()

    const menuRouters = computed(() => {
      const routers = permissionStore.getRouters
      return filterBreadcrumb(routers)
    })

    const getBreadcrumb = () => {
      const currentPath = currentRoute.value.matched.slice(-1)[0].path
      levelList.value = filter<AppRouteRecordRaw>(unref(menuRouters), (node: AppRouteRecordRaw) => {
        return node.path === currentPath
      })
    }

    const renderBreadcrumb = () => {
      const breadcrumbList = treeToList<AppRouteRecordRaw[]>(unref(levelList))
      return breadcrumbList.map((v) => {
        const disabled = !v.redirect || v.redirect === 'noredirect'
        const meta = v.meta
        return (
          <ElBreadcrumbItem to={{ path: disabled ? '' : v.path }} key={v.name}>
            {meta?.icon && breadcrumbIcon.value ? (
              <>
                <Icon icon={meta.icon} class="mr-[5px]"></Icon> {v?.meta?.title}
              </>
            ) : (
              v?.meta?.title
            )}
          </ElBreadcrumbItem>
        )
      })
    }

    watch(
      () => currentRoute.value,
      (route: RouteLocationNormalizedLoaded) => {
        if (route.path.startsWith('/redirect/')) {
          return
        }
        getBreadcrumb()
      },
      {
        immediate: true
      }
    )

    return () => (
      <ElBreadcrumb separator="/" class={`breadcrumb flex items-center h-full ml-[10px]`}>
        <TransitionGroup appear enter-active-class="animate__animated animate__fadeInRight">
          {renderBreadcrumb()}
        </TransitionGroup>
      </ElBreadcrumb>
    )
  }
})
</script>

<style lang="less" scoped>
.breadcrumb {
  :deep(&__item) {
    display: flex;

    .breadcrumb__inner {
      display: flex;
      align-items: center;
      color: var(--top-header-text-color);

      &:hover {
        color: var(--el-color-primary);
      }
    }
  }

  :deep(&__item):not(:last-child) {
    .breadcrumb__inner {
      color: var(--top-header-text-color);

      &:hover {
        color: var(--el-color-primary);
      }
    }
  }

  :deep(&__item):last-child {
    .breadcrumb__inner {
      color: var(--el-text-color-placeholder);

      &:hover {
        color: var(--el-text-color-placeholder);
      }
    }
  }
}
</style>
