import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";

const routes = [
  {
    path: "/pages/Home.vue",
    name: "Home",
    component: Home,
  },
  {
    path: "/pages/Login.vue",
    name: "Login",
    component: Login,
  },
  {
    path: "/pages/Register.vue",
    name: "Register",
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

// Change document titles
// Route guard for auth routes

export default router;
