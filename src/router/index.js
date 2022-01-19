import Vue from "vue";
import VueRouter from "vue-router";
import Main from "@/components/Main";
import CharacterPage from "@/pages/CharacterPage";

Vue.use(VueRouter);

const routes = [
  { name: "Home", component: Main, path: "/" },
  { name: "About", path: "/about" },
  { name: "Character", component: CharacterPage, path: "/character/:id" },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
