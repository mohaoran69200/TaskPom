// src/store.js
import { ref } from 'vue';

// Initialize tasks with some example data
const tasks = ref([
    {
        id: 1,
        title: 'Example Task 1',
        description: 'This is an example task.',
        status: 'en cours',
        dueDate: '2023-12-31'
    },
    {
        id: 2,
        title: 'Example Task 2',
        description: 'This is another example task.',
        status: 'en attente',
        dueDate: '2024-01-01'
    }
]);

// Auto-increment ID counter
let taskIdCounter = tasks.value.length;

export function useTasks() {
    const addTask = (task) => {
        taskIdCounter++;
        tasks.value.push({ id: taskIdCounter, ...task });
    };

    const getTaskById = (id) => {
        return tasks.value.find(task => task.id === parseInt(id));
    };

    return {
        tasks,
        addTask,
        getTaskById
    };
}
