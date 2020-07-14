import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import app from '../firebase';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
  },
  {
    path: '/perfil',
    name: 'Perfil',
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue'),
    meta: { requiresAuth: true },
  },
  {
    path: '/flora',
    name: 'Flora',
    component: () => import(/* webpackChunkName: "flora" */ '../views/Flora.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/fauna',
    name: 'Fauna',
    component: () => import(/* webpackChunkName: "fauna" */ '../views/Fauna.vue'),
    meta: { requiresAuth: true }
  },

  
  {
    path: '/verMapa',
    name: 'MostarMap',
    component: () => import(/* webpackChunkName: "verMapa" */ '../views/MostrarMap.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "editar" */ '../views/Editar.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/reserva',
    name: 'Reserva',
    component: () => import(/* webpackChunkName: "reserva" */ '../views/Reserva.vue'),
    meta: { requiresAuth: true }
  }
]
const router = new VueRouter({
  routes,
});
router.beforeEach((to, from, next) => {
  const rutaAuth = to.matched.some((record) => record.meta.requirestAuth);
  const user = app.auth().currentUser;
  if (rutaAuth && user == null) {
    next({ name: 'Home' });
  } else {
    next();
  }
});
export default router;