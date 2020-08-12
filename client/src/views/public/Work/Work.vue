<template>
  <div class="full">
    <div class="projects-title">
      Featured Projects
    </div>
    <div class="items" v-for="project in projects" :key="project._id">
      <h2 class="inner-title" v-html="project.title"></h2>
      <div class="inner-introduction" v-html="project.introduction"></div>
    </div>
  </div>
</template>

<script>
import ProjectService from "../../../services/ProjectService.js";
export default {
  name: "WorkComponent",
  data() {
    return {
      error: "",
      text: "",
      projects: ""
    };
  },
  async created() {
    try {
      const projects = await ProjectService.getFeaturedProjects({});
      this.projects = projects.data.projects;
    } catch (err) {
      this.error = err.message;
    }
  }
};
</script>

<style scoped>
.projects-title {
  font-weight: 900;
  font-size: 2em;
  text-align: center;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
}
.items {
  width: 50%;
  padding: 10px;
  border-bottom: solid gray;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2em;
}
.inner-title {
  text-align: left;
}
.inner-introduction {
  text-align: left;
}
@media only screen and (max-width: 720px) {
  .projects-title {
    width: 80%;
  }
  .items {
    width: 80%;
  }
}
</style>
