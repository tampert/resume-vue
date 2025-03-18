<script setup>
import AllUsersList from "@/components/users/AllUsersList.vue";
import { useUserStore } from "@/stores/src/userStore";
const userStore = useUserStore();
</script>

<template>
  <v-container>
    <v-row>
      <h1>Dashboard</h1>
      <p v-if="userStore.isAuthenticated">
        Welcome, {{ userStore.user.name }} ({{ userStore.userInitials }})
      </p>
      <v-btn @click="userStore.logout">Logout</v-btn>
    </v-row>
    <v-row>
      <AllUsersList />
    </v-row>
  </v-container>
</template>
