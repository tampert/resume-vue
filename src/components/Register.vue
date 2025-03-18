<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/src/userStore";

const userStore = useUserStore();
const name = ref("");
const email = ref("");
const password = ref("");

const handleRegister = async () => {
  await userStore.register(name.value, email.value, password.value);
};
</script>

<template>
  <v-container>
    <v-row>
      <v-responsive class="mx-auto" max-width="344">
        <h1>Register</h1>

        <v-text-field v-model="name" placeholder="Name" />
        <v-text-field v-model="email" placeholder="Email" />
        <v-text-field
          v-model="password"
          type="password"
          placeholder="Password"
        />
        <v-btn
          @click="handleRegister"
          :disabled="userStore.isLoading || !name || !email || !password"
        >
          register
        </v-btn>
        <v-btn
          @click="userStore.isRegister = false"
          :disabled="userStore.isLoading"
          v-if="userStore.isRegister"
          class="ml-2"
        >
          cancel
        </v-btn>
      </v-responsive>
    </v-row>
  </v-container>
</template>
