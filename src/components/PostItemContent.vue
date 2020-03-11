<template>
  <div class="ass1-section__content">
    <p>
      {{post.post_content}}
    </p>
    <div class="ass1-section__image">
      <router-link to="/post-detail">
        <img :src="post.url_image" alt />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "post-item-content",
  props: {
    post: {
      type: Object, default: null
    }
  },
};
</script>

<style>
</style>