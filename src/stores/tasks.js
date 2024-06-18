import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);
  const taskToEdit = ref(null);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://todolist-api.rema-tech.fr/api/tasks');
      const data = await response.json();
      tasks.value = data["hydra:member"];
    } catch (error) {
      console.error('Erreur lors de la récupération des tâches :', error);
    }
  };

  fetchTasks();

  const addTask = async (task) => {
    try {
      const response = await fetch('https://todolist-api.rema-tech.fr/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/ld+json',
        },
        body: JSON.stringify(task),
      });
      const data = await response.json();
      tasks.value.push(data);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la tâche :', error);
    }
  };

  const getTaskById = async (id) => {
    try {
      const response = await fetch(`https://todolist-api.rema-tech.fr/api/tasks/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Erreur lors de la récupération de la tâche avec l'ID ${id} :`, error);
    }
  };

  const updateTask = async (updatedTask) => {
    try {
      const response = await fetch(`https://todolist-api.rema-tech.fr/api/tasks/${updatedTask.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/merge-patch+json',
        },
        body: JSON.stringify(updatedTask),
      });
      if (response.ok) {
        const index = tasks.value.findIndex(task => task.id === updatedTask.id);
        if (index !== -1) {
          tasks.value[index] = updatedTask;
        }
      }
    } catch (error) {
      console.error(`Erreur lors de la mise à jour de la tâche avec l'ID ${updatedTask.id} :`, error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await fetch(`https://todolist-api.rema-tech.fr/api/tasks/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        tasks.value = tasks.value.filter(task => task.id !== id);
      }
    } catch (error) {
      console.error(`Erreur lors de la suppression de la tâche avec l'ID ${id} :`, error);
    }
  };

  return {
    tasks,
    taskToEdit,
    fetchTasks,
    addTask,
    getTaskById,
    updateTask,
    deleteTask,
  };
});
