import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../pages/HomePage"),
  },
  {
    path: "/repository",
    component: () => import("../pages/RepositoryPage"),
  },
  {
    path: "/issue",
    component: () => import("../pages/IssuePage"),

    children: [
      {
        path: ":issueId",
        component: () => import("../pages/DetailPage"),
      },
    ],
  },
];

export default createRouter({
  history: createWebHistory(),

  routes,

  scrollBehavior() {
    return { top: 0 };
  },
});
