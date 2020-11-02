import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/landing',
    name: 'Landing',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/dev/token',
    name: 'Developer Token',
    component: () => import( '../views/DevToken.vue')
  },
  {
    path: '/dev/login',
    name: 'Developer Login',
    component: () => import( '../views/DevLogin.vue')
  },
  {
    path: '/play/:user/:game',
    name: 'Home',
    component: () => import( '../views/Play.vue')
  },
  {
    path: '/',
    name: 'Info',
    component: () => import( '../views/Info.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import( '../views/404.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;