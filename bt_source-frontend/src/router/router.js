import Strains from '../view/strains.vue'
import {createRouter,createWebHistory} from 'vue-router'
import Home  from "../view/home"

  const routes = [
    {
      path: '/strains',
      name: 'Strains',
      component: Strains
    },
    {
      path: '/',redirect:'/home'
    },
    {
      path: '/home',component:Home
    }
  ]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
