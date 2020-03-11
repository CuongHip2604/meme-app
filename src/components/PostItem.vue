<template>
  <div class="ass1-section__item">
    <div class="ass1-section">
      <post-item-head :post='post'/>
      <post-item-content :post='post'/>
      <post-item-footer :post='post'/>
    </div>
  </div>
</template>

<script>
import PostItemHead from './PostItemHead'
import PostItemContent from './PostItemContent'
import PostItemFooter from './PostItemFooter'
export default {
  name: "post-item",
  components: {
      PostItemHead,
      PostItemContent,
      PostItemFooter
  },
  props: {
    post: {
      type: Object, default: null
    }
  }
};
</script>

<style>
</style>