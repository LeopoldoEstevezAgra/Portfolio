import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/public/Home.vue";
import Blog from "../views/public/Blogs/BlogsMain.vue";
import Work from "../views/public/Work.vue";
import Main from "../views/public/Main.vue";

import MainAdmin from "../views/admin/MainAdmin.vue";
import Login from "../views/admin/Auth/Login.vue";
import Register from "../views/admin/Users/Register.vue";
import Users from "../views/admin/Users/Users.vue";
import Posts from "../views/admin/Posts/Posts.vue";
import store from "../store/store";

Vue.use(VueRouter);

function guard(to, from, next) {
  if (store.state.isAdmin && store.state.isUserLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
}

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
    path: "*",
    redirect: "/"
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
      },
      {
        path: "register",
        name: "register",
        component: Register,
        beforeEnter: guard
      },
      {
        path: "users",
        name: "users",
        component: Users,
        beforeEnter: guard
      },
      {
        path: "posts",
        name: "posts",
        component: Posts,
        beforeEnter: guard
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
