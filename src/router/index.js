import { createRouter, createWebHistory } from 'vue-router'
import blusas from '../views/Blusas.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: blusas
    },
    {
      path: '/Bory',
      name: 'Bory',
      component: () => import('../views/Bory.vue')
    },
    {
      path: '/Cropped',
      name: 'Cropped',
      component: () => import('../views/Cropped.vue')
    },
    {
      path: '/Macacao',
      name: 'Macacao',
      component: () => import('../views/Macacao.vue')
    },
    {
      path: '/Vestido',
      name: 'Vestido',
      component: () => import('../views/Vestido.vue')
    }
  ]
})

export default router
