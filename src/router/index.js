import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Browse from '../views/Browse.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import FormPengajuan from '../views/FormPengajuan.vue'
import dummy from '@/components/dummy'
import store from '../store'
// import store from '../store'

const axios = require('axios')

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            breadcrumb: 'Home',
            requiresAuth: true
        },
        children: [{
            path: 'browse',
            component: dummy,
            // name: 'pengajuan',
            meta: {
                breadcrumb: 'Browse Pengajuan'
            },
            children: [{
                path: 'new',
                component: FormPengajuan,
                name: 'pengajuan-baru',
                meta: {
                    breadcrumb: 'Pengajuan Baru'
                },
            }, {
                path: '',
                name: 'browse',
                component: Browse,
            }]
        }]
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresAuth: false
        }
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/about',
        name: 'About',
        meta: {
            // role: ['Administrator'],
            requiresAuth: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    var requiresAuth = to.matched.some(e => e.meta.requiresAuth)

    if (requiresAuth) {
        console.log(`path ${to.path} requires auth`)
            // requires auth

        // call axios
        // console.log(url)
        axios.get(store.state.ssoGetUserInfo)
            .then(e => {
                // login successful/user is authenticated
                // got user info data, store it
                console.log('userinfo: ', e.data)
                    // then move to next
                if (e.data.error || !e.data) {
                    next('/login')
                } else {
                    store.commit('setUserInfo', e.data)
                    var role = to.matched.some(e => e.meta.role)
                    console.log('role cek', role)
                    if (role) {
                        var intersect = e.meta.role.filter(v => store.getters.roles.includes(v))

                        if (intersect.length) {
                            next()
                        } else {
                            next('/')
                        }

                    } else {
                        next()
                    }
                }
            })
            .catch(e => {
                // user not authenticated
                console.log(e)
                    // redirect to login
                next('/login')
            })
    } else {
        console.log(`path ${to.path} bypass auth`)
        next()
    }
})

export default router