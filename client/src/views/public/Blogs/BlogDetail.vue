<template>
  <div>
    <div class="post-header">
      <div class="post-title">
        {{ post.title }}
      </div>
      <div class="post-date">
        {{ date }}
      </div>
    </div>
    <div class="post-content" v-html="post.body"></div>
  </div>
</template>

<script>
import PostService from "../../../services/PostService.js";

export default {
  name: "Blog",
  data() {
    return {
      post: "",
      error: "",
      date: ""
    };
  },
  async created() {
    try {
      const postResponse = await PostService.getPostDetail({
        title: this.$route.params.title
      });
      this.post = postResponse.data.post;
      this.date = this.post.postedAt.slice(0, 10);
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>
<style scoped>
.post-header {
  margin-bottom: 3em;
}
.post-title {
  font-weight: 900;
  font-size: 2.5em;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
}
.post-date {
  font-weight: 900;
  font-size: 1.5em;
}
.post-content {
  width: 70%;
  font-weight: 100;
  margin-right: auto;
  margin-left: auto;
}

@media only screen and (max-width: 720px) {
  .post-title {
    width: 75%;
  }
  .post-content {
    width: 90%;
  }
}
@media only screen and (max-width: 450px) {
  .post-title {
    width: 90%;
  }
}
</style>
