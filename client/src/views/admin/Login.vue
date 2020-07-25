<template>
   <v-app>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title
                  v-if="!$store.state.isUserLoggedIn"
                  >Login
                </v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mdi-account"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">
                  <v-icon>mdi-account-arrow-right</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
import AuthService from "../../services/AuthenticationService";
export default {
  name: "Login",
  data() {
    return {
      username: "test",
      email: "",
      password: ""
    }
  },
  methods: {
    async login() {
      const response = await AuthService.login({
        username: this.username,
        password: this.password,
        email: this.email
      });
      this.$store.dispatch("setToken", response.data.token)
      this.$store.dispatch("setUser", response.data.user)
    }
  }
};
</script>

<style scoped>

</style>
