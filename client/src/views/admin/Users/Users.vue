<template>
  <div>
    <div class="title">
      <h2>Users</h2>
    </div>
    <v-app>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="users"
          item-key="id"
          class="elevation-1 table-style"
          :items-per-page="10"
          >

          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.role }}</td>
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
                          <v-text-field label="Name" v-model="editedItem.username">
                          </v-text-field>
                          <v-text-field label="Email" v-model="editedItem.email">
                          </v-text-field>
                          <v-text-field label="Role" v-model="editedItem.role">
                          </v-text-field>
                        </v-form>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="editUser(editedItem)">
                          Save
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                  <v-btn text icon x-small @click="deleteUser(item)">
                    <v-icon>
                      mdi-delete
                    </v-icon>
                  </v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
        <router-link to="/admin/register">
          <div class="my-2 float-right mr-5 mt-5">
            <v-btn color="primary" fab dark>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
          </div>
        </router-link>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import AuthService from "../../../services/AuthenticationService.js";
export default {
  name: "Users",
  data() {
    return {
      error: "",
      users: [],
      editedIndex: -1,
      editedItem: {
        id: "",
        username: "",
        email: "",
        role: "",
      },
      headers: [
        {
          text: "Username",
          align: "center",
          value: "username"
        },
        {
          text: "Email",
          align: "center",
          value: "email"

        },
        {
          text: "Role",
          align: "center",
          value: "role"
        },
        {
          text: "",
          align: "center",
          sortable: false
        }
      ],
    };
  },
  async created() {
    try {
      var isAuthorized = false;
      if (this.$store.state.isAdmin && this.$store.state.isUserLoggedIn) {
        isAuthorized = true;
      }

      this.users = await AuthService.getUsers({
        isAuthorized: isAuthorized
      });
      this.users = this.users.data.users;
    } catch (err) {
      this.error = err.message;
    }
  },
  methods: {
    async deleteUser(user) {
      var isAuthorized = false;

      if (this.$store.state.isAdmin && this.$store.state.isUserLoggedIn) {
        isAuthorized = true;
        await AuthService.deleteItem({
          id: user._id,
        });

        this.users = await AuthService.getUsers({
          isAuthorized: isAuthorized
        });
        this.users = this.users.data.users;
      }

    },
    loadEdit(user) {
        this.editedItem.id = user._id;
        this.editedItem.username = user.username;
        this.editedItem.email = user.email;
        this.editedItem.role = user.role;
    },
    async editUser(user) {
      if (this.$store.state.isAdmin && this.$store.state.isUserLoggedIn) {
        await AuthService.updateItem({
          id: user.id,
          username: user.username,
          email: user.email,
          role: user.role
        });

        this.users = await AuthService.getUsers({
          isAuthorized: true
        });
        this.users = this.users.data.users;
      }
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
