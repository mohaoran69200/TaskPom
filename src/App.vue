<script setup>
import headerNav from './components/headerNav.vue'
import pomodoroSection from './components/pomodoroSection.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <headerNav />
  <div id="main-container">
    <pomodoroSection />
    <RouterView />
  </div>
</template>

<style scoped></style>
