import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ThankYou from "../views/ThankYou.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/thankyou", component: ThankYou },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
