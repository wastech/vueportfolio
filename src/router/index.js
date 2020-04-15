import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '@/components/ContactUs.vue'
import Error from '@/components/Error.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactUs,
        meta: { transition: 'fade-in-left' },
    },
    {
        path: '/portfolio',
        name: 'portfolio',
        component: Error,
        meta: { transition: 'fade-in-left' },
    }, {
        path: '/blog',
        name: 'blog',
        component: Error,
        meta: { transition: 'fade-in-left' },
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router