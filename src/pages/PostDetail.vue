<template>
  <div>
    <main>
      <div class="container">
        <!--sections-->
        <div class="row">
          <div class="col-lg-8">
            <!--section-->
            <div class="ass1-section__list" v-if="getDataPostDetail && getDataPostDetail.post">
              <div class="ass1-section">
                <post-item :post="getDataPostDetail.post" />
              </div>

              <post-comment-add />
              <post-comments :comments="getDataPostDetail.comments"/>
            </div>
          </div>
          <div class="col-lg-4">
            <sidebar />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import PostItem from "../components/PostItem";
import PostCommentAdd from "../components/PostCommentAdd";
import PostComments from "../components/PostComments";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "post-detail",
  data() {
    return {
      postid: this.$route.params.id
    };
  },
  watch: {
    $route(to) {
      this.postid = to.params.id;
      this.fetchDataPostDetail();
    }
  },
  computed: {
    ...mapGetters(["getDataPostDetail"])
  },
  components: {
    Sidebar,
    PostItem,
    PostCommentAdd,
    PostComments
  },
  created() {
    this.fetchDataPostDetail();
  },
  methods: {
    ...mapActions(["getPostDetailById"]),
    fetchDataPostDetail() {
      this.getPostDetailById(this.postid).then(res => {
        if (!res.ok) {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>

<style>
</style>