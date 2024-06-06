<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps(['task', 'index']);
const emits = defineEmits(['complete', 'delete', 'edit', 'view']);
</script>

<template>
    <tr :class="{ 'completed': task.status === 'terminée' }">
        <td>{{ props.task.title }}</td>
        <td>{{ props.task.description }}</td>
        <td>{{ props.task.status }}</td>
        <td>{{ props.task.dueDate }}</td>
        <td>
            <button @click="emits('complete', props.index)" class="complete-btn" :disabled="props.task.status === 'terminée'">Terminer</button>
            <button @click="emits('delete', props.index)" class="delete-btn">Supprimer</button>
            <button @click="emits('edit', props.index)">Modifier</button>
            <button @click="emits('view', props.index)">Voir</button>
        </td>
    </tr>
</template>

<style scoped>
.completed {
    text-decoration: line-through;
}
</style>
