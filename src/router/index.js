import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import portfolio from '@/components/portfolio.vue'
import port from '@/components/port'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: portfolio,
        meta: { transition: 'fade-in-left' },
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: port,
        meta: { transition: 'fade-in-left' },
    }, {
        path: '/blog',
        name: 'blog',
        component: port,
        meta: { transition: 'fade-in-left' },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router