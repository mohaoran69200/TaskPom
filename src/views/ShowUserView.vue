<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'
import { useUsersStore } from '../stores/users'

const store = useUsersStore()
const route = useRoute()

const user = ref(null)

onMounted(async () => {
    const userId = route.params.id;
    user.value = await store.getUserById(userId);
});
</script>

<template>
    <div v-if="user">
        <h2>Détails de l'Utilisateur</h2>
        <p><strong>ID:</strong> {{ user.id }}</p>
        <p><strong>Prénom:</strong> {{ user.firstname }}</p>
        <p><strong>Nom:</strong> {{ user.lastname }}</p>
        <p><strong>E-mail:</strong> {{ user.email }}</p>
        <p><strong>Numéro</strong> {{ user.phone }}</p>
        <p><strong>Roles</strong> {{ user.roles }}</p>
        <p><strong>Tâches</strong> {{ user.task }}</p>
        <p><strong>Mot de passe</strong> {{ user.password }}</p>
    </div>
    <div v-else>
        <p>Utilisateur non trouvée</p>
    </div>
</template>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: azure;
    font-family: 'Poppins-Bold', sans-serif;
}

div {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(25, 3, 75);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: azure;
    font-family: 'Poppins', sans-serif;
}

p {
    margin-bottom: 10px;
}

strong {
    font-weight: bold;
}
</style>
