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
          path: 'animation',
          name: 'animation-page',
          component: () => import('@/pages/AnimationPage.vue'),
        },
      ],
    },
  ],
})

export default router
