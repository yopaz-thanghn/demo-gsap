import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'homepage',
          component: () => import('@/pages/HomePage.vue'),
        },
        {
          path: 'cars',
          name: 'car-page',
          component: () => import('@/pages/CarPage.vue'),
        },
        {
          path: 'nature',
          name: 'nature-page',
          component: () => import('@/pages/NaturePage.vue'),
        },
      ],
    },
  ],
})

export default router
