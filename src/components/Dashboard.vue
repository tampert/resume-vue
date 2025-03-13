<script setup>
import { useUserStore } from '../stores/src/userStore';
const userStore = useUserStore();
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p v-if="userStore.isAuthenticated">Welcome, {{ userStore.user.name }} ({{ userStore.userInitials }})</p>
    <button @click="userStore.logout">Logout</button>
  </div>
</template>
