import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from 'src/router'
import store from 'store'

createApp(App).use(store).use(router).mount('#app')