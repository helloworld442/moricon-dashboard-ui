import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/dashboard",
    component: () => import("../pages/DashBoard/MainPage"),
    children: [
      {
        path: "list",
        component: () => import("../pages/DashBoard/ListPage"),
        children: [
          {
            path: ":listId",
            component: () => import("../pages/DashBoard/DetailPage"),
          },
        ],
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
