import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('../views/Profile.vue')
    },
    {
      path: '/create_profile',
      name: 'create_profile',
      component: () => import('../views/CreateProfile.vue')
    },
    {
      path: '/suggested_movies',
      name: 'suggested_movies',
      component: () => import('../views/SuggestedMovies.vue')
    },
  ]
})

export default router
