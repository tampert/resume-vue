<script setup>
import { useUserStore } from "../../stores/src/userStore";
const userStore = useUserStore();

const handleAllUsers = async () => {
  await userStore.allUsers();
};
</script>

<template>
  <div>
    <button @click="handleAllUsers" :disabled="userStore.isLoading">
      {{ userStore.isLoading ? "Logging in..." : "AllUsers" }}
    </button>
    <ul>
      <li v-for="user in userStore.users">
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
