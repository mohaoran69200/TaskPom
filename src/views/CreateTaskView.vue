<script setup>
import { ref } from 'vue';
const emit = defineEmits(['add-task']);

const newTask = ref({
    title: '',
    description: '',
    status: 'en attente',
    dueDate: ''
});

const addTask = () => {
    emit('add-task', { ...newTask.value });
    newTask.value = {
        title: '',
        description: '',
        status: 'en attente',
        dueDate: ''
    };
};
</script>

<template>
    <h2>To-Do List</h2>
    <!-- Formulaire pour ajouter une nouvelle tâche -->
    <form @submit.prevent="addTask">
        <label for="task-title">Titre</label>
        <input v-model="newTask.title" type="text" id="task-title" required>
        <label for="task-description">Description</label>
        <textarea v-model="newTask.description" id="task-description" required></textarea>
        <label for="task-due-date">Date</label>
        <input v-model="newTask.dueDate" type="date" id="task-due-date" required>
        <button type="submit">Ajouter</button>
    </form>
</template>

<style scoped></style>
