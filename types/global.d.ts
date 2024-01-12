export {}

declare global {
  declare interface Fn<T = any> {
    (...arg: T[]): T
  }
  declare type Recordable<T = any, K = string> = Record<K extends null | undefined ? string : K, T>
  declare type ComponentRef<T> = InstanceType<T>
  declare type ElementPlusInfoType = 'success' | 'info' | 'warning' | 'danger'
  declare type LayoutType = 'classic' | 'topLeft' | 'top' | 'cutMenu'

  declare interface ThemeTypes {
    elColorPrimary?: string
    leftMenuBorderColor?: string
    leftMenuBgColor?: string
    leftMenuBgLightColor?: string
    leftMenuBgActiveColor?: string
    leftMenuCollapseBgActiveColor?: string
    leftMenuTextColor?: string
    leftMenuTextActiveColor?: string
    logoTitleTextColor?: string
    logoBorderColor?: string
    topHeaderBgColor?: string
    topHeaderTextColor?: string
    topHeaderHoverColor?: string
    topToolBorderColor?: string
  }
}
