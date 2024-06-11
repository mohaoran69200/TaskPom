<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import TaskItem from './taskItem.vue';
import { useTasksStore } from '../stores/tasks';

const store = useTasksStore();
const router = useRouter();

const editingIndex = ref(-1);
const editingTask = ref({
    title: '',
    description: '',
    dueDate: ''
});

const completeTask = (index) => {
    store.completeTask(index);
};

const deleteTask = (index) => {
    store.deleteTask(index);
};

const editTask = (index) => {
    editingIndex.value = index;
    editingTask.value = { ...store.tasks[index] };
};

const updateTask = () => {
    if (editingIndex.value !== -1) {
        store.updateTask({ index: editingIndex.value, task: editingTask.value });
        editingIndex.value = -1;
    }
};

const viewTask = (index) => {
    const task = store.tasks[index];
    router.push({ name: 'ShowTask', params: { id: task.id } });
};
</script>

<template>
    <div>
        <table>
            <tbody>
                <TaskItem v-for="(task, index) in store.tasks" :key="index" :task="task" :index="index"
                    @complete="completeTask" @delete="deleteTask" @edit="editTask" @view="viewTask" />
            </tbody>
        </table>

        <div v-if="editingIndex !== -1" class="edit-form">
            <h3>Modifier la tâche</h3>
            <form @submit.prevent="updateTask" class="task-form">
                <div class="form-group">
                    <label for="edit-title">Titre</label>
                    <input v-model="editingTask.title" type="text" id="edit-title" required>
                </div>
                <div class="form-group">
                    <label for="edit-description">Description</label>
                    <textarea v-model="editingTask.description" id="edit-description" required></textarea>
                </div>
                <div class="form-group">
                    <label for="edit-due-date">Date</label>
                    <input v-model="editingTask.dueDate" type="date" id="edit-due-date" required>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn-submit">Enregistrer</button>
                    <button type="button" @click="editingIndex = -1">Annuler</button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>
/* Styles du formulaire */
</style>
