import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { name: "Home", component: Home, path: "/" },
  { name: "About", path: "/about" },
  { name: "Character", path: "/character/:id" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
