import axios from "axios";

const Api = axios.create({
  baseURL: "/api/contact/"
});
export default {
  getContacts(isAuthorized) {
    return Api.post("", isAuthorized);
  },
  addContact(contact) {
    return Api.post("contact", contact);
  }
};
