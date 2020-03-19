<template>
  <div>
    <main>
      <div class="ass1-login">
        <div class="ass1-login__logo">
          <a href="index.html" class="ass1-logo">ZendVn Meme</a>
        </div>
        <div class="ass1-login__content">
          <p>Đăng ký một tài khoản</p>
          <div class="ass1-login__form">
            <form action="#" @submit.prevent="handleRegister()">
              <input
                v-model="fullname"
                type="text"
                class="form-control"
                placeholder="Tên hiển thị"
                required
              />
              <input v-model="email" type="email" class="form-control" placeholder="Email" required />
              <input
                v-model="password"
                type="password"
                class="form-control"
                placeholder="Mật khẩu"
                required
              />
              <input
                v-model="repassword"
                type="password"
                class="form-control"
                placeholder="Nhập lại mật khẩu"
                required
              />
              <div class="ass1-login__send">
                <a href="dang-nhap.html">Đăng nhập</a>
                <button type="submit" class="ass1-btn">Đăng ký</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { NOTI_REGISTER } from "../constants";
export default {
  name: "register",
  data() {
    return {
      fullname: "",
      email: "",
      password: "",
      repassword: ""
    };
  },
  methods: {
    ...mapActions(["register"]),
    handleRegister() {
      let data = {
        fullname: this.fullname,
        email: this.email,
        password: this.password,
        repassword: this.repassword
      };
      if (data.fullname && data.email && data.password && data.repassword) {
        this.register(data).then(res => {
          if (!res.ok) {
            this.$notify({
              group: "noti",
              type: "error",
              title: "Error!",
              text: res.error
            });
          } else {
            this.$router.push("/");
            this.$notify(NOTI_REGISTER);
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