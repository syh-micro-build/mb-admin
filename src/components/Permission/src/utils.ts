import router from '@/router'

export const hasPermi = (value: string) => {
  const permission = (router.currentRoute.value.meta.permission || []) as string[]
  if (!value) {
    throw new Error('请设置操作权限值')
  }
  if (permission.includes(value)) {
    return true
  }
  return false
}
