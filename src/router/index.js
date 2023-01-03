import { createRouter, createWebHistory } from "vue-router";
import Auth from "../pages/Auth.vue";
import Register from "../pages/Register.vue";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

// Change document titles
// Route guard for auth routes

export default router;
