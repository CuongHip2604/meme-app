<template>
  <div class="ass1-add-comment">
    <form action="#" @submit.prevent="handleAddComment()">
      <input
        v-model="comment"
        type="text"
        class="form-control ttg-border-none"
        placeholder="Thêm một bình luận"
      />
    </form>
    <div class="ass1-add-comment__content">
      <a
        @click.prevent="handleAddComment()"
        href="#"
        class="ass1-add-comment__btn-save ass1-btn-icon"
      >
        <span>{{renderMaxLength}}</span>
        <i class="icon-Submit_Tick"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { NOTI_POST_CMT, NOTI_UNPOST_CMT } from '../constants'
export default {
  name: "post-comment-add",
  data() {
    return {
      comment: "",
      maxLength: 180,
      postid: this.$route.params.id
    };
  },
  computed: {
    renderMaxLength() {
      return this.maxLength - this.comment.length;
    }
  },
  watch: {
    $route(to) {
      this.postid = to.params.id;
    }
  },
  methods: {
    ...mapActions(["addNewComment"]),
    handleAddComment() {
      if (this.comment.length && this.comment.length <= this.maxLength) {
        let data = {
          comment: this.comment,
          postid: this.postid
        };

        this.addNewComment(data).then(res => {
          if (res.ok) {
            this.$notify(NOTI_POST_CMT);
            this.comment = "";
          } else {
            this.$notify(NOTI_UNPOST_CMT);
          }
        });
      } else {
        this.$notify(NOTI_UNPOST_CMT);
      }
    }
  }
};
</script>

<style>
</style>