<script setup>
import { ref } from 'vue';
import { useUserStore } from '../stores/src/userStore';


const userStore = useUserStore();
const username = ref('');
const password = ref('');
let register = ref(false);

const handleLogin = async () => {
  await userStore.login(username.value, password.value);
};

const handleOpenRegister = () => {
  register.value = !register.value
}

const handleCancekRegister = () => {
  register.value = false
}
const handleRegister = () => {
  register.value = false
}

</script>

<template>
  <div>
    <h1> {{ register ? 'Register' : 'Login' }}</h1>
  </div>
  <div v-if="!register">
    <input v-model="username" placeholder="Username" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="handleLogin" :disabled="userStore.isLoading || register">
      {{ userStore.isLoading ? 'Logging in...' : 'Login' }}
    </button>
  </div>
  <div>

    <button @click="handleOpenRegister" :disabled="userStore.isLoading" v-if="!register">
      register
    </button>
    <button @click="handleRegister" :disabled="userStore.isLoading" v-if="register">
      register 2
    </button>
    <button @click="handleCancekRegister" :disabled="userStore.isLoading" v-if="register">
      cancel
    </button>
  </div>
</template>
