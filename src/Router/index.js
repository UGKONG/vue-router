import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../components/Main';
import Login from '../components/Login';
import Join from '../components/Join';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/join',
    component: Join
  },
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;