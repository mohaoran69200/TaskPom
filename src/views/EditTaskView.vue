<script setup>
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useTasksStore } from '../stores/tasks';

const { getTaskById, updateTask } = useTasksStore();
const route = useRoute();
const router = useRouter();

const task = ref(getTaskById(route.params.id));

const submitUpdate = () => {
    updateTask(task.value);
    router.push(`/task/${route.params.id}`);
};
</script>

<template>
    <h2>Modifier la tâche</h2>
    <div class="form-container">
        <form @submit.prevent="submitUpdate" class="task-form">
            <div class="form-group">
                <label for="title">Titre</label>
                <input v-model="task.title" type="text" id="title" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="task.description" id="description" required></textarea>
            </div>
            <div class="form-group">
                <label for="status">Statut</label>
                <select v-model="task.status" id="status" required>
                    <option value="en attente">En attente</option>
                    <option value="en cours">En cours</option>
                    <option value="terminée">Terminée</option>
                </select>
            </div>
            <div class="form-group">
                <label for="dueDate">Date d'échéance</label>
                <input v-model="task.dueDate" type="date" id="dueDate" required>
            </div>
            <button type="submit" class="btn-submit">Enregistrer</button>
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

.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(25, 3, 75);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-form .form-group {
    margin-bottom: 20px;
}

.task-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: azure;
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
    margin-bottom: 15px;
}

.task-form textarea {
    resize: vertical;
    min-height: 100px;
}

.task-form .btn-submit {
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
    font-family: 'Poppins-Bold', sans-serif;
}

.task-form .btn-submit:hover {
    background-color: #cc5856;
}
</style>
