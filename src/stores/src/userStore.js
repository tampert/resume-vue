// src/stores/userStore.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useUserStore = defineStore(
  "userStore",
  () => {
    // 🟢 STATE (Reactive Global Variables)
    const users = ref([]);
    const user = ref(null);
    const token = ref("");
    const isLoading = ref(false);
    const isRegister = ref(false);

    // 🟠 GETTERS (Computed Properties)
    const isAuthenticated = computed(() => !!token.value);
    const userInitials = computed(() => {
      if (!user.value) return "";
      return user.value.name
        .split(" ")
        .map((n) => n[0])
        .join("");
    });

    // 🔵 ACTIONS (Functions that Modify State)
    const login = async (email, password) => {
      isLoading.value = true;
      // try {
      //   // Fake API call simulation (Replace with real API request)
      //   await new Promise((resolve) => setTimeout(resolve, 1000));
      //   user.value = { name: 'John Doe', email: 'john@example.com' };
      //   token.value = 'fake-token-12345';
      // } catch (error) {
      //   console.error("Login failed:", error);
      // } finally {
      //   isLoading.value = false;
      // }

      try {
        const response = await axios.post("http://localhost:5001/login", {
          email,
          password,
        });

        if (response.data.token) {
          token.value = response.data.token;
          user.value = response.data.user;
          isAuthenticated.value = true;
          localStorage.setItem("token", token.value);
        }
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || "Login failed");
      } finally {
        isLoading.value = false; // Stop loading
      }
    };

    const logout = () => {
      user.value = null;
      token.value = "";
      localStorage.clear(); // Clears all saved data
    };

    const register = async (name, email, password) => {
      isLoading.value = true;
      try {
        const response = await axios.post("http://localhost:5001/register", {
          name,
          email,
          password,
        });

        console.log("Registration successful:", response.data);
      } catch (error) {
        console.error(
          "Register failed:",
          error.response?.data?.error || error.message
        );
        throw new Error(error.response?.data?.error || "Login failed");
      } finally {
        isLoading.value = false; // Stop loading
        isRegister.value = false;
      }
    };

    const allUsers = async () => {
      isLoading.value = true;
      try {
        const response = await axios.get("http://localhost:5001/all");

        if (response.data.users) {
          users.value = [...response.data.users];
        }
      } catch (error) {
        console.error("Login failed:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || "Login failed");
      } finally {
        isLoading.value = false; // Stop loading
      }
    };

    return {
      user,
      token,
      isLoading,
      isAuthenticated,
      isRegister,
      userInitials,
      users,
      login,
      logout,
      allUsers,
      register,
    };
  },
  {
    persist: {
      storage: localStorage, // Automatically saves state in localStorage
    },
  }
);
