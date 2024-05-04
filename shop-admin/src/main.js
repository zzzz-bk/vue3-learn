import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from './tools/Router'
import Store from './tools/Storage'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App).use(ElementPlus).use(Router).use(Store)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')