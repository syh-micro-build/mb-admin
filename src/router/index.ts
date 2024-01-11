import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const constantRoutes = [
  {
    path: '/',
    component: HomeView,
    name: 'Root',
    meta: {
      hidden: true
    }
  },
  // {
  //   path: '/login',
  //   component: () => import('@/views/Login/Login.vue'),
  //   name: 'Login',
  //   meta: {
  //     hidden: true,
  //     title: '登录',
  //     noTagsView: true
  //   }
  // }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export default router
