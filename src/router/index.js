import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Perfil from '../views/Perfil.vue'
import Registro from '../views/Registro.vue'
import Editar from '../views/Editar.vue'
import Login from '../views/Login.vue'
import Reserva from '../views/Reserva.vue'
import Flora from '../views/Flora.vue'
import Fauna from '../views/Fauna.vue'
import MostrarMap from '../views/MostrarMap.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/perfil',
    name: 'Perfil',
    // route level code-splitting
    // this generates a separate chunk (perfil.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Perfil.vue')
  },
  {
    path: '/flora',
    name: 'Flora',
    // route level code-splitting
    // this generates a separate chunk (flora.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "flora" */ '../views/Flora.vue')
  },
  {
    path: '/fauna',
    name: 'Fauna',
    // route level code-splitting
    // this generates a separate chunk (fauna.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "fauna" */ '../views/Fauna.vue')
  },

  {
    path: '/registro',
    name: 'Registro',
    // route level code-splitting
    // this generates a separate chunk (registro.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "registro" */ '../views/Registro.vue')
  },
  {
    path: '/verMapa',
    name: 'MostarMap',
    // route level code-splitting
    // this generates a separate chunk (verMapa.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "verMapa" */ '../views/MostrarMap.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/editar/:id',
    name: 'Editar',
    // route level code-splitting
    // this generates a separate chunk (editar.[hash].js) for this route
    // which is lazy-loaded when the route is visited. COMO ACCEDES A ESTAS RUTAS POIN PA ACCEDER A PERFIL calmao

    component: () => import(/* webpackChunkName: "editar" */ '../views/Editar.vue')
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (perfil.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "perfil" */ '../views/Login.vue')
  },
  {
    path: '/reserva',
    name: 'Reserva',
    // route level code-splitting
    // this generates a separate chunk (reserva.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "reserva" */ '../views/Reserva.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
