<template>
  <div>
    <!-- MAIN -->
    <main>
      <div class="container">
        <!--sections-->
        <div class="row">
          <div class="col-lg-8">
            <post-list />
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
import PostList from "../components/PostList";
import Sidebar from "../components/Sidebar";
import { mapActions } from "vuex";
export default {
  name: "home",
  components: {
    PostList,
    Sidebar
  },
  watch: {
    $route(to) {
      var tagIndex = to.query.tagIndex;
      if (tagIndex) {
        this.getListPostByCategory({ tagIndex });
      } else {
        this.getListPostHasPaging({});
      }
    }
  },

  methods: {
    ...mapActions(["getListPostHasPaging", "getListPostByCategory"])
  },
  created() {
    var tagIndex = this.$route.query.tagIndex;
    this.getListPostHasPaging({ tagIndex });
  }
};
</script>

<style>
</style>