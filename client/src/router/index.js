import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/public/Home.vue";
import Blog from "../views/public/Blog.vue";
import Work from "../views/public/Work.vue";
import Main from "../views/public/Main.vue";
import Login from "../views/admin/Login.vue";
import MainAdmin from "../views/admin/MainAdmin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
    children: [
      {
        path: "",
        name: "home",
        component: Home
      },
      {
        path: "work",
        name: "work",
        component: Work
      },
      {
        path: "blog",
        name: "blog",
        component: Blog
      }
    ]
  },
  {
    path: "/admin",
    name: "admin",
    component: MainAdmin,
    children: [
      {
        path: "login",
        name: "login",
        component: Login
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
