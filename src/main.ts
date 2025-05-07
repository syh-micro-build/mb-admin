import '@/styles/index.less'
import 'virtual:uno.css'
import 'virtual:svg-icons-register'

import { createApp } from 'vue'

import { setupI18n } from '@/plugins/vueI18n'
import { setupStore } from '@/stores'
import App from './App.vue'
import router from './router'
import { setupElementPlus } from '@/plugins/elementPlus'
import { setupPermission } from './directives'
import './permission'

const app = createApp(App)

setupI18n(app)
setupStore(app)
setupElementPlus(app)
setupPermission(app)
app.use(router)

app.mount('#app')
