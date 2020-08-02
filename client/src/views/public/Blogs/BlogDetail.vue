<template>
  <div>
    <div class="post-title">
      {{post.title}}
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
    };
  },
  async created() {
    try {
      console.log(this.$route.params.title)
      const postResponse = await PostService.getPostDetail({
        title: this.$route.params.title
      });
      this.post = postResponse.data.post;
    } catch (err) {
      this.error = err.message;;
    }
  }
};
</script>
<style scoped>
.post-title {
  font-weight: 900;
  font-size: 2.5em;
  margin-bottom: 2em;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
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
