<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import Dashboard from './components/Dashboard.vue'
import Login from './components/Login.vue'
import { useUserStore } from './stores/src/userStore';
const userStore = useUserStore();
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HeaderComponent msg="You did it!" />
    </div>
  </header>

  <main>
    <!-- <TheWelcome /> -->
     <Login v-if="!userStore.isAuthenticated"/>
    <Dashboard v-if="userStore.isAuthenticated" />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
