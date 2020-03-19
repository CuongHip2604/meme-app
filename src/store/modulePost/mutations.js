export default {
    SET_LIST_POST(state, data) {
        state.listPost = data;
    },
    PUSH_LIST_POST(state, data) {
        state.listPost = [...state.listPost, ...data];
    },
    SET_POST_DETAIL(state, data){
        state.postDetail = data;
    },
    PUST_LIST_COMMENT(state, comment){
        state.postDetail.comments.push(comment);
    }
}