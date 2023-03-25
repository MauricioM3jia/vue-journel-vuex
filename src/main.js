import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import  './styles/styles.scss'

//npm add -D sass-loader@10 sass
createApp(App).use(store).use(router).mount('#app')
