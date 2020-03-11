<template>
  <div class="ass1-section__list">
    <post-item v-for="item in getListPost" :key="item.PID" :post="item" />
    <button
      v-if="getListPost.length && getListPost"
      @click="handleLoadMore()"
      class="load-more ass1-btn"
    >
      <span>Xem thêm</span>
    </button>
    <h3 v-else>Danh sach trong</h3>
  </div>
</template>

<script>
import { PAGE_SIZE, CURR_PAGE } from "../constants";
import PostItem from "./PostItem";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "post-list",
  data() {
    return {
      pagesize: PAGE_SIZE,
      currPage: CURR_PAGE,
      tagIndex: parseInt(this.$route.query.tagIndex)
    };
  },
  components: {
    PostItem
  },
  watch: {
    '$route' (to){
      this.tagIndex = to.query.tagIndex;
      this.currPage = 1;
    }
  },
  computed: {
    ...mapGetters(["getListPost"])
  },
  methods: {
    ...mapActions(["getListPostHasPaging",'getListPostByCategory']),
    handleLoadMore() {
      this.currPage = this.currPage + 1;
      let obj = {
        pagesize: this.pagesize,
        currPage: this.currPage
      };
      if(this.tagIndex){
        obj.tagIndex = this.tagIndex;
        this.getListPostByCategory(obj);
      }else{
        this.getListPostHasPaging(obj);
      }
      
    }
  }
};
</script>

<style>
</style>