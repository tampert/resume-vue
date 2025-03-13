import './assets/main.css'

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persistedstate';
import App from './App.vue';

const pinia = createPinia();
pinia.use(piniaPersist); // Enable persisted state

const app = createApp(App);
app.use(pinia);
app.mount('#app');

