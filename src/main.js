import '@/scss/global.scss' // our styles
import '@/assets/main.css' // vite styles
import '@/../node_modules/bootstrap-icons/font/bootstrap-icons.scss' // Bootstrap icons

//import '../node_modules/bootstrap/scss/bootstrap.scss' // all bootstrap styles
//import * as bootstrap from 'bootstrap' // all bootstrap scripts

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
