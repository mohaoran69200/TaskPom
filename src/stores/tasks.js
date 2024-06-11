import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([])
  const dones = computed(() => {
    const result = tasks.value.filter((task) => {
      return task.status === 'done'
    })
    return result.length
  })

  let taskIdCounter = tasks.value.length;


  const addTask = (task) => {
    taskIdCounter++;
    tasks.value.push({ id: taskIdCounter, ...task });
  };

  const getTaskById = (id) => {
    return tasks.value.find(task => task.id === parseInt(id));
  };

  const updateTask = (updatedTask) => {
    const index = tasks.value.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      tasks.value[index] = updatedTask;
    }
  };

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(task => task.id !== id);
  };

  return {
    tasks,
    dones,
    addTask,
    getTaskById,
    updateTask,
    deleteTask
  }
})
