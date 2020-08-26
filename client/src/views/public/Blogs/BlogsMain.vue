<template>
  <div>
    <div class="blog-title">
      My little idea drawer
    </div>
    <div class="items" v-for="post in posts" :key="post._id">
      <div @click="goToPost(post.title)">
        <h2 class="inner-title" v-html="post.title"></h2>
        <div class="inner-introduction" v-html="post.introduction"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PostService from "../../../services/PostService.js";

export default {
  name: "Blog",
  data() {
    return {
      posts: [],
      error: ""
    };
  },
  async created() {
    try {
      const posts = await PostService.getLastPosts({});
      this.posts = posts.data.posts;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    goToPost(title) {
      this.$router.push("/blog/" + title);
    }
  }
};
</script>
<style scoped>
.blog-title {
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
}
.items {
  width: 50%;
  padding: 10px;
  border-bottom: solid gray;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
}
.inner-title {
  text-align: left;
}
.inner-introduction {
  text-align: left;
}
@media only screen and (max-width: 720px) {
  .items {
    width: 80%;
  }
  .blog-title {
    width: 80%;
  }
}
</style>
