<template>
  <div>
    <main>
      <div class="ass1-login">
        <div class="ass1-login__content">
          <p>Profile</p>

          <div class="ass1-login__form">
            <div class="avatar">
              <img :src="getAvatar" alt style="border-radius: 100%" />
            </div>
            <form action="#" v-if="currentUser" @submit.prevent="handleEditProfile()">
              <input
                :value="currentUser.fullname"
                @input="fullname = $event.target.value"
                type="text"
                class="form-control"
                placeholder="Tên ..."
                required
              />

              <select
                :value="currentUser.gender"
                @change="gender = $event.target.value"
                class="form-control"
              >
                <option value disabled>Giới tính</option>
                <option value="nam">Nam</option>
                <option value="nu">Nữ</option>
              </select>
              <input
                @change="uploadAvatar($event)"
                type="file"
                name="avatar"
                placeholder="Ảnh đại diện"
                class="form-control"
              />
              <textarea
                :value="currentUser.description"
                @input="description = $event.target.value"
                class="form-control"
                cols="30"
                rows="5"
                placeholder="Mô tả ngắn ..."
              ></textarea>
              <div class="ass1-login__send justify-content-center">
                <button type="submit" class="ass1-btn">Cập nhật</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { NOTI_UPDATE_PROFILE } from "../constants";
export default {
  name: "user-profile",
  data() {
    return {
      fullname: "",
      gender: "",
      avatar: {
        objFile: null,
        base64URL: ""
      },
      description: "",
      userid: this.$route.params.id
    };
  },
  watch: {
    $toute(to) {
      this.userid = to.params.id;
      this.checkIsCurrentUser();
    }
  },
  computed: {
    ...mapGetters(["currentUser"]),
    getAvatar() {
      if (this.avatar.base64URL === "" && this.currentUser) {
        return this.currentUser.profilepicture;
      }
      return this.avatar.base64URL;
    }
  },
  created() {
    this.checkIsCurrentUser();
  },
  methods: {
    ...mapActions(["updateProfile"]),
    checkIsCurrentUser() {
      if (this.userid && this.currentUser) {
        if (this.userid !== this.currentUser.USERID) {
          this.$router.push("/");
        }
      }
    },
    uploadAvatar(e) {
      if (e.target.files && e.target.files.length) {
        const fileAvatar = e.target.files[0];
        let reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            let previewSrc = reader.result;
            this.avatar.base64URL = previewSrc;
            this.avatar.objFile = fileAvatar;
          },
          false
        );
        if (fileAvatar) {
          reader.readAsDataURL(fileAvatar);
        }
      }
    },
    handleEditProfile() {
      if (!this.fullname) this.fullname = this.currentUser.fullname;
      if (!this.description) this.description = this.currentUser.description;
      if (!this.gender) this.gender = this.currentUser.gender;

      if (this.fullname && this.description && this.gender) {
        let data = {
          fullname: this.fullname,
          description: this.description,
          gender: this.gender
        };
        if (this.avatar.objFile) {
          data.objFile = this.avatar.objFile;
        }

        this.updateProfile(data).then(res => {
          if (res.ok) {
            this.$notify(NOTI_UPDATE_PROFILE);
            this.$router.push({
              name: "user-page",
              params: {
                userid: this.currentUser.USERID
              }
            });
          } else {
            this.$notify({
              group: "noti",
              type: "error",
              title: "Error!",
              text: res.error
            });
          }
        });
      }
    }
  }
};
</script>

<style>
</style>