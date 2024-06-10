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
    <div>
        <table>
            <!-- <thead>
                <tr>
                    <th>Titre</th>
                    <th>Description</th>
                    <th>Statut</th>
                    <th>Date</th>
                    <th>Actions</th>
                </tr>
            </thead> -->
            <tbody>
                <taskItem v-for="(task, index) in localTasks" :key="index" :task="task" :index="index"
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
