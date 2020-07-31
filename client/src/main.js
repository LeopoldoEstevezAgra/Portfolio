import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { sync } from "vuex-router-sync";
import store from "./store/store";
import VueFilterDateParse from "vue-filter-date-parse";

Vue.config.productionTip = false;

sync(store, router);

new Vue({
  router,
  store,
  vuetify,
  VueFilterDateParse,
  render: h => h(App)
}).$mount("#app");
