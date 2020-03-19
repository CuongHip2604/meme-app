<template>
  <div id="app">
    <app-header v-if="isRenderHeader" />
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <app-footer v-if="isRenderFooter" />
    <loading :class="{ show : isLoading }" />
    <notifications group="noti" position="bottom left" :duration='3000' :width='400' />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import Loading from "./components/Loading";
import { mapState, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
    Loading
  },
  computed: {
    ...mapState(["isLoading"]),
    isRenderHeader() {
      var arrRouter = ["login", "register"];
      var routerName = this.$route.name;
      if (arrRouter.indexOf(routerName) !== -1) return false;
      return true;
    },
    isRenderFooter() {
      var arrRouter = ["home", "post-detail"];
      var routerName = this.$route.name;
      if (arrRouter.indexOf(routerName) !== -1) return false;
      return true;
    }
  },
  methods: {
    ...mapActions(['checkLogin'])
  },
  created(){
    this.checkLogin();
  }
};
</script>

<style>
</style>
