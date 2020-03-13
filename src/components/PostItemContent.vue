<template>
  <div class="ass1-section__content">
    <p v-if="!querySearch">{{formatPostContent}}</p>
    <p v-else v-html="formatPostContent"></p>
    <div class="ass1-section__image">
      <router-link :to="getPostLink">
        <img :src="post.url_image" alt />
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "post-item-content",
  data() {
    return {
      querySearch: this.$route.query.query
    };
  },
  props: {
    post: {
      type: Object,
      default: null
    }
  },
  watch: {
    $route(to) {
      this.querySearch = to.query.query;
    }
  },
  computed: {
    getPostLink() {
      return {
        name: "post-detail",
        params: {
          id: this.post.PID
        }
      };
    },
    formatPostContent() {
      if (this.querySearch) {
        return this.replaceAll(
          this.post.post_content,
          this.querySearch,
          `<mark>${this.querySearch}</mark>`
        );
      } else {
        return this.post.post_content;
      }
    }
  }
};
</script>

<style>
</style>