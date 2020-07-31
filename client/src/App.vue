<template>
  <v-app id="app">
    <v-container fluid class="main-container">
      <router-view />
    </v-container>
  </v-app>
</template>
<script>
export default {
  name: "App",
  components: {}
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
  padding: 0 !important;
}
</style>
