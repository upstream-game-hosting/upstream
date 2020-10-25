import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

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
  history: createWebHashHistory(),
  routes
});

export default router;