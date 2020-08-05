import axios from "axios";

const Api = axios.create({
  baseURL: "auth/"
});

export default {
  getUsers(isAuthorized) {
    return Api.post("", isAuthorized);
  },
  register(credentials) {
    return Api.post("register", credentials);
  },
  login(credentials) {
    return Api.post("login", credentials);
  },
  deleteItem(id) {
    return Api.delete("", { data: id });
  },
  updateItem(user) {
    return Api.put("", user);
  }
};
