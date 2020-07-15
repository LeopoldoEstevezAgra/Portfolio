<template>
  <div>
    <h3>Work</h3>
    <div class="post-container">
      <div
        class="post"
        v-for="(post, index) in posts"
        v-bind:item="post"
        v-bind:index="index"
        v-bind:key="post._id"
        v-on:dblclick="deletePost(post._id)"
      >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}` }}
        <p class="text">{{ post.text }}</p>
      </div>
    </div>

    <div class="create-post">
      <label for="create-post">Add text</label>
      <input type="text" id="create-post" v-model="text" placeholder="Create" />
      <button v-on:click="createPost">Post</button>
    </div>
  </div>
</template>

<script>
import PostService from "../services/PostService";

export default {
  name: "WorkComponent",
  data() {
    return {
      posts: [],
      error: "",
      text: ""
    };
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await PostService.getPosts();
    }
  }
};
</script>

<style scoped></style>
