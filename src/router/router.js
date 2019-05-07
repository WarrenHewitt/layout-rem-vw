import Vue from 'vue'
import VueRouter from 'vue-router'

import Rem from '../views/Rem'
import Vw from '../views/Vw'

Vue.use(VueRouter)

const routes = [
    {
        path: '/rem',
        name: 'rem',
        component: Rem
    },
    {
        path: '/video',
        name: 'video',
        component: () => import('../views/Video.vue')
    },
    {
        path: '/vw',
        name: 'vw',
        component: Vw
    }
]

export default new VueRouter({
    routes
})
