<template>
  <div>
    <main>
      <div class="container">
        <!--sections-->
        <div class="row">
          <div class="col-lg-8">
            <!--section-->
            <div class="ass1-section__list">
              <post-list/>
              <post-comment-add/>
              <post-comments/>
            </div>
          </div>
          <div class="col-lg-4">
            <sidebar/>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import PostList from '../components/PostList'
import PostCommentAdd from '../components/PostCommentAdd'
import PostComments from '../components/PostComments'
import { mapActions } from 'vuex'
export default {
  name: "post-detail",
  data(){
    return {
      postid: this.$route.params.id
    }
  },
  watch: {
    '$route' (to){
      this.postid = to.params.id;
      this.fetchDataPostDetail();
    }
  },
  components: {
    Sidebar,
    PostList,
    PostCommentAdd,
    PostComments
  },
  created(){
    this.fetchDataPostDetail();
  },
  methods: {
    ...mapActions(['getPostDetailById']),
    fetchDataPostDetail(){
      this.getPostDetailById(this.postid);
    }
  }
};
</script>

<style>
</style>