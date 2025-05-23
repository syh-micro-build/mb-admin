<script lang="tsx">
import { computed, defineComponent, unref } from 'vue'
import { useAppStore } from '@/stores/app'
import { Backtop } from '@/components/Backtop'
import { Setting } from '@/components/Setting'
import { useRenderLayout } from './components/useRenderLayout'

const appStore = useAppStore()

// 是否是移动端
const mobile = computed(() => appStore.getMobile)

// 菜单折叠
const collapse = computed(() => appStore.getCollapse)

const layout = computed(() => appStore.getLayout)

const hideSetting = computed(() => import.meta.env.VITE_HIDE_GLOBAL_SETTING === 'true')

const handleClickOutside = () => {
  appStore.setCollapse(true)
}

const renderLayout = () => {
  switch (unref(layout)) {
    case 'classic': {
      const { renderClassic } = useRenderLayout()
      return renderClassic()
    }
    case 'topLeft': {
      const { renderTopLeft } = useRenderLayout()
      return renderTopLeft()
    }
    case 'top': {
      const { renderTop } = useRenderLayout()
      return renderTop()
    }
    case 'cutMenu': {
      const { renderCutMenu } = useRenderLayout()
      return renderCutMenu()
    }
    default:
      break
  }
}

export default defineComponent({
  name: 'Layout',
  setup() {
    return () => (
      <section class={['layout', `layout__${layout.value}`, 'w-[100%] h-[100%] relative']}>
        {mobile.value && !collapse.value ? (
          <div
            class="absolute top-0 left-0 w-full h-full opacity-30 z-99 bg-[var(--el-color-black)]"
            onClick={handleClickOutside}
          ></div>
        ) : undefined}

        {renderLayout()}

        <Backtop></Backtop>

        {!unref(hideSetting) && <Setting></Setting>}
      </section>
    )
  }
})
</script>

<style lang="less" scoped>
.layout {
  background-color: var(--app-content-bg-color);
}
</style>
