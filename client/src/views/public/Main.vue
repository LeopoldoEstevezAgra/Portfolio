<template>
  <div>
    <page-header />
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
import PageHeader from "../Header.vue";
export default {
  name: "main",
  components: {
    PageHeader
  }
};
</script>

<style scoped></style>
