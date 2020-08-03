<template>
  <div>
    <div class="title">
      <h2>Posts</h2>
    </div>
    <v-app>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="projects"
          item-key="_id"
          class="elevation-1 table-style"
          :items-per-page="10"
        >
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.title }}</td>
                <td>
                  <v-checkbox v-model="item.featured" disabled></v-checkbox>
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
                          <v-text-field
                            label="Repository"
                            v-model="editedItem.repository"
                          >
                          </v-text-field>
                          <v-text-field label="Link" v-model="editedItem.link">
                          </v-text-field>
                          <v-checkbox
                            label="Published"
                            v-model="editedItem.featured"
                          >
                          </v-checkbox>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          color="blue darken-1"
                          text
                          @click="editProject(editedItem)"
                        >
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn text icon x-small @click="deleteProject(item)">
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
              New Project
            </v-card-title>
            <v-card-text>
              <v-form>
                <v-text-field label="Title" v-model="newItem.title">
                </v-text-field>
                <v-text-field label="Author" v-model="newItem.author">
                </v-text-field>
                <v-textarea label="Introduction" v-model="newItem.introduction">
                </v-textarea>
                <v-text-field label="Link" v-model="newItem.link">
                </v-text-field>
                <v-text-field label="Repository" v-model="newItem.repository">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="addProject(newItem)">
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
import ProjectService from "../../../services/ProjectService.js";

export default {
  name: "Posts",
  data() {
    return {
      error: "",
      projects: [],
      editedIndex: -1,
      editedItem: {
        title: "",
        author: "",
        introduction: "",
        repository: "",
        link: "",
        featured: ""
      },
      newItem: {
        title: "",
        author: "",
        introduction: "",
        link: "",
        repository: ""
      },
      headers: [
        {
          text: "Title",
          align: "center",
          value: "title"
        },
        {
          text: "Featured",
          align: "left",
          value: "featured"
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

      const projects = await ProjectService.getProjects({
        isAuthorized: isAuthorized
      });
      this.projects = projects.data.projects;
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
    async loadProjects() {
      const projects = await ProjectService.getProjects({
        isAuthorized: true
      });
      this.projects = projects.data.projects;
    },
    async deleteProject(project) {
      if (this.isAuthorizedUser()) {
        await ProjectService.deleteItem({
          id: project._id
        });
        this.loadProjects();
      }
    },
    loadEdit(project) {
      this.editedItem.id = project._id;
      this.editedItem.title = project.title;
      this.editedItem.author = project.author;
      this.editedItem.introduction = project.introduction;
      this.editedItem.link = project.link;
      this.editedItem.repository = project.repository;
      this.editedItem.featured = project.featured;
    },
    async editProject(project) {
      if (this.isAuthorizedUser()) {
        await ProjectService.updateItem({
          id: project.id,
          author: project.author,
          introduction: project.introduction,
          title: project.title,
          link: project.link,
          repository: project.repository,
          featured: project.featured
        });
        this.loadProjects();
      }
    },
    resetNewProject() {
      this.newItem.title = "";
      this.newItem.author = "";
      this.newItem.body = "";
      this.newItem.introduction = "";
    },
    async addProject(project) {
      if (this.isAuthorizedUser()) {
        await ProjectService.addProject({
          title: project.title,
          author: project.author,
          introduction: project.introduction,
          link: project.link,
          repository: project.repository
        });
        this.loadProjects();
      }
      this.resetNewProject();
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
