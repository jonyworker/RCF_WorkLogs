// Utilities
import { defineStore } from "pinia";

export const useSideMenuStore = defineStore("sideMenu", {
  state: () => ({
    // 控制側邊攔收合
    drawer: ref(true),

    // 控制側邊攔收合時寬度
    rail: ref(true),
  }),
});
