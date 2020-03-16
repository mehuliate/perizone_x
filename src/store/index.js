import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'

const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        active: null,
        userInfo: null,
        ssoGetUserInfo: process.env.NODE_ENV == 'development' ? '/api?command=getUserInfo' : '/sso/api.php?command=getUserInfo',
        ssoAttach: process.env.NODE_ENV == 'development' ? '/api?command=attach' : '/sso/api.php?command=attach',
        ssoLogin: process.env.NODE_ENV == 'development' ? '/api?command=login' : '/sso/api.php?command=login',
        ssoLogout: process.env.NODE_ENV == 'development' ? '/api?command=logout' : '/sso/api.php?command=logout',
    },
    mutations: {
        setActive(state, payload) {
            state.active = payload
        },
        setUserInfo(state, payload) {
            state.userInfo = payload
        }
    },
    getters: {
        active(state) {
            return state.active
        },
        userInfo(state) {
            return state.userInfo
        },
        roles(state) {
            return state.userInfo.apps_data['8'] ? state.userInfo.apps_data['8'].roles : []
        },
        cekRole: (state, getters) => (role) => {
            return getters.roles.some((e) => {
                return e == role
            })
        }
    },
    actions: {
        logout(context) {
            axios.post(context.state.ssoLogout)
                .then(() => {
                    router.push({
                        path: '/login'
                    })
                })
        }
    },
    modules: {}
})