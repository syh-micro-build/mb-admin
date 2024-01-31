import '@/styles/index.less'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'

import { setupStore } from '@/stores'
import App from './App.vue'
import router from './router'
import { setupElementPlus } from '@/plugins/elementPlus'
import './permission'

const app = createApp(App)

setupStore(app)
setupElementPlus(app)
app.use(router)

app.mount('#app')
