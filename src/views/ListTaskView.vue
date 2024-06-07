<script setup>
import taskItem from '../components/taskItem.vue';
import { useTasks } from '../store';
import { ref } from 'vue';

const { tasks } = useTasks();

const editingTask = ref(null);

const completeTask = (index) => {
    tasks.value[index].status = 'terminée';
    if (index < tasks.value.length - 1) {
        const nextTask = tasks.value[index + 1];
        if (nextTask.status === 'en attente') {
            nextTask.status = 'en cours';
        }
    }
};

const deleteTask = (index) => {
    tasks.value.splice(index, 1);
};

const editTask = (task) => {
    editingTask.value = { ...task };
};

const updateTask = () => {
    const taskIndex = tasks.value.findIndex(task => task.id === editingTask.value.id);
    if (taskIndex !== -1) {
        tasks.value[taskIndex] = { ...editingTask.value };
        editingTask.value = null;
    }
};

const cancelEdit = () => {
    editingTask.value = null;
};

</script>

<template>
    <div>
        <h2>Liste des Tâches</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Titre</th>
                    <th>Statut</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <taskItem v-for="(task, index) in tasks" :key="task.id" :task="task" :index="index" @complete="completeTask"
                    @delete="deleteTask" @edit="editTask(task)" />
            </tbody>
        </table>

        <div v-if="editingTask" class="edit-form">
            <h3>Modifier la tâche</h3>
            <form @submit.prevent="updateTask">
                <label for="edit-title">Titre</label>
                <input v-model="editingTask.title" type="text" id="edit-title" required>
                <label for="edit-description">Description</label>
                <textarea v-model="editingTask.description" id="edit-description" required></textarea>
                <label for="edit-due-date">Date</label>
                <input v-model="editingTask.dueDate" type="date" id="edit-due-date" required>
                <button type="submit">Enregistrer</button>
                <button type="button" @click="cancelEdit">Annuler</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
/* Add your styles here */
.edit-form {
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.edit-form h3 {
    margin-top: 0;
    margin-bottom: 10px;
}

.edit-form label {
    display: block;
    margin-bottom: 5px;
}

.edit-form input[type="text"],
.edit-form textarea,
.edit-form input[type="date"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.edit-form button[type="submit"],
.edit-form button[type="button"] {
    background-color: #5B42F3;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.edit-form button[type="button"] {
    background-color: #ccc;
    margin-left: 10px;
}

.edit-form button[type="submit"]:hover {
    background-color: #4a35cc;
}

.edit-form button[type="button"]:hover {
    background-color: #b3b3b3;
}
</style>
