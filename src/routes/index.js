import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/posts/:categoryId?",
    component: () => import("../layout/PostsLayout"),
    children: [
      {
        path: "all",
        component: () => import("../pages/AllPosts"),
      },
      {
        path: "best",
        component: () => import("../pages/BestPosts"),
      },
      {
        path: "question",
        component: () => import("../pages/QuestionPosts"),
      },
    ],
  },

  {
    path: "/post",
    component: () => import("../layout/PostLayout"),
    children: [
      {
        path: ":postId",
        component: () => import("../pages/Post"),
      },
    ],
  },

  {
    path: "/write",
    component: () => import("../pages/Write"),
  },

  {
    path: "/category",
    component: () => import("../pages/Category"),
  },

  // {
  //   path: "/:pathMatch(.*)*",
  //   component: () => import("../components/Error/PostsError"),
  // },
];

export default createRouter({
  history: createWebHistory(),

  routes,

  scrollBehavior() {
    return { top: 0 };
  },
});
