<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useTasks } from '../store';

const { getTaskById } = useTasks();
const route = useRoute();
const taskId = computed(() => parseInt(route.params.id, 10));

const task = computed(() => getTaskById(taskId.value));
</script>

<template>
  <div v-if="task">
    <h2>Détails de la Tâche</h2>
    <p><strong>ID:</strong> {{ task.id }}</p>
    <p><strong>Titre:</strong> {{ task.title }}</p>
    <p><strong>Description:</strong> {{ task.description }}</p>
    <p><strong>Statut:</strong> {{ task.status }}</p>
    <p><strong>Date:</strong> {{ task.dueDate }}</p>
  </div>
  <div v-else>
    <p>Tâche non trouvée</p>
  </div>
</template>

<style scoped>
/* Ajoutez vos styles ici */
</style>
