import axois from '../../dist/axios'
import { PAGE_SIZE, CURR_PAGE } from "../../constants";
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
            commit('SET_LOADING', false);
            
            if(result.data.status === 200){

                
                await dispatch('getUserById', result.data.data.post.USERID);
                
                commit('SET_POST_DETAIL', result.data.data);
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

    
}