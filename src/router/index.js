import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Project from '../views/ProjectPage.vue'
import OutintheWorld from '../views/OutintheWorldPage.vue'
import Showcase from '../views/ShowcasePage.vue'
import Multiverse from '../views/MultiversePage.vue'
import Governance from '../views/GovernancePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/project',
      name: 'project',
      component: Project
    },
    {
      path: '/outintheword',
      name: 'outintheword',
      component: OutintheWorld
    },
    {
      path: '/showcase',
      name: 'showcase',
      component: Showcase
    },
    {
      path: '/multiverse',
      name: 'multiverse',
      component: Multiverse
    },
    {
      path: '/governance',
      name: 'governance',
      component: Governance
    }
  ]
})

export default router
