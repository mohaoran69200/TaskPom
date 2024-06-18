import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useUsersStore = defineStore('users', () => {
    const users = ref([]);
    const userToEdit = ref(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch('https://todolist-api.rema-tech.fr/api/users');
            const data = await response.json();
            users.value = data["hydra:member"];
        } catch (error) {
            console.error('Erreur lors de la récupération de l utilisateur :', error);
        }
    };

    fetchUsers();

    const addUser = async (user) => {
        try {
            const response = await fetch('https://todolist-api.rema-tech.fr/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/ld+json',
                },
                body: JSON.stringify(user),
            });
            const data = await response.json();
            users.value.push(data);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l utilisateur :', error);
        }
    };

    const getUserById = async (id) => {
        try {
            const response = await fetch(`https://todolist-api.rema-tech.fr/api/users/${id}`);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error(`Erreur lors de la récupération de l utilisateur avec l'ID ${id} :`, error);
        }
    };

    const updateUser = async (updatedUser) => {
        try {
            const response = await fetch(`https://todolist-api.rema-tech.fr/api/users/${updatedUser.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/merge-patch+json',
                },
                body: JSON.stringify(updatedUser),
            });
            if (response.ok) {
                const index = users.value.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    users.value[index] = updatedUser;
                }
            }
        } catch (error) {
            console.error(`Erreur lors de la mise à jour de l utilisateur avec l'ID ${updatedUser.id} :`, error);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`https://todolist-api.rema-tech.fr/api/users/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                users.value = users.value.filter(user => user.id !== id);
            }
        } catch (error) {
            console.error(`Erreur lors de la suppression de l utilisateur avec l'ID ${id} :`, error);
        }
    };

    return {
        users,
        userToEdit,
        fetchUsers,
        addUser,
        getUserById,
        updateUser,
        deleteUser,
    };
});
