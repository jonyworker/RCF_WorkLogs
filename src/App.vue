<script setup>
import SideMenu from "./components/SideMenu.vue";

// sideMenuStore - 全域控制收合 rail 寬度
import { useSideMenuStore } from "@/stores/useSideMenuStore";
const sideMenuStore = useSideMenuStore();
</script>

<template>
  <v-app>
    <v-layout>
      <!-- SideMenu - 側邊攔 -->
      <SideMenu></SideMenu>

      <!-- Main - 主頁面 -->
      <v-main @click="sideMenuStore.rail = true">
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>
