<script setup>
import { ref } from 'vue';
import { useTasksStore } from '../stores/tasks';

const store = useTasksStore();

const title = ref('');
const description = ref('');
const status = ref('en attente');
const dueDate = ref('');

const submitTask = () => {
    const newTask = {
        title: title.value,
        description: description.value,
        status: status.value,
        dueDate: dueDate.value,
    };
    store.addTask(newTask);
    // Reset form fields after submission
    title.value = '';
    description.value = '';
    status.value = 'en attente';
    dueDate.value = '';
};
</script>

<template>
    <div>
        <h2>Ajouter une Tâche</h2>
        <form @submit.prevent="submitTask" class="task-form">
            <div class="form-group">
                <label for="title">Titre</label>
                <input v-model="title" type="text" id="title" required />
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="description" id="description" required></textarea>
            </div>
            <div class="form-group">
                <label for="status">Statut</label>
                <select v-model="status" id="status" required>
                    <option value="en attente">En attente</option>
                    <option value="en cours">En cours</option>
                    <option value="terminée">Terminée</option>
                </select>
            </div>
            <div class="form-group">
                <label for="due-date">Date d'échéance</label>
                <input v-model="dueDate" type="date" id="due-date" required />
            </div>
            <button type="submit" class="btn-submit">Ajouter</button>
        </form>
    </div>
</template>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: azure;
    font-family: 'Poppins-Bold', sans-serif;
}

.task-form .form-group {
    margin-bottom: 20px;
}

.task-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
}

.task-form input[type="text"],
.task-form textarea,
.task-form select,
.task-form input[type="date"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.task-form textarea {
    resize: vertical;
    min-height: 100px;
}

.task-form .btn-submit {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #5B42F3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.task-form .btn-submit:hover {
    background-color: #4a35cc;
}
</style>
