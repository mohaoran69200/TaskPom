<script setup>
import taskItem from './taskItem.vue';
import { ref } from 'vue';

const props = defineProps(['tasks']);
const localTasks = ref(props.tasks);
const editingIndex = ref(-1);
const editingTask = ref({
    title: '',
    description: '',
    dueDate: ''
});

const completeTask = (index) => {
    localTasks.value[index].status = 'terminée';
    if (index < localTasks.value.length - 1) {
        const nextTask = localTasks.value[index + 1];
        if (nextTask.status === 'en attente') {
            nextTask.status = 'en cours';
        }
    }
};

const deleteTask = (index) => {
    localTasks.value.splice(index, 1);
};

const editTask = (index) => {
    editingIndex.value = index;
    editingTask.value = { ...localTasks.value[index] };
};

const updateTask = () => {
    if (editingIndex.value !== -1) {
        Object.assign(localTasks.value[editingIndex.value], editingTask.value);
        editingIndex.value = -1;
    }
};

const viewTask = (index) => {
    const task = localTasks.value[index];
    alert(`Détails de la tâche:\nTitre: ${task.title}\nDescription: ${task.description}\nStatut: ${task.status}\nDate: ${task.dueDate}`);
};
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Titre</th>
                <th>Description</th>
                <th>Statut</th>
                <th>Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <taskItem
                v-for="(task, index) in localTasks"
                :key="index"
                :task="task"
                :index="index"
                @complete="completeTask"
                @delete="deleteTask"
                @edit="editTask"
                @view="viewTask"
            />
        </tbody>
    </table>

    <div v-if="editingIndex !== -1" class="edit-form">
        <h3>Modifier la tâche</h3>
        <form @submit.prevent="updateTask">
            <label for="edit-title">Titre</label>
            <input v-model="editingTask.title" type="text" id="edit-title" required>
            <label for="edit-description">Description</label>
            <textarea v-model="editingTask.description" id="edit-description" required></textarea>
            <label for="edit-due-date">Date</label>
            <input v-model="editingTask.dueDate" type="date" id="edit-due-date" required>
            <button type="submit">Enregistrer</button>
            <button type="button" @click="editingIndex = -1">Annuler</button>
        </form>
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
