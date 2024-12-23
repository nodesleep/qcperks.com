import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ThankYou from "../views/ThankYou.vue";
import Businesses from "../views/Businesses.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/thankyou", component: ThankYou },
  { path: "/business", component: Businesses },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
