<template>
  <div>
    <div class="title">
      <h2>Users</h2>
    </div>
    <v-app>
      <v-container>,
        value: "username"
        <v-data-table
          :headers="headers"
          :items="users"
          item-key="id"
          class="elevation-1"
          :items-per-page="10"
          >

          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.username }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.role }}</td>
                <td>
                  <v-btn text icon x-small @click="editUser(item)">
                    <v-icon>
                      mdi-pencil
                    </v-icon>
                  </v-btn>
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
    editUser(user) {
      console.log(user.email);
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
</style>
