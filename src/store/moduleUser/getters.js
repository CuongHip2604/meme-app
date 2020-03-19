import { parseJwt } from '../../hepper'
import { CONFIG_ACCESS_TOKEN } from '../../constants'


export default {
    isLogin: (state) => {
        let userObj = parseJwt(state[CONFIG_ACCESS_TOKEN]);
        if (userObj) {
            return true
        } else {
            return false
        }
    },
    currentUser: (state) => {
        return state.currentUser;
    },
    getListPostOfcurrentUser: (state) => {
        if(state.currentUser){
            let userCurrentId = state.currentUser.USERID;
            return state.posts[userCurrentId];
        }
    }
}