import Vue from 'vue'
import VueRouter from 'vue-router'

import Flexible from '../views/Flexible'
import Home from '../views/Home.vue'
import Video from '../views/Video.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'flexible',
        component: Flexible
    },
    {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/video',
        name: 'video',
        component: () => import('../views/Video.vue')
    }
]

export default new VueRouter({
    routes
})
