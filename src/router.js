import { createRouter, createWebHistory } from "vue-router";

import HomePage from "../src/components/pages/HomePage.vue";
import BioPage from "./components/pages/BioPage.vue";
import ContactPage from "./components/pages/ContactPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: "/bio",
      component: BioPage,
    },
    {
      path: "/contact",
      component: ContactPage,
    },
  ],
});

export default router;
