import axois from '../../dist/axios'
import { PAGE_SIZE, CURR_PAGE } from "../../constants";
import { CONFIG_ACCESS_TOKEN } from "../../constants"
export default {
    async getListPostHasPaging({ commit }, { pagesize = PAGE_SIZE, currPage = CURR_PAGE }) {
        commit('SET_LOADING', true);
        try {
            var config = {
                params: {
                    pagesize,
                    currPage
                }
            }
            var result = await axois.get('/post/getListPagination.php', config);
            commit('SET_LOADING', false);

            if (result.data.status === 200) {
                if (currPage === 1) commit('SET_LIST_POST', result.data.posts);
                else if (currPage > 1) commit('PUSH_LIST_POST', result.data.posts);
            }
        } catch (error) {
            commit('SET_LOADING', false);
            console.log('error', error);
        }
    },

    async getListPostByCategory({ commit }, { pagesize = PAGE_SIZE, currPage = CURR_PAGE, tagIndex = null }) {
        commit('SET_LOADING', true);
        try {
            var config = {
                params: {
                    pagesize,
                    currPage,
                    tagIndex
                }
            }
            var result = await axois.get('/post/getListByCategory.php', config);
            commit('SET_LOADING', false);

            if (result.data.status === 200) {
                if (currPage === 1) commit('SET_LIST_POST', result.data.posts);
                else if (currPage > 1) commit('PUSH_LIST_POST', result.data.posts);

            }
        } catch (error) {
            commit('SET_LOADING', false);
            console.log('error', error);
        }
    },

    async getPostDetailById({ commit, dispatch }, postid) {
        commit('SET_LOADING', true);
        try {
            var result = await axois.get(`/post/post.php?postid=${postid}`);

            if (result.data.status === 200) {
                let promiseUser = dispatch('getUserById', result.data.data.post.USERID);
                let promiseComments = dispatch('getListCommentByPostid', postid);

                let [resultUser, resultComments] = await Promise.all([promiseUser, promiseComments]);
                let dataPostDetail = {
                    ...result.data.data,
                    comments: []
                }
                if (resultComments.ok && resultUser.ok) {
                    dataPostDetail.comments = resultComments.comments;
                }

                commit('SET_LOADING', false);
                commit('SET_POST_DETAIL', dataPostDetail);
                return {
                    ok: true,
                    data: result.data.data,
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

    async createNewPost({ commit }, { post_content = '', url_image = '', category = '', obj_image = null }) {
        commit('SET_LOADING', true);
        try {
            var bodyFormData = new FormData();
            bodyFormData.append('post_content', post_content)
            bodyFormData.append('url_image', url_image)
            bodyFormData.append('category', category)

            if (obj_image) {
                bodyFormData.append('obj_image', obj_image)
            }
            let config = {
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN),
                    // 'Content-Type': 'multipart/form-data'
                }
            }
            var result = await axois.post('/post/addNew.php', bodyFormData, config);
            commit('SET_LOADING', false);
            if (result.data.status === 200) {
                return {
                    ok: true,
                    data: result.data.data,
                    message: result.data.message
                }
            }
            return {
                ok: false,
                error: result.data.error
            }
        } catch (error) {
            commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async getListPostSearch({ commit }, searchStr) {
        commit('SET_LOADING', true);
        try {

            var result = await axois.get(`/post/search.php?query=${searchStr}`);
            commit('SET_LOADING', false);

            if (result.data.status === 200) {
                return {
                    ok: true,
                    posts: result.data.posts
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
    async getListCommentByPostid(context, postid) {
        try {

            var result = await axois.get(`/comment/comments.php?postid=${postid}`);
            if (result.data.status === 200) {
                return {
                    ok: true,
                    comments: result.data.comments
                }
            }
        } catch (error) {
            return {
                ok: false,
                error: error.message
            }
        }
    },
    async addNewComment({ commit, rootState }, { comment = '', postid = null }) {
        
        try {
            // commit('SET_LOADING', true);
            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem(CONFIG_ACCESS_TOKEN),
                    'Accept': 'application/json'
                }
            }

            let data = {
                comment,
                postid
            }
            let result = await axois.post('/comment/add_new.php', data, config)
            // commit('SET_LOADING', false);
            if (result.data.status === 200) {
                let comment = {
                    ...result.data.body,
                    fullname: rootState.userModule.currentUser.fullname,
                    profilepicture: rootState.userModule.currentUser.profilepicture
                }
                console.log(comment)
                commit('PUST_LIST_COMMENT', comment)
                return {
                    ok: true,
                    comment: comment
                }
            }else{
                return {
                    ok: false,
                    error: result.data.error
                }
            }
        } catch (error) {
            // commit('SET_LOADING', false);
            return {
                ok: false,
                error: error.message
            }
        }
    }
}