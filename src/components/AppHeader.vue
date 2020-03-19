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
        <!-- if not login -->
        <router-link v-if="!isLogin" to="/login" class="ass1-header__btn-upload ass1-btn">Login</router-link>

        <!-- if already login -->
        <div class="wapper-user" v-else-if="currentUser">
          <router-link :to="{ name: 'user-page', params: { id: currentUser.USERID } }" class="user-header">
            <span class="avatar">
              <img :src="getAvatar" alt />
            </span>
            <span class="email">{{currentUser.fullname}}</span>
          </router-link>
          <div class="logout" @click="handleLogout()">Logout</div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import $ from "jquery";
import Navigation from "./Navigation";
import Search from "./Search";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app-header",
  components: {
    Navigation,
    Search
  },
  computed: {
    ...mapGetters(["isLogin", "currentUser"]),
    getAvatar() {
      if (this.currentUser.profilepicture) {
        return this.currentUser.profilepicture;
      }

      return "images/default-user-image.png";
    },
    
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
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      const check = confirm("You want logout?");
      if (check) {
        this.logout().then(res => {
          if (res.ok) {
            this.$router.push("/login");
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.user-header {
  position: relative;
  color: #1e1633;
  display: inline-block;
  transition: all 0.2s ease;
}
.user-header > span {
  display: inline-block;
  vertical-align: middle;
}
.user-header .avatar {
  width: 35px;
  height: 35px;
  margin-right: 4px;
  border-radius: 100%;
  overflow: hidden;
}
.user-header .avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.wapper-user {
  position: relative;
}
.logout {
  right: 0;
  top: 100%;
  position: absolute;
  background-color: #ffffff;
  text-align: right;
  border-radius: 3px;
  padding: 10px 30px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 0;
  transition: all 0.3 ease;
  pointer-events: none;
  cursor: pointer;
  opacity: 0;
}
.wapper-user .logout:hover,
.wapper-user .user-header:hover + .logout {
  opacity: 1;
  z-index: 2;
  pointer-events: auto;
  background-color: rgb(238, 236, 236);
}
</style>
