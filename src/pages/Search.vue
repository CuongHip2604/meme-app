<template>
  <div class="search-page">
    <div class="search-infor">
      <h3>
        Từ khóa tìm kiếm:
        <strong>{{query}}</strong>
      </h3>
      <p>Tìm kiếm được {{listPostSearch.length}} kết quả</p>
    </div>
    <div
      v-if="listPostSearch && listPostSearch.length"
      v-masonry
      column-width=".grid-sizer"
      transition-duration="0.3s"
      item-selector=".ass1-section__item"
      class="ass1-section__wrap row ass1-section__isotope-init"
    >
      <div class="grid-sizer"></div>
      <post-item v-for="item in listPostSearch" :key="item.PID" :post="item" class="col-lg-6" />
    </div>
  </div>
</template>

<script>
import PostItem from "../components/PostItem";
import { mapActions } from "vuex";
export default {
  name: "search",
  components: {
    PostItem
  },
  data() {
    return {
      query: this.$route.query.query,
      listPostSearch: []
    };
  },
  watch: {
    $route(to) {
      this.query = to.query.query;
      this.checkQuery();
      this.fetchDataSearch();
    }
  },
  created(){
      this.checkQuery();
      this.fetchDataSearch();
  },
  methods: {
    ...mapActions(["getListPostSearch"]),
    checkQuery() {
      if (!this.query) {
        this.$router.push("/");
      }
    },
    fetchDataSearch() {
      if (this.query) {
        this.getListPostSearch(this.query).then(res => {
          if (res.ok) {
            this.listPostSearch = res.posts;
            this.$redrawVueMasonry();
          }
        });
      }
    }
  }
};
</script>

<style>
.search-page{
    margin-top: 45px;
}
.search-infor{
    padding-bottom: 30px;
}
mark, .mark{
    background-color: yellow;
    padding: 0;
}
</style>