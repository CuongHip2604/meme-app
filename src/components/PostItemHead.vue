<template>
  <div class="ass1-section__head">
    <router-link to="/post-detail" class="ass1-section__avatar ass1-avatar">
      <img :src="getAvatar" alt />
    </router-link>
    <div>
      <router-link
        v-if="querySearch"
        :to="getUserLink"
        class="ass1-section__name"
        v-html="formatFullname"
      ></router-link>
      <router-link v-else :to="getUserLink" class="ass1-section__name">{{formatFullname}}</router-link>
      <span class="ass1-section__passed">{{formatTimeAdded}}</span>
    </div>
    <router-link :to="getUserLink" class="ass1-section__link ass1-btn-icon">
      <i class="icon-Link"></i>
    </router-link>
  </div>
</template>

<script>
import moment from "moment";
import { replaceAll } from "../hepper";
export default {
  name: "post-item-head",
  data() {
    return {
      querySearch: this.$route.query.query
    };
  },
  watch: {
    $route(to) {
      this.querySearch = to.query.query;
    }
  },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  computed: {
    getAvatar() {
      if (this.post.profilepicture) return this.post.profilepicture;
      return "images/avatar-02.png";
    },
    formatTimeAdded() {
      moment.locale("vi");
      return moment(this.post.time_added).fromNow();
    },
    getUserLink() {
      let userid = this.post.USERID || 1;
      return {
        name: "user-page",
        params: { id: userid }
      };
    },
    formatFullname() {
      if (this.querySearch) {
        return replaceAll(
          this.post.fullname,
          this.querySearch,
          `<mark>${this.querySearch}</mark>`
        );
      } else {
        return this.post.fullname;
      }
    }
  }
};
</script>

<style>
</style>