import { createRouter, createWebHashHistory } from "vue-router";

import HomePage from "../src/components/pages/HomePage.vue";
import BioPage from "./components/pages/BioPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
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
      component: BioPage,
    },
    {
      path: "/*",
      component: "",
    },
  ],
});

export default router;
