/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import basic from "./routere";
import exception from "./exception";

const routes = [...basic, ...exception];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// router.beforeEach((to, from, next) => {
//   const isLoggedIn = !!localStorage.getItem("jwtToken"); // 检查是否存在 JWT

//   if (to.matched.some((record) => record.meta.requiresAuth) && !isLoggedIn) {
//     next({ name: "home" });
//   } else {
//     next();
//   }
// });
export default router;
