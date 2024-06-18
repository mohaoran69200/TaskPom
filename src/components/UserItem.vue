<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
});

const emit = defineEmits(['complete', 'delete', 'edit']);
</script>

<template>
    <tr>
        <td>{{ props.user.id }}</td>
        <td>{{ props.user.firstname }}</td>
        <td>{{ props.user.lastname }}</td>
        <td>{{ props.user.email }}</td>
        <td>{{ props.user.password }}</td>
        <td>
            <button @click="emit('complete', props.user.id)">Terminer</button>
            <button @click="emit('delete', props.user.id)">Supprimer</button>
            <button @click="emit('edit', props.user)">Modifier</button>
            <RouterLink :to="{ name: 'ShowUser', params: { id: props.user.id } }">Voir</RouterLink>
        </td>
    </tr>
</template>

<style scoped>
/* Styles spécifiques au composant */
button {
    margin-right: 10px;
}
</style>
