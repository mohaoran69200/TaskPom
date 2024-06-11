<script setup>
import { defineProps, defineEmits } from 'vue';
import { RouterLink } from 'vue-router';

// Définition des propriétés reçues par le composant
const props = defineProps({
    task: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
});

// Définition des événements émis par le composant
const emit = defineEmits(['complete', 'delete', 'edit']);
</script>

<template>
    <tr>
        <td>{{ props.task.id }}</td>
        <td>{{ props.task.title }}</td>
        <td>{{ props.task.description }}</td>
        <td>{{ props.task.status }}</td>
        <td>{{ props.task.dueDate }}</td>
        <td>
            <button @click="emit('complete', task.id)">Terminer</button>
            <button @click="emit('delete', task.id)">Supprimer</button>
            <button @click="emit('edit', task)">Modifier</button>
            <RouterLink :to="{ name: 'ShowTask', params: { id: task.id } }">Voir</RouterLink>
        </td>
    </tr>
</template>

<style scoped>
button {
    margin-right: 10px;
}
</style>
