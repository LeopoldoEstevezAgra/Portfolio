import axios from "axios";

const Api = axios.create({
  baseURL: "posts/"
});

export default {
  getPosts(isAuthorized) {
    return Api.post("", isAuthorized);
  },
  getPostDetail(title) {
    return Api.post("/detail", title);
  },
  getLastPosts() {
    return Api.get("");
  },
  addPost(post) {
    return Api.post("post", post);
  },
  deleteItem(id) {
    return Api.delete("", { data: id });
  },
  updateItem(post) {
    return Api.put("", post);
  }
};
