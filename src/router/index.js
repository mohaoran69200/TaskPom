import { createRouter, createWebHistory } from 'vue-router'
import HomeTaskPom from '../views/HomeTaskPom.vue'
import CreateTaskView from '../views/CreateTaskView.vue'
import ListTaskView from '../views/ListTaskView.vue'
import ShowTaskView from '../views/ShowTaskView.vue'
import EditTaskView from '../views/EditTaskView.vue'
import TaskManagerView from '../views/TaskManagerView.vue'
// import UserListView from '../views/UserListView.vue'
// import UserCreateView from '../views/UserCreateView.vue'

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
    component: { render: (c) => c('router-view') },
    // children: [
    //   {
    //     path: '',
    //     name: 'UserList',
    //     component: UserListView
    //   },
    //   {
    //     path: 'new',
    //     name: 'CreateUser',
    //     component: UserCreateView
    //   }
    // ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
