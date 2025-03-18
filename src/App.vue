<script setup>
import { computed } from "vue";
import Dashboard from "@/components/Dashboard.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";
import { useUserStore } from "@/stores/src/userStore";

const userStore = useUserStore();

const showLogin = computed(
  () => !userStore.isAuthenticated && !userStore.isRegister
);
const showRegister = computed(
  () => !userStore.isAuthenticated && userStore.isRegister
);
</script>

<template>
  <v-container>
    <v-row>
      <div class="wrapper">
        <Login v-if="showLogin" />
        <Register v-if="showRegister" />
      </div>
    </v-row>

    <v-row>
      <Dashboard v-if="userStore.isAuthenticated" />
    </v-row>
  </v-container>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
