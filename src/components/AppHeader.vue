<template>
  <header>
    <div class="ass1-header">
      <div class="container">
        <router-link to="/" class="ass1-logo">Meme</router-link>
        <navigation />
        <search />
        <router-link to="/upload" class="ass1-header__btn-upload ass1-btn">
          <i class="icon-Upvote"></i> Upload
        </router-link>
        <router-link to="/login" class="ass1-header__btn-upload ass1-btn">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
import Navigation from "./Navigation";
import Search from "./Search";
export default {
  name: "app-header",
  components: {
    Navigation,
    Search
  },
  mounted() {
    $(".ass1-header__menu li > a").click(function() {
      // $(".ass1-header__nav").hide();
      $(this)
        .parent()
        .find(".ass1-header__nav")
        .slideToggle(300, "swing");
    });
    $(".ass1-header__nav ul li > a").click(function() {
      // $(".ass1-header__nav").hide();
      $(this)
        .parents()
        .find(".ass1-header__nav")
        .slideUp(300, "swing");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
