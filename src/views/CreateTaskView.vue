<script setup>
import { ref } from 'vue';
import { useTasks } from '../store';
import { useRouter } from 'vue-router';

const { addTask } = useTasks();
const router = useRouter();

const task = ref({
    title: '',
    description: '',
    status: 'en attente',
    dueDate: ''
});

const submitTask = () => {
    addTask(task.value);
    router.push('/');
};
</script>

<template>
    <h2>To-Do List</h2>
    <div class="form-container">
        <form @submit.prevent="submitTask" class="task-form">
            <div class="form-group">
                <label for="title">Titre</label>
                <input v-model="task.title" type="text" id="title" required>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="task.description" id="description" required></textarea>
            </div>
            <div class="form-group">
                <label for="dueDate">Date d'échéance</label>
                <input v-model="task.dueDate" type="date" id="dueDate" required>
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
.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color:  rgb(25, 3, 75);
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
    font-family: 'poppins-bold', sans-serif;
}

.task-form .btn-submit:hover {
    background-color:  #cc5856;
}
</style>
