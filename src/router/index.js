import { createRouter, createWebHistory } from 'vue-router'
import HomeTaskPom from '../views/HomeTaskPom.vue'

import TaskManagerView from '../views/TaskManagerView.vue'
import CreateTaskView from '../views/CreateTaskView.vue'
import ListTaskView from '../views/ListTaskView.vue'
import ShowTaskView from '../views/ShowTaskView.vue'
import EditTaskView from '../views/EditTaskView.vue'

import UserManagerView from '../views/UserManagerView.vue'
import CreateUserView from '../views/CreateUserView.vue'
import ListUserView from '../views/ListUserView.vue'
import ShowUserView from '../views/ShowUserView.vue'
import EditUserView from '../views/EditUserView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeTaskPom
  },
  {
    path: '/tasks',
    component: TaskManagerView, 
    children: [
      {
        path: 'task',
        name: 'ListTask',
        component: ListTaskView
      },
      {
        path: 'new',
        name: 'CreateTask',
        component: CreateTaskView
      },
      {
        path: ':id',
        name: 'ShowTask',
        component: ShowTaskView,
        props: true
      },
      {
        path: ':id/edit',
        name: 'EditTask',
        component: EditTaskView,
        props: true
      }
    ]
  },
  {
    path: '/users',
    component: UserManagerView,
    children: [
      {
        path: 'user',
        name: 'ListUser',
        component: ListUserView
      },
      {
        path: 'new',
        name: 'CreateUser',
        component: CreateUserView
      },
      {
        path: ':id',
        name: 'ShowUser',
        component: ShowUserView,
        props: true
      },
      {
        path: ':id/edit',
        name: 'EditUser',
        component: EditUserView,
        props: true
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
