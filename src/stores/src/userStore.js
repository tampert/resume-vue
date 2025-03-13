// src/stores/userStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useUserStore = defineStore('userStore', () => {
  // 🟢 STATE (Reactive Global Variables)
  const user = ref(null);
  const token = ref('');
  const isLoading = ref(false);

  // 🟠 GETTERS (Computed Properties)
  const isAuthenticated = computed(() => !!token.value);
  const userInitials = computed(() => {
    if (!user.value) return '';
    return user.value.name.split(' ').map(n => n[0]).join('');
  });

  // 🔵 ACTIONS (Functions that Modify State)
  const login = async (username, password) => {
    isLoading.value = true;
    try {
      // Fake API call simulation (Replace with real API request)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      user.value = { name: 'John Doe', email: 'john@example.com' };
      token.value = 'fake-token-12345';
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      isLoading.value = false;
    }
  };

  const logout = () => {
    user.value = null;
    token.value = '';
    localStorage.clear(); // Clears all saved data
  };

  return {
    user,
    token,
    isLoading,
    isAuthenticated,
    userInitials,
    login,
    logout,
  };
}, {
  persist: {
    storage: localStorage, // Automatically saves state in localStorage
  },
});
