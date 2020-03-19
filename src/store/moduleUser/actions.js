import axois from '../../dist/axios'
import { CONFIG_ACCESS_TOKEN } from '../../constants'
import { parseJwt } from '../../hepper'

export default {
    async getUserById({ commit }, userId) {
        commit('SET_LOADING', true);
        try {
            var result = await axois.get(`/member/member.php?userid=${userId}`);
            commit('SET_LOADING', false);
            if (result.data.status === 200) {
                commit('SET_USER_INFO', result.data.user);
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async login({ commit, dispatch }, { email = '', password = '' }) {
        commit('SET_LOADING', true);
        try {
            let data = {
                email,
                password
            }
            var result = await axois.post(`/member/login.php`, data);
            commit('SET_LOADING', false);
            if (result.data.status === 200) {
                commit('SET_USER_INFO', result.data.user);
                commit('SET_LOGIN_INFO', result.data);
                dispatch('getListPostByUserId', result.data.user.USERID);
                return {
                    ok: true,
                    data: result.data,
                    error: null
                }
            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }

        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async logout({ commit }) {
        commit('SET_LOGOUT');
        return {
            ok: true,
            error: null
        }
    },
    async getListPostByUserId({ commit }, userid) {
        commit('SET_LOADING', true);
        try {
            let config = {
                params: {
                    userid: userid
                },
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
                }
            }
            var result = await axois.get('/post/getListPostUserID.php', config);
            commit('SET_LOADING', false);

            if (result.data.status === 200) {
                var objData = {
                    posts: result.data.posts,
                    userid: userid
                }
                commit('SET_USER_POSTS', objData)
                return {
                    ok: true,
                    posts: result.data.posts || [],
                    error: null
                }
            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async checkLogin({ commit, dispatch }) {
        try {
            let tokenLocal = localStorage.getItem(CONFIG_ACCESS_TOKEN);
            let userObj = parseJwt(tokenLocal);
            if (userObj) {
                let promiseUser = dispatch('getUserById', userObj.id);
                let promisePostUser = dispatch('getListPostByUserId', userObj.id);
                let [resultUser, resultPostUser] = await Promise.all([promiseUser, promisePostUser]);

                if (resultUser.ok && resultPostUser.ok) {
                    let data = {
                        user: resultUser.data,
                        token: tokenLocal
                    }
                    commit('SET_LOGIN_INFO', data);
                    return {
                        ok: true,
                        error: null
                    }
                }

            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },

    async register({ commit, dispatch }, data) {
        commit('SET_LOADING', true);
        try {
            var result = await axois.post('/member/register.php', data);
            commit('SET_LOADING', false);
            if (result.data.code === 200) {
                let objData = {
                    user: result.data.user,
                    token: result.data.token
                }

                commit('SET_USER_INFO', result.data.user);
                //luu currentUser va token vao local
                commit('SET_LOGIN_INFO', objData);

                dispatch('getListPostByUserId', result.data.user.USERID)
                return {
                    ok: true,
                    data: result.data,
                    error: null
                }
            } else {
                return {
                    ok: false,
                    error: result.data.error
                }

            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async changePassword({ commit }, data) {
        commit('SET_LOADING', true);
        try {
            let config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN)
                }
            }
            var result = await axois.post('/member/password.php', data, config);
            commit('SET_LOADING', false);
            if (result.data.status === 200) {
                return {
                    ok: true,
                    message: result.data.message
                }
            } else {
                return {
                    ok: false,
                    error: result.data.error
                }
            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async updateProfile({ commit }, { fullname = '', description = '', gender = '', objFile = null }) {
        commit('SET_LOADING', true);
        try {
            var bodyFormData = new FormData();
            bodyFormData.append('fullname', fullname);
            bodyFormData.append('description', description);
            bodyFormData.append('gender', gender);

            if (objFile) {
                bodyFormData.append('avatar', objFile);
            }

            let config = {
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN),
                    'Content-Type': 'multipart/form-data'
                }
            }
            var result = await axois.post('/member/update.php', bodyFormData, config);
            commit('SET_LOADING', false);
            if (result.data.status === 200) {
                commit('SET_CURRENT_USER', result.data.user);
                return {
                    ok: true,
                    data: result.data.user,
                    error: null
                }
            }

        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    }
}