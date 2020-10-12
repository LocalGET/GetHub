import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [

  
  {
    path: '/',
    name: 'Unauthenticate',
    component: () => import('@/layout/Unauthenticate.vue'),
    children:[
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/Login.vue')
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/Register.vue')
      },

    ]
  },{
  path: '/',
  name: 'Authenticate',
  component: () => import('@/layout/Authenticate.vue'),
  children:[
    {
      path: 'home',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: 'network/search',
      name: 'Network',
      component: () => import('./../views/network/Search.vue'),
    },
    {
      path: 'loan/dashboard',
      name: 'Dashboard',
      component: () => import('./../views/loan/Dashboard.vue'),
    },
    {
      path: 'loan/simulator',
      name: 'Simulator',
      component: () => import('./../views/loan/Simulator.vue'),
    },
  ]},
  
  
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
