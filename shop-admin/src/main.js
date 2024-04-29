import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Router from './tools/Router'
import Store from './tools/Storage'


createApp(App).use(ElementPlus).use(Router).use(Store).mount('#app')
