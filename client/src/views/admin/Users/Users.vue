<template>
  <div >
    <v-data-table
      :headers="headers"
      :items="users"
      :items-per-page="5"
      class="elevation-1"
      ></v-data-table>
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
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'username',
        },
        {
          text: "Role",
          align: "start",
          value: "role"
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

      this.users = await AuthService.getUsers({
        isAuthorized: isAuthorized
      });
      this.users = this.users.data.users
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style scoped></style>
