<template>
  <div class="">
    <v-toolbar flat class="main-navbar" height="150">
      <router-link to="/" class="router-link">
        <v-toolbar-title>
          <v-btn height="100" width="250" elevation="0" class="button">
            <span
              class="button-text"
              v-bind:class="{ 'button-text-main': $route.path == '/' }"
            >
              Leopoldo Estévez
            </span>
          </v-btn>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/admin/posts" class="router-link d-none d-md-flex">
        <v-btn height="100" width="100" elevation="0" class="value button">
          <span
            class="button-text"
            v-bind:class="{ 'button-text-main': $route.path == '/' }"
            v-if="$store.state.isUserLoggedIn && $store.state.isAdmin"
          >
            Admin
          </span>
        </v-btn>
      </router-link>

      <router-link router to="/work" class="router-link d-none d-md-flex">
        <v-btn height="100" width="100" elevation="0" class="value button">
          <span
            class="button-text"
            v-bind:class="{ 'button-text-main': $route.path == '/' }"
          >
            Work
          </span>
        </v-btn>
      </router-link>

      <router-link to="/blog" class="router-link d-none d-md-flex">
        <v-btn height="100" width="100" elevation="0" class="value button">
          <span
            class="button-text"
            v-bind:class="{ 'button-text-main': $route.path == '/' }"
          >
            Blog
          </span>
        </v-btn>
      </router-link>

      <div class="d-md-none">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, text) in items"
              :key="text"
              router
              :to="item.route"
            >
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      items: [
        { text: "Home", route: "/" },
        { text: "Work", route: "/work" },
        { text: "Blog", route: "/blog" }
      ]
    };
  }
};
</script>

<style scoped>
.router-link {
  text-decoration: none;
  margin-right: 15px;
}
.main-navbar {
  background-color: transparent !important;
}
.button {
  background-color: transparent !important;
}
.button-text {
  font-size: 20px;
  color: gray !important;
}
.button-text-main {
  font-size: 20px;
  color: white !important;
}
</style>
