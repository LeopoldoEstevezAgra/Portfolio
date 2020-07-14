<template>
  <v-app id="app">
    <page-header />
    <v-container fluid class="main-container">
      <router-view />
    </v-container>
  </v-app>
</template>
<script>
import PageHeader from "./views/Header.vue";

export default {
  name: "App",
  components: {
    PageHeader
  }
};
</script>
<style>
html {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main-container {
  height: 100%;
}
</style>
