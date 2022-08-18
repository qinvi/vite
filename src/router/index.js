import { createRouter, createWebHashHistory } from 'vue-router'

import { routeNames, routerPath } from 'router/map'

import Home from 'pages/home.vue'
import About from 'pages/about.vue'

const routes = [
    {
        path: routerPath.home,
        name: routeNames.home,
        component: Home
    },
    {
        path: routerPath.home,
        name: routeNames.home,
        component: About
    }
]

const router = createRouter({
    history: createWebHashHistory,
    routes
})

export default router