import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

  {
    path: '/home',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  
  {
    path: '*',
    name: 'not-found',
    component: () => import('@/views/404.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
