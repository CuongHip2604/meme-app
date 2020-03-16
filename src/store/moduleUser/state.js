import { CONFIG_ACCESS_TOKEN } from '../../constants'

export default {
    currentUser: null,
    [CONFIG_ACCESS_TOKEN]: localStorage.getItem(CONFIG_ACCESS_TOKEN), 
    users: {},
    posts: {}
}