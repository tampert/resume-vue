<script setup></script>

<template>
  <v-card
    density="compact"
    deprependIcon="mdi-school"
    rounded="0"
    title="EDUCATION"
    :min-width="400"
  >
    <v-list>
      <v-list-item>
        <div class="d-flex">
          <v-sheet width="150" class="border-e-sm">2002 - 2006</v-sheet>
          <v-sheet class="w-100">
            <div class="d-flex flex-column pl-2">
              <strong> Bachelor of Arts, Interaction Design</strong>
              <div>Hogeschool voor de Kunsten Utrecht</div>
            </div>
          </v-sheet>
        </div>
      </v-list-item>
      <v-list-item>
        <div class="d-flex">
          <v-sheet width="150" class="border-e-sm">1998 - 2002</v-sheet>
          <v-sheet class="w-100">
            <div class="d-flex flex-column pl-2">
              <strong> Multimedia Design</strong>
              <div>MTS Sint-Lucas Boxtel</div>
            </div>
          </v-sheet>
        </div>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<style scoped></style>
