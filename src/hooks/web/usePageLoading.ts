import { useAppStoreWithOut } from '@/stores/app'

export const usePageLoading = () => {
  const loadStart = () => {
    const appStore = useAppStoreWithOut()

    appStore.setPageLoading(true)
  }

  const loadDone = () => {
    const appStore = useAppStoreWithOut()

    appStore.setPageLoading(false)
  }

  return {
    loadStart,
    loadDone
  }
}
