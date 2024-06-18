<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUsersStore } from '../stores/users'

const router = useRouter()
const store = useUsersStore()

const firstname = ref('')
const lastname = ref('')
const email = ref('')
const phone = ref('')
const password = ref('')

const submitUser = async () => {
    const newUser = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        phone: phone.value,
        password: password.value
    }

    try {
        await store.addUser(newUser)
        router.push('/users/user')
    } catch (error) {
        console.error("Erreur lors de l'ajout de l utilisateur :", error)
    }
}
</script>

<template>
    <div class="form-container">
        <form @submit.prevent="submitUser" class="user-form">
            <div class="form-group">
                <label for="firstname">Prenom</label>
                <input v-model="firstname" type="text" id="firstname" required />
            </div>
            <div class="form-group">
                <label for="lastname">Nom</label>
                <input v-model="lastname" type="text" id="lastname" required />
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input v-model="email" type="email" id="email" required />
            </div>
            <div class="form-group">
                <label for="phone">Téléphone</label>
                <input v-model="phone" type="tel" id="phone" required />
            </div>
            <div class="form-group">
                <label for="roles">Roles</label>
                <select v-model="roles" id="roles" type="text" multiple>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
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
