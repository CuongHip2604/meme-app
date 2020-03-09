import Vue from 'vue'
import Vuex from 'vuex'
import post from './modulePost'
import user from './moduleUser'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        post,
        user
    }

})