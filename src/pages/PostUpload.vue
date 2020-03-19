<template>
  <div>
    <!-- MAIN -->
    <main>
      <div class="container">
        <!--sections-->
        <div class="row">
          <div class="col-lg-8">
            <!--section-->
            <div class="ass1-section ass1-section__edit-post">
              <div class="ass1-section__content">
                <form action="#">
                  <div class="form-group">
                    <input
                      v-model="url_image"
                      type="text"
                      class="form-control ttg-border-none"
                      placeholder="https://"
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      v-model="post_content"
                      type="text"
                      class="form-control ttg-border-none"
                      placeholder="Mô tả ..."
                    ></textarea>
                  </div>
                </form>
                <div class="ass1-section__image" @click="uploadImage()">
                  <a href="#">
                    <img :src="renderImage" alt="default" />
                  </a>
                </div>
                <a href="https://memeful.com/" target="_blank" class="ass1-btn ass1-btn-meme">
                  Chế ảnh từ
                  meme
                </a>
                <button @click="uploadImage()" class="ass1-btn ass1-btn-meme">Đăng ảnh từ máy tính</button>
                <input
                  type="file"
                  @change="handleUploadImage($event)"
                  style="display: none"
                  name="images"
                  class="from-control"
                  ref="imageUpload"
                />
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <aside class="ass1-aside ass1-aside__edit-post">
              <div>
                <button @click="handleUploadPost()" class="ass1-btn">Đăng bài</button>
              </div>
              <div class="ass1-aside__edit-post-head">
                <span style="display: block; width: 100%; margin-bottom: 10px;">Chọn danh mục</span>
                <label class="ass1-checkbox" v-for="item in allCategories" :key="item.id">
                  <input :value="item.id" v-model="categories" type="checkbox" name="state-post" />
                  <span></span>
                  <p>{{item.text}}</p>
                </label>
              </div>
              <div class="ass1-aside__get-code">
                <p>Share Link</p>
              </div>
              <div class="ass1-aside__social">
                <a href class="ass1-btn-social__facebook ass1-btn-social">
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a href class="ass1-btn-social__twitter ass1-btn-social">
                  <i class="fa fa-twitter" aria-hidden="true"></i>
                </a>
                <a href class="ass1-btn-social__google ass1-btn-social">
                  <i class="fa fa-google-plus" aria-hidden="true"></i>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { checkImageFile } from "../hepper";
import { mapActions } from "vuex";
import { NOTI_POST_UPLOAD } from "../constants";
export default {
  name: "post-upload",
  data() {
    return {
      post_content: "",
      url_image: "",
      obj_image: {
        base64URL: "",
        objFile: null
      },
      categories: []
    };
  },
  computed: {
    allCategories() {
      return this.$store.state.postModule.categories;
    },
    renderImage() {
      if (this.url_image) {
        return this.url_image;
      } else if (this.obj_image.base64URL) {
        return this.obj_image.base64URL;
      }
      return "images/no_image_available.jpg";
    }
  },
  methods: {
    ...mapActions(["createNewPost"]),
    uploadImage() {
      this.$refs.imageUpload.click();
    },
    handleUploadImage(e) {
      if (e.target.files && e.target.files.length) {
        let imageUpload = e.target.files[0];
        let check = checkImageFile(imageUpload);

        if (!check) {
          alert("file upload not valid");
        }

        let reader = new FileReader();
        reader.addEventListener(
          "load",
          () => {
            let previewSrc = reader.result;
            this.obj_image.base64URL = previewSrc;
            this.obj_image.objFile = imageUpload;
          },
          false
        );

        if (imageUpload) {
          reader.readAsDataURL(imageUpload);
        }
      }
    },
    handleUploadPost() {
      let { post_content, url_image, obj_image, categories } = this;
      if (post_content && categories.length) {
        if (obj_image || obj_image.objFile) {
          let data = {
            post_content,
            url_image,
            category: categories
          };
          if (obj_image.objFile) {
            data.obj_image = obj_image.objFile;
          }
          this.createNewPost(data).then(res => {
            if (res.ok) {
              this.resetData();
              this.$notify(NOTI_POST_UPLOAD);
              this.$router.push("/");
            } else {
              this.$notify({
                group: "noti",
                type: "error",
                title: "Error!",
                text: res.error
              });
            }
          });
        } else {
          this.$notify({
            group: "noti",
            type: "error",
            title: "Error!",
            text: "Xin vui lòng chọn hình ảnh"
          });
        }
      } else {
        this.$notify({
            group: "noti",
            type: "error",
            title: "Error!",
            text: "Thông tin không được để trống"
          });
      }
    },
    resetData() {
      (this.post_content = ""),
        (this.url_image = ""),
        (this.obj_image = {
          base64URL: "",
          objFile: null
        }),
        (this.categories = []);
    }
  }
};
</script>

<style>
</style>