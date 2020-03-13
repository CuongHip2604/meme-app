export default {
    getListPost: (state) => {
        return state.listPost;
    },
    getDataPostDetail(state, getters, rootState) {
        if (state.postDetail) {
            var USERID = state.postDetail.post.USERID;
            var user = rootState.userModule.users[USERID];
            var data = {
                post: {
                    ...state.postDetail.post,
                    fullname: user.fullname,
                    profilepicture: user.profilepicture
                },
                categories: state.postDetail.categories
            }
            
            return data;
        }
        


    }
}