import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";

const routes = [
  {
    path: "/",
    name: "inicio",
    component: InicioView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
