import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login.vue'
import Main from '../components/main.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component:Login,
    },
	{
	  path: '/',
	  name: 'main',
	  component:Main,
	},
  ],
})

export default router
