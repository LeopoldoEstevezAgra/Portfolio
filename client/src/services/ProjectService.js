import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/projects/"
});

export default {
  getProjects(isAuthorized) {
    return Api.post("", isAuthorized);
  },
  getProjectDetail(title) {
    return Api.post("/detail", title);
  },
  getFeaturedProjects() {
    return Api.get("");
  },
  addProject(project) {
    return Api.post("project", project);
  },
  deleteItem(id) {
    return Api.delete("", { data: id });
  },
  updateItem(project) {
    return Api.put("", project);
  }
};
