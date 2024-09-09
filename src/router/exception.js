export default [
  {
    path: "/exception",
    component: () => import("../layouts/default.vue"),
    children: [
      {
        path: "404",
        name: "PageNotFound",
        component: () => import("../pages/Exception/Exception.vue"),
      },
    ],
  },
  {
    // 表示捕捉所有不匹配的路由（包括嵌套路徑）。
    path: "/:pathMatch(.*)",
    redirect: "/exception/404",
  },
];
