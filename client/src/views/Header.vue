<template>
  <div class="">
    <v-toolbar flat class="main-navbar " height="125px">
      <router-link to="/" class="router-link">
        <v-toolbar-title>
          <v-btn height="100" width="250" elevation="0" class="">
            <span class="button">
              Leopoldo Estévez
            </span>
          </v-btn>
        </v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>

      <router-link to="/about" class="router-link d-none d-md-flex">
        <v-btn height="100" width="100" elevation="0">
          <span class="button">
            About
          </span>
        </v-btn>
      </router-link>

      <router-link to="/work" class="router-link d-none d-md-flex">
        <v-btn height="100" width="100" elevation="0" class="value">
          <span class="button">
            Work
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
        { text: "About", route: "/about" },
        { text: "Work", route: "/work" }
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
  background-color: #f5f5f5 !important;
}
.button {
  font-size: 20px;
}
</style>
