<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/src/userStore";

const userStore = useUserStore();
const name = ref("");
const email = ref("");
const password = ref("");

const handleLogin = async () => {
  await userStore.login(email.value, password.value);
};
</script>

<template>
  <div>
    <h1>"Login"</h1>
  </div>
  <div>
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button
      @click="handleLogin"
      :disabled="userStore.isLoading || !email || !password"
    >
      {{ userStore.isLoading ? "Logging in..." : "Login" }}
    </button>
  </div>
  <button @click="userStore.isRegister = true" :disabled="userStore.isLoading">
    register
  </button>
</template>
