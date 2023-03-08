import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store'
import Aplication from './views/Aplication.vue'
import Login from './views/Login.vue'
import Dashboard from './views/Dashboard.vue'
const routes = [
    {
        path: '/',
        component: Aplication
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/dashboard',
        component: Dashboard
    },

];

const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

createApp(App).use(store).use(router).mount('#app')
