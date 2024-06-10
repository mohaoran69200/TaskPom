<script setup>
import formSection from '../components/formSection.vue'
import taskSection from '../components/taskSection.vue'
import { ref } from 'vue';

const tasks = ref([]);

const addTask = (task) => {
    if (tasks.value.length === 0) {
        task.status = 'en cours'; // La première tâche commence par "en cours"
    } else {
        task.status = 'en attente'; // Les tâches suivantes commencent par "en attente"
    }
    tasks.value.push(task);
};
</script>

<template>
    <div class="container-todo">
        <formSection @add-task="addTask" />
        <taskSection :tasks="tasks" />
    </div>
</template>

<style scoped></style>
