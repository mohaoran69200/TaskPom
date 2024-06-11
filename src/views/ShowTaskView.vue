<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useTasksStore } from '../stores/tasks';

const { getTaskById } = useTasksStore();
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
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: azure;
    font-family: 'Poppins-Bold', sans-serif;
}

div {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(25, 3, 75);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: azure;
    font-family: 'Poppins', sans-serif;
}

p {
    margin-bottom: 10px;
}

strong {
    font-weight: bold;
}
</style>
