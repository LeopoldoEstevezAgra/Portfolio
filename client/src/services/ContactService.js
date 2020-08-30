import axios from "axios";

const Api = axios.create({
  baseURL: "/api/contact/"
});
export default {
  addContact(contact) {
    return Api.post("", contact);
  }
};
