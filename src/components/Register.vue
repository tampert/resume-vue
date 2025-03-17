<script setup>
import { ref } from "vue";
import { useUserStore } from "../stores/src/userStore";

const userStore = useUserStore();
const name = ref("");
const email = ref("");
const password = ref("");

const handleRegister = async () => {
  await userStore.register(name.value, email.value, password.value);
};
</script>

<template>
  <div>
    <h1>Register</h1>
  </div>
  <div>
    <input v-model="name" placeholder="Name" />
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button
      @click="handleRegister"
      :disabled="userStore.isLoading || !name || !email || !password"
    >
      register
    </button>
    <button
      @click="userStore.isRegister = false"
      :disabled="userStore.isLoading"
      v-if="userStore.isRegister"
    >
      cancel
    </button>
  </div>
</template>
