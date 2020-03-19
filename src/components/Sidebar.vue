<template>
  <aside class="ass1-aside">
    <div class="ass1-content-head__t">
      <div>Bài viết gần đây của bạn.</div>
    </div>
    <div v-if="!isLogin">
      Vui lòng đăng nhập để xem nội dung này
      <router-link to="/login">Đăng nhập</router-link>
    </div>
    <div v-else-if="isLogin && getListPostOfcurrentUser && getListPostOfcurrentUser.length">
      <post-item v-for="item in getListPostOfcurrentUser" :key="item.PID" :post="item" />
    </div>
  </aside>
</template>

<script>
import PostItem from "./PostItem";
import { mapGetters } from "vuex";
export default {
  name: "sidebar",
  components: {
    PostItem
  },
  computed: {
    ...mapGetters(["isLogin", "getListPostOfcurrentUser"])
  }
};
</script>

<style>
</style>