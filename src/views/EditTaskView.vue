<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();

const task = ref(/* récupérer la tâche à modifier à partir de la route ou d'une API */);

const updateTask = () => {
    // Logique de mise à jour de la tâche
    // Une fois la mise à jour terminée, rediriger vers la page de détails de la tâche
    router.push(`/task/${route.params.id}`);
};
</script>

<template>
    <div>
        <!-- Formulaire pour modifier la tâche -->
        <h2>Modifier la tâche</h2>
        <form @submit.prevent="updateTask">
            <label for="task-title">Titre</label>
            <input v-model="task.title" type="text" id="task-title" required>
            <label for="task-description">Description</label>
            <textarea v-model="task.description" id="task-description" required></textarea>
            <label for="task-due-date">Date</label>
            <input v-model="task.dueDate" type="date" id="task-due-date" required>
            <button type="submit">Enregistrer</button>
        </form>
    </div>
</template>
