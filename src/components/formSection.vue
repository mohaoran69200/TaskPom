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


<style scoped>
/* Styles du formulaire */
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: azure;
    font-family: 'Poppins-Bold', sans-serif;
}

form {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(25, 3, 75);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: azure;
}

input[type="text"],
textarea,
input[type="date"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 15px;
}

textarea {
    resize: vertical;
    min-height: 100px;
}

button[type="submit"] {
    display: block;
    width: 100%;
    padding: 10px 0;
    color: #fff;
    background-color: #5B42F3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'poppins-bold', sans-serif;
}

button[type="submit"]:hover {
    background-color:  #cc5856;
}
</style>


