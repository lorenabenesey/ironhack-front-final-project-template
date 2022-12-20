import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
  /*   path: "/",
    name: "Home",
    component: Home, */
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

// Change document titles
// Route guard for auth routes

export default router;
