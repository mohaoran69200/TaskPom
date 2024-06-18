<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTasksStore } from '../stores/tasks'

const router = useRouter()
const store = useTasksStore()
const title = ref('');
const description = ref('');
const status = ref('en attente');
const dueDate = ref('');

const submitTask = async () => {
    const newTask = {
        title: title.value,
        description: description.value,
        status: status.value,
        dueDate: dueDate.value,
    };

    try {
        await store.addTask(newTask);
        router.push('/tasks/task');
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la tâche :', error);
    }
};

</script>

<template>
    <div class="form-container">
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

.task-form input[type='text'],
.task-form textarea,
.task-form select,
.task-form input[type='date'] {
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
    background-color: #5b42f3;
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
