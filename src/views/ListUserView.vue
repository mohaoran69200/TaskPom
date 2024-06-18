<script setup>
import { onMounted } from 'vue'
import { useUsersStore } from '../stores/users'
import { useRouter } from 'vue-router'

const store = useUsersStore()
const router = useRouter()

onMounted(async () => {
    await store.fetchUsers()
})

const editUser = (userId) => {
    router.push({ name: 'EditUser', params: { id: userId } })
}

const viewUser = (userId) => {
    router.push({ name: 'ShowUser', params: { id: userId } })
}

const deleteUser = async (userId) => {
    try {
        await store.deleteUser(userId)
        await store.fetchUsers()
    } catch (error) {
        console.error(`Erreur lors de la suppression de l utilisateur ${userId} :`, error)
    }
}
</script>

<template>
    <div>
        <h2>Liste des utilisateurs</h2>
        <table>
            <tbody>
                <tr v-for="user in store.users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.firstname }}</td>
                    <td>{{ user.lastname }}</td>
                    <td>
                        <button @click="viewUser(user.id)">Voir</button>
                        <button @click="editUser(user.id)">Modifier</button>
                        <button @click="deleteUser(user.id)">Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
h2 {
    text-align: center;
    margin-bottom: 20px;
    color: azure;
    font-family: 'Poppins-Bold', sans-serif;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

table,
th,
td {
    border: 1px solid #ccc;
}

th,
td {
    padding: 10px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

button {
    margin-right: 5px;
}
</style>
