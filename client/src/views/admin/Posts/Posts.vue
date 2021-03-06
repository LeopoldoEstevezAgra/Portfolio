<template>
  <div>
    <div class="title">
      <h2>Posts</h2>
    </div>
    <v-app>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="posts"
          item-key="_id"
          class="elevation-1 table-style"
          :items-per-page="10"
        >
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.title }}</td>
                <td>
                  <v-checkbox v-model="item.published" disabled></v-checkbox>
                </td>
                <td>
                  {{ item.postedAt }}
                </td>
                <td>
                  <v-dialog max-width="400px">
                    <template v-slot:activator="{ on, attr }">
                      <v-btn
                        icon
                        text
                        x-small
                        v-on="on"
                        v-bind="attr"
                        @click="loadEdit(item)"
                      >
                        <v-icon>
                          mdi-pencil
                        </v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-card-title>
                        Edit
                      </v-card-title>
                      <v-card-text>
                        <v-form>
                          <v-text-field
                            label="Title"
                            v-model="editedItem.title"
                          >
                          </v-text-field>
                          <v-text-field
                            label="Author"
                            v-model="editedItem.author"
                          >
                          </v-text-field>
                          <v-textarea
                            label="Introduction"
                            v-model="editedItem.introduction"
                          >
                          </v-textarea>
                          <vue-editor label="Content" v-model="editedItem.body">
                          </vue-editor>
                          <v-checkbox
                            label="Published"
                            v-model="editedItem.published"
                          >
                          </v-checkbox>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="editPost(editedItem)"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn text icon x-small @click="deletePost(item)">
                    <v-icon>
                      mdi-delete
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
        <v-dialog max-width="400px">
          <template v-slot:activator="{ on, attr }">
            <v-btn
              color="primary"
              class="my-2 float-right mr-5 mt-5"
              fab
              dark
              v-on="on"
              v-bind="attr"
            >
              <v-icon>
                mdi-plus
              </v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              New Post
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Title" v-model="newItem.title">
                </v-text-field>
                <v-text-field label="Author" v-model="newItem.author">
                </v-text-field>
                <v-textarea label="Introduction" v-model="newItem.introduction">
                </v-textarea>
                <vue-editor label="Content" v-model="newItem.body">
                </vue-editor>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="addPost(newItem)">
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import PostService from "../../../services/PostService.js";
import { VueEditor } from "vue2-editor";

export default {
  name: "Posts",
  components: {
    VueEditor
  },
  data() {
    return {
      error: "",
      posts: [],
      editedIndex: -1,
      editedItem: {
        title: "",
        author: "",
        introduction: "",
        body: "",
        published: ""
      },
      newItem: {
        title: "",
        author: "",
        introduction: "",
        body: "",
        password: ""
      },
      headers: [
        {
          text: "Title",
          align: "center",
          value: "title"
        },
        {
          text: "Published",
          align: "left",
          value: "published"
        },
        {
          text: "Release date",
          align: "center",
          value: "postedAt"
        },
        {
          text: "",
          align: "center",
          sortable: false
        }
      ]
    };
  },
  async created() {
    try {
      var isAuthorized = false;
      if (this.$store.state.isAdmin && this.$store.state.isUserLoggedIn) {
        isAuthorized = true;
      }

      const posts = await PostService.getPosts({
        isAuthorized: isAuthorized
      });
      this.posts = posts.data.posts;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    isAuthorizedUser() {
      if (this.$store.state.isAdmin && this.$store.state.isUserLoggedIn) {
        return true;
      } else {
        return false;
      }
    },
    async loadPosts() {
      const posts = await PostService.getPosts({
        isAuthorized: true
      });
      this.posts = posts.data.posts;
    },
    async deletePost(post) {
      if (this.isAuthorizedUser()) {
        await PostService.deleteItem({
          id: post._id
        });
        this.loadPosts();
      }
    },
    loadEdit(post) {
      this.editedItem.id = post._id;
      this.editedItem.title = post.title;
      this.editedItem.author = post.author;
      this.editedItem.introduction = post.introduction;
      this.editedItem.body = post.body;
      this.editedItem.published = post.published;
    },
    async editPost(post) {
      if (this.isAuthorizedUser()) {
        await PostService.updateItem({
          id: post.id,
          author: post.author,
          introduction: post.introduction,
          title: post.title,
          body: post.body,
          published: post.published
        });
        this.loadPosts();
      }
    },
    resetNewPost() {
      this.newItem.title = "";
      this.newItem.author = "";
      this.newItem.body = "";
      this.newItem.introduction = "";
    },
    async addPost(post) {
      if (this.isAuthorizedUser()) {
        await PostService.addPost({
          title: post.title,
          author: post.author,
          introduction: post.introduction,
          body: post.body
        });
        this.loadPosts();
      }
      this.resetNewPost();
    }
  }
};
</script>

<style scoped>
.title {
  padding: 2em 2em 3em 2em;
}
th {
  font-weight: 7;
}
.table-style {
  background-color: #fdfdfd !important;
}
</style>
