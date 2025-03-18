<script setup>
import { reactive } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { email, required } from "@vuelidate/validators";

import { useUserStore } from "@/stores/src/userStore";

const userStore = useUserStore();

const initialState = {
  password: "",
  email: "",
};
const state = reactive({
  ...initialState,
});
const rules = {
  password: { required },
  email: { required, email },
};

const v$ = useVuelidate(rules, state);

const clear = () => {
  v$.value.$reset();

  for (const [key, value] of Object.entries(initialState)) {
    state[key] = value;
  }
};

const handleLogin = async () => {
  try {
    await userStore.login(state.email, state.password);
  } catch (err) {
    console.log(err);
  }
};
</script>

<template>
  <v-container>
    <v-row>
      <v-responsive class="mx-auto" max-width="344">
        <h1>Login</h1>
        <v-text-field
          v-model="state.email"
          :error-messages="
            v$.email.$errors.map((e) =>
              typeof e.$message === 'string' ? e.$message : e.$message.value
            )
          "
          required
          placeholder="Email"
          label="Email"
          @blur="v$.email.$touch"
          @input="v$.email.$touch"
        />
        <v-text-field
          v-model="state.password"
          :error-messages="
            v$.password.$errors.map((e) =>
              typeof e.$message === 'string' ? e.$message : e.$message.value
            )
          "
          required
          type="password"
          placeholder="Password"
          label="Password"
          @blur="v$.password.$touch"
          @input="v$.password.$touch"
        />
        <v-btn
          @click="handleLogin"
          :disabled="userStore.isLoading || !state.email || !state.password"
        >
          {{ userStore.isLoading ? "Logging in..." : "Login" }}
        </v-btn>
        <v-btn class="ml-2" @click="clear"> clear </v-btn>
        <v-btn
          :disabled="userStore.isLoading"
          class="ml-2"
          @click="userStore.isRegister = true"
        >
          register
        </v-btn>
      </v-responsive>
    </v-row>
  </v-container>
</template>
