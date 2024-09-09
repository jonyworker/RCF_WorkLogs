export default [
  {
    path: "/",
    name: "app",
    component: () => import("../layouts/default.vue"),
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("../pages/Dashboard/DashboardContainer.vue"),
        meta: {
          breadcrumb: [
            { title: "Dashboard", disabled: true, href: "dashboard" },
          ],
        },
      },
      {
        path: "/groupWorkLogs",
        name: "groupWorkLogs",
        component: () =>
          import("../pages/GroupWorkLogs/GroupWorkLogsContainer.vue"),
        meta: {
          breadcrumb: [
            { title: "GroupWorkLogs", disabled: true, href: "groupWorkLogs" },
          ],
        },
      },
      {
        path: "/PersonalWorkLogs",
        name: "personalWorkLogs",
        component: () =>
          import("../pages/PersonalWorkLogs/PersonalWorkLogsContainer.vue"),
        meta: {
          breadcrumb: [
            {
              title: "PersonalWorkLogs",
              disabled: true,
              href: "personalWorkLogs",
            },
          ],
        },
      },
      {
        path: "/settingProject",
        name: "settingProject",
        component: () => import("../pages/SettingProject/SettingProject.vue"),
        meta: {
          breadcrumb: [
            {
              title: "SettingProject",
              disabled: true,
              href: "settingProject",
            },
          ],
        },
      },
      {
        path: "/settingMember",
        name: "settingMember",
        component: () => import("../pages/SettingMember/SettingMember.vue"),
        meta: {
          breadcrumb: [
            {
              title: "SettingMember",
              disabled: true,
              href: "settingMember",
            },
          ],
        },
      },
    ],
  },
];
