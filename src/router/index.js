import { createRouter, createWebHistory } from 'vue-router';
import HomeTaskPom from '../views/HomeTaskPom.vue';
import CreateTaskView from '../views/CreateTaskView.vue';
import ListTaskView from '../views/ListTaskView.vue';
import ShowTaskView from '../views/ShowTaskView.vue';
import EditTaskView from '../views/EditTaskView.vue';

const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: HomeTaskPom
      },
      {
        path: '/task/new',
        name: 'CreateTask',
        component: CreateTaskView
      },
      {
        path: '/task',
        name: 'ListTask',
        component: ListTaskView
      },
      {
        path: '/task/:id',
        name: 'ShowTask',
        component: ShowTaskView,
        props: true
      },
      {
        path: '/task/:id/edit',
        name: 'EditTask',
        component: EditTaskView,
        props: true
      }
    ]
  });

export default router
