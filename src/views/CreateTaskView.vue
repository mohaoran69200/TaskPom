<script setup>
import { ref } from 'vue';
import { useTasks } from '../store';

const { addTask } = useTasks();

const newTask = ref({
    title: '',
    description: '',
    status: 'en attente',
    dueDate: ''
});

const addNewTask = () => {
    addTask({ ...newTask.value });
    newTask.value = {
        title: '',
        description: '',
        status: 'en attente',
        dueDate: ''
    };
};
</script>

<template>
    <div>
        <h2>Ajouter une Tâche</h2>
        <form @submit.prevent="addNewTask">
            <label for="task-title">Titre</label>
            <input v-model="newTask.title" type="text" id="task-title" required>
            <label for="task-description">Description</label>
            <textarea v-model="newTask.description" id="task-description" required></textarea>
            <label for="task-due-date">Date</label>
            <input v-model="newTask.dueDate" type="date" id="task-due-date" required>
            <button type="submit">Ajouter</button>
        </form>
    </div>
</template>

<style scoped></style>
