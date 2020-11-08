import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import( '../views/Home.vue')
  },
  {
    path: '/dev/token',
    name: 'Developer Token',
    component: () => import( '../views/DevToken.vue'),
    meta: {
      title: 'Developer'
    }
  },
  {
    path: '/dev/login',
    name: 'Developer Login',
    component: () => import( '../views/DevLogin.vue'),
    meta: {
      title: 'Developer'
    }
  },
  {
    path: '/play/:user/:game',
    name: 'Play',
    component: () => import( '../views/Play.vue'),
    meta: {
      title: 'Play'
    }
  },
  {
    path: '/',
    name: 'Info',
    component: () => import( '../views/Info.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import( '../views/404.vue'),
    meta: {
      title: '404 Page Not Found'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;