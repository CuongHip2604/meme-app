<template>
  <div>
    <main>
      <div class="ass1-login">
        <div class="ass1-login__content">
          <p>Đổi mật khẩu</p>
          <div class="ass1-login__form">
            <form action="#" @submit.prevent="handleChangePass()">
              <input
                v-model="oldPassword"
                type="password"
                class="form-control"
                placeholder="Mật khẩu cũ"
                required
              />
              <input
                v-model="newPassword"
                type="password"
                class="form-control"
                placeholder="Mật khẩu mới"
                required
              />
              <input
                v-model="reNewPassword"
                type="password"
                class="form-control"
                placeholder="Xác nhận mật khẩu mới"
                required
              />
              <div class="ass1-login__send justify-content-center">
                <button type="submit" class="ass1-btn">Gửi</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div class="ass1-footer">
        <div class="container">
          <p class="text-center">Cộng đồng chế ảnh ZendVN</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { NOTI_UPDATE_PASS } from "../constants";
export default {
  name: "change-password",
  data() {
    return {
      oldPassword: "",
      newPassword: "",
      reNewPassword: "",
      userid: this.$route.params.id
    };
  },
  watch: {
    $route(to) {
      this.userid = to.params.id;
      this.checkIsCurrentUser();
    }
  },
  created() {
    this.checkIsCurrentUser();
  },
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    ...mapActions(["changePassword"]),
    checkIsCurrentUser() {
      if (this.userid && this.currentUser) {
        if (this.userid !== this.currentUser.USERID) {
          this.$router.push("/");
        }
      }
    },
    handleChangePass() {
      let objData = {
        oldPassword: this.oldPassword,
        newPassword: this.newPassword,
        reNewPassword: this.reNewPassword
      };
      if (this.oldPassword && this.newPassword && this.reNewPassword) {
        this.changePassword(objData).then(res => {
          if (!res.ok) {
            this.$notify({
              group: "noti",
              type: "error",
              title: "Error!",
              text: "Mật khẩu xác nhận không khớp hoặc không được trùng với mật khẩu cũ HOẶC mật khẩu cũ không đúng!"
            });
          } else {
            this.$notify(NOTI_UPDATE_PASS);
            this.$router.push({
              name: "user-page",
              params: {
                userid: this.currentUser.USERID
              }
            });
          }
        });
      } else {
        this.$notify({
                group: "noti",
                type: "error",
                title: "Error!",
                text: "Thông tin không được để trống"
              });
      }
    }
  }
};
</script>

<style>
</style>