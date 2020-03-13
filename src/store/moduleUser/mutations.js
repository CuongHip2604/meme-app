import Vue from 'vue'
import { CONFIG_ACCESS_TOKEN } from '../../constants'
export default {
    SET_USER_INFO(state, user) {
        Vue.set(state.users, user.USERID, user);
    },
    SET_LOGIN_INFO(state, { token = '', user = null }) {
        localStorage.setItem(CONFIG_ACCESS_TOKEN, token);
        state.currentUser = user;
    }
}