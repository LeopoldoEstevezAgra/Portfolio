<template>
  <div>
    <div class="title">
      <h2>Contacts</h2>
    </div>
    <v-app>
      <v-container>
        <v-data-table
          :headers="headers"
          :items="contacts"
          item-key="_id"
          class="elevation-1 table-style"
          :items-per-page="10"
        >
          <template v-slot:body="{ items }">
            <tbody>
              <tr v-for="item in items" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
                <td>{{ item.company }}</td>
                <td>{{ item.note }}</td>
                <td>{{ item.postedAt }}</td>
              </tr>
            </tbody>
          </template>
        </v-data-table>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import ContactService from "../../../services/ContactService.js";

export default {
  name: "Contacts",
  components: {},
  data() {
    return {
      error: "",
      contacts: [],
      headers: [
        {
          text: "Name",
          align: "center",
          value: "name"
        },
        {
          text: "Email",
          align: "left",
          value: "email"
        },
        {
          text: "Company",
          align: "left",
          value: "company"
        },
        {
          text: "Note",
          align: "left",
          value: "note"
        },
        {
          text: "Date",
          align: "center",
          value: "postedAt"
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

      const contacts = await ContactService.getContacts({
        isAuthorized: isAuthorized
      });
      this.contacts = contacts.data.contacts;
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
