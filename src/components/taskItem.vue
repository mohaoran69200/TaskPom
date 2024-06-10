<script setup>
import { defineProps, defineEmits } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    task: Object,
    index: Number
});

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
            <button @click="emit('complete', props.index)">Terminer</button>
            <button @click="emit('delete', props.index)">Supprimer</button>
            <button @click="emit('edit', props.task)">Modifier</button>
            <RouterLink :to="{ name: 'ShowTask', params: { id: props.task.id } }">Voir</RouterLink>
        </td>
    </tr>
</template>

<style scoped></style>
