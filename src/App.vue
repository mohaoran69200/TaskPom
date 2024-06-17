<script setup>
import headerNav from './components/headerNav.vue'
import pomodoroSection from './components/pomodoroSection.vue'
import { RouterView } from 'vue-router';
import { ref } from 'vue';

const showTaskSection = ref(false);

const toggleTaskSection = () => {
  showTaskSection.value = !showTaskSection.value;
};
</script>

<template>
  <headerNav @toggle-tasks="toggleTaskSection" />
  <div id="main-container">
    <pomodoroSection />
    <RouterView />
  </div>
</template>

<style scoped>
#main-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.tasks-links {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}
</style>