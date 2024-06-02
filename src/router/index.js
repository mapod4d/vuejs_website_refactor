import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Project from '../views/Project.vue'
import OutintheWorld from '../views/OutintheWorld.vue'
import Showcase from '../views/Showcase.vue'
import Multiverse from '../views/Multiverse.vue'
import Governance from '../views/Governance.vue'

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
