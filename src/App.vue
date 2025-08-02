<script setup>
import Contact from "./components/resume/Contact.vue";
import Intro from "./components/resume/Intro.vue";
import Knowledge from "./components/resume/Knowledge.vue";
import Skills from "./components/resume/Skills.vue";
import Languages from "./components/resume/Languages.vue";
import Education from "./components/resume/Education.vue";
import Experience from "./components/resume/Experience.vue";
</script>

<template>
  <v-container>
    <v-row>
      <v-col>
        <Intro />
        <Contact />
        <Skills />
        <Knowledge />
        <Languages />
        <Education />
      </v-col>
      <v-col>
        <Experience />
      </v-col>
    </v-row>
  </v-container>
  <v-footer>© 2025 Dirk Soentjens. All rights reserved.</v-footer>
</template>

<style scoped></style>
