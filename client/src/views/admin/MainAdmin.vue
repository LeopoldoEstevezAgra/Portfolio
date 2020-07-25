<template>
  <div>
    <div class="main">
      <div class="sidebar">
        <sidebar />
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";

export default {
  name: "AdminMain",
  components: {
    Sidebar
  }
};
</script>

<style scoped>
.main {
  height: 100% !important;
  width: 100% !important;
}
.sidebar {
  float: left;
  z-index: 9;
  position: absolute;
}
.content {
}
</style>
