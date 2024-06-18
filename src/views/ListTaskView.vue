<script setup>
import { onMounted } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { useRouter } from 'vue-router'

const store = useTasksStore()
const router = useRouter()

onMounted(async () => {
    await store.fetchTasks()
})

const editTask = (taskId) => {
    router.push({ name: 'EditTask', params: { id: taskId } })
}

const viewTask = (taskId) => {
    router.push({ name: 'ShowTask', params: { id: taskId } })
}

const deleteTask = async (taskId) => {
    try {
        await store.deleteTask(taskId)
        await store.fetchTasks() // Recharger la liste des tâches après suppression
    } catch (error) {
        console.error(`Erreur lors de la suppression de la tâche ${taskId} :`, error)
    }
}
</script>

<template>
    <div>
        <h2>Liste des Tâches</h2>
        <table>
            <tbody>
                <tr v-for="task in store.tasks" :key="task.id">
                    <td>{{ task.id }}</td>
                    <td>{{ task.title }}</td>
                    <td>{{ task.description }}</td>
                    <td>{{ task.status }}</td>
                    <td>{{ task.dueDate }}</td>
                    <td>
                        <select v-model="status" id="status">
                            <option value="en attente">En attente</option>
                            <option value="en cours">En cours</option>
                            <option value="terminée">Terminée</option>
                        </select>
                    </td>
                    <td>
                        <button @click="viewTask(task.id)">Voir</button>
                        <button @click="editTask(task.id)">Modifier</button>
                        <button @click="deleteTask(task.id)">Supprimer</button>
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
