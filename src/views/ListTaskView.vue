<script setup>
import { ref } from 'vue';
import taskItem from '../components/taskItem.vue';
import { useTasksStore } from '../stores/tasks';

const store = useTasksStore();

const editingTask = ref(null);

const editTask = (task) => {
    editingTask.value = { ...task };
};

const submitUpdate = () => {
    if (editingTask.value) {
        store.updateTask(editingTask.value);
        editingTask.value = null;
    }
};

const cancelEdit = () => {
    editingTask.value = null;
};

const deleteTask = (taskId) => {
    store.deleteTask(taskId);
};
</script>

<template>
    <div>
        <h2>Liste des Tâches</h2>
        <table>
            <tbody>
                <taskItem v-for="(task, index) in store.tasks" :key="task.id" :task="task" :index="index" @edit="editTask"
                    @delete="deleteTask" />
            </tbody>
        </table>

        <div v-if="editingTask" class="edit-form">
            <h3>Modifier la tâche</h3>
            <form @submit.prevent="submitUpdate" class="task-form">
                <div class="form-group">
                    <label for="edit-title">Titre</label>
                    <input v-model="editingTask.title" type="text" id="edit-title" required />
                </div>
                <div class="form-group">
                    <label for="edit-description">Description</label>
                    <textarea v-model="editingTask.description" id="edit-description" required></textarea>
                </div>
                <div class="form-group">
                    <label for="edit-status">Statut</label>
                    <select v-model="editingTask.status" id="edit-status" required>
                        <option value="en attente">En attente</option>
                        <option value="en cours">En cours</option>
                        <option value="terminée">Terminée</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-due-date">Date d'échéance</label>
                    <input v-model="editingTask.dueDate" type="date" id="edit-due-date" required />
                </div>
                <button type="submit" class="btn-submit">Enregistrer</button>
                <button type="button" class="btn-cancel" @click="cancelEdit">Annuler</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: azure;
    font-family: 'Poppins-Bold', sans-serif;
}

.edit-form {
    background-color: #fff;
    padding: 15px;
    border-radius: 4px;
    margin-top: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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

.task-form .btn-cancel {
    display: inline-block;
    padding: 10px 20px;
    color: #000;
    background-color: #ccc;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    margin-left: 10px;
}

.task-form .btn-cancel:hover {
    background-color: #b3b3b3;
}
</style>
