import Vue from 'vue'
import Vuex from 'vuex'
import post from './modulePost'
import user from './moduleUser'

Vue.use(Vuex)

const store = new Vuex.Store({
    
    state: {
        isLoading: false
    },
    getters: {},
    mutations: {
        SET_LOADING: (state, loading = false) => {
            state.isLoading = loading;
        }
    },
    actions: {
        setLoading({commit}, loading = false ){
            commit('SET_LOADING', loading);
        }
    },
    modules: {
        postModule: post,
        userModule: user
    }

})

export default store;