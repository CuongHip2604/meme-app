import axois from '../../dist/axios'

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
    async login({ commit }, { email = '', password = '' }){
        commit('SET_LOADING', true);
        try {
            let data = {
                email, 
                password
            }
            var result = await axois.post(`/member/login.php`,data);
            commit('SET_LOADING', false);
            if(result.data.status === 200){
                
                commit('SET_LOGIN_INFO', result.data);
                commit('SET_USER_INFO', result.data.user);

                return {
                    ok:true,
                    data: result.data,
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