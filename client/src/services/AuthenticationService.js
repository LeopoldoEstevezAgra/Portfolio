import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:5000/auth/"
});

export default {
  register(credentials) {
    return Api.post("register", credentials);
  },
  login(credentials) {
    return Api.post("login", credentials);
  }
};
