<script setup>
import { ref } from 'vue';
// import { useRoute } from 'vue-router';
// const route = useRoute();

// Récupérer la tâche spécifique à afficher à partir de la route ou d'une API
const task = ref(/* récupérer la tâche spécifique à afficher à partir de la route ou d'une API */);
</script>

<template>
    <div>
        <!-- Affichage des détails de la tâche -->
        <h2>Détails de la tâche</h2>
        <div>
            <p><strong>Titre:</strong> {{ task.title }}</p>
            <p><strong>Description:</strong> {{ task.description }}</p>
            <p><strong>Statut:</strong> {{ task.status }}</p>
            <p><strong>Date:</strong> {{ task.dueDate }}</p>
        </div>
    </div>
</template>
