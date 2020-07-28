import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/posts/"
});

export default {
  getPosts(isAuthorized) {
    return Api.post("", isAuthorized);
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
