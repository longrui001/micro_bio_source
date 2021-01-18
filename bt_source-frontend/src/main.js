import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './router/router'



const app = createApp(App).use(router).mount('#app')
