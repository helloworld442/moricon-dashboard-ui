import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    component: () => import("../pages/DashboardPage"),
  },
];

export default createRouter({
  history: createWebHistory(),

  routes,

  scrollBehavior() {
    return { top: 0 };
  },
});
