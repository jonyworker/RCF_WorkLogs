<script setup>
import { ref } from "vue";

// sideMenuStore Router 設定
import { useRouter } from "vue-router";
const router = useRouter();
const navigateTo = (page) => {
  router.push({ name: page });
};

// sideMenuStore - 全域控制收合 rail 寬度
import { useSideMenuStore } from "@/stores/useSideMenuStore";
const sideMenuStore = useSideMenuStore();

// sideMenu 摺疊目錄資料
const sideMenuSettingData = [
  ["專案維護", "settingProject"],
  ["人員維護", "settingMember"],
];
</script>

<template>
  <v-navigation-drawer
    v-model="sideMenuStore.drawer"
    :rail="sideMenuStore.rail"
    permanent
    @click="sideMenuStore.rail = false"
  >
    <v-list-item
      prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
      title="吳忠霖"
    >
    </v-list-item>
    <v-divider></v-divider>

    <v-list>
      <v-list-item
        prepend-icon="mdi-chart-bell-curve"
        title="Dashboard(s)"
        value="dashboard"
        @click="navigateTo('dashboard')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-briefcase-outline"
        title="部門工時紀錄(s)"
        value="groupWorkLogs"
        @click="navigateTo('groupWorkLogs')"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-radiobox-marked"
        title="工時紀錄"
        value="personalWorkLogs"
        @click="navigateTo('personalWorkLogs')"
      ></v-list-item>

      <v-list-group value="Setting">
        <template v-slot:activator="{ props }">
          <v-list-item
            v-bind="props"
            title="系統維護"
            prepend-icon="mdi-cog-outline"
            @click="sideMenuStore.rail = false"
          ></v-list-item>
        </template>

        <v-list-item
          v-for="[title, pageName] in sideMenuSettingData"
          :key="pageName"
          :title="title"
          :value="pageName"
          @click="navigateTo(pageName)"
        ></v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="" scoped></style>
