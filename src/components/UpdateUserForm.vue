<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useUsersStore } from '../stores/users';

const store = useUsersStore();
const router = useRouter();
const route = useRoute();

const firstname = ref('');
const lastname = ref('');
const mail = ref('');
const number = ref('');
const roles = ref('');
const task = ref('');
const password = ref({});;

onMounted(async () => {
    const userId = route.params.id;
    const user = await store.getUserById(userId);
    if (user) {
        firstname.value = user.firstname;
        lastname.value = user.lastname;
        mail.value = user.mail;
        number.value = user.number;
        roles.value = user.roles;
        task.value = user.task;
        password.value = user.password;
    }
});

const submitUpdateUser = async () => {
    const updatedUser = {
        id: route.params.id,
        firstname: firstname.value,
        lastname: lastname.value,
        mail: mail.value,
        number: number.value,
        roles: roles.value,
        task: task.value,
        password: password.value
    };

    try {
        await store.updateUser(updatedUser);
        router.push('/users/user'); // Rediriger vers la liste des tâches après mise à jour
    } catch (error) {
        console.error(`Erreur lors de la mise à jour de l'utilisateur l'ID ${updatedUser.id} :`, error);
    }
};
</script>

<template>
    <div class="form-container">
        <form @submit.prevent="submitUpdateUser" class="user-form">
            <div class="form-group">
                <label for="firstname">Prenom</label>
                <input v-model="firstname" type="text" id="firstname" required />
            </div>
            <div class="form-group">
                <label for="lastname">Nom</label>
                <input v-model="lastname" type="text" id="lastname" required />
            </div>
            <div class="form-group">
                <label for="mail">Email</label>
                <input v-model="mail" type="email" id="mail" required />
            </div>
            <div class="form-group">
                <label for="number">Téléphone</label>
                <input v-model="number" type="tel" id="number" required />
            </div>
            <div class="form-group">
                <label for="roles">Roles</label>
                <input v-model="roles" type="text" id="roles" required />
            </div>
            <div class="form-group">
                <label for="task">Tâche</label>
                <input v-model="task" type="text" id="task" />
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input v-model="password" type="password" id="password" required />
            </div>
            <button type="submit" class="btn-submit">Ajouter</button>
        </form>
    </div>
</template>

<style scoped>
.form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgb(25, 3, 75);
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.user-form .form-group {
    margin-bottom: 20px;
}

.user-form label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: azure;
}

.user-form input[type='text'],
.user-form textarea,
.user-form select,
.user-form input[type='date'] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    margin-bottom: 15px;
}

.user-form textarea {
    resize: vertical;
    min-height: 100px;
}

.user-form .btn-submit {
    display: block;
    width: 100%;
    padding: 10px 0;
    color: #fff;
    background-color: #5b42f3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    font-family: 'Poppins-Bold', sans-serif;
}

.user-form .btn-submit:hover {
    background-color: #cc5856;
}
</style>
