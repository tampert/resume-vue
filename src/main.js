import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persistedstate";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const pinia = createPinia();
pinia.use(piniaPersist); // Enable persisted state

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.use(pinia);
app.use(vuetify);
app.mount("#app");
