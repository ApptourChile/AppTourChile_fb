<template>
  <div id="app">
    <nav
      class="navbar-wraper light-grey "
      style="background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/home" class="green-text text-darken-4 brand-logo center">
              <img src="img/ICONOS/logo_app.png" height="130" width="140" />
            </router-link>
          </li>
          <li>
            <router-link to="/perfil" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">account_circle</i>
              <b>
                Perfil
                <!--Reserva Nacional-->
              </b>
            </router-link>
          </li>

          <li>
            <router-link to="/flora" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">local_florist</i>
              <b>Flora</b>
              <!--Flora-->
            </router-link>
          </li>
          <li>
            <router-link to="/fauna" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">pets</i>
              <b>Fauna</b>
              <!--Fauna-->
            </router-link>
          </li>
          
        </ul>
        <ul class="right">
          <li>
            <router-link to="/verMapa" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">gps_fixed</i>
              <b>Mapa</b>
              <!--Fauna-->
            </router-link>
          </li>
          <li>
            <router-link to="/reserva" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">location_on</i>
              <b>Reserva Nacional</b>
              <!--donde estoy-->
            </router-link>
          </li>
          
          <li>
            <a @click="cerrarSesion" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">power_settings_new</i><b>Cerrar Sesion</b>
              
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="fixed-action-btn">
      <a
        class="btn-floating btn-large light-green darken-4"
        style="background: url('../img/FONDOS/linen.png')"
      >
        <i class="large material-icons">more_vert</i>
      </a>
      <ul>
        <li>
          <router-link
            to="/perfil"
            class="btn-floating red"
            style="background: url('../img/FONDOS/linen.png')"
          >
            <i class="material-icons">map</i>
          </router-link>
        </li>
        <li>
          <router-link
            to="/fauna"
            class="btn-floating yellow"
            style="background: url('../img/FONDOS/linen.png')"
          >
            <i class="material-icons">pets</i>
          </router-link>
        </li>
        <li>
          <router-link
            to="/flora"
            class="btn-floating light-green darken-3"
            style="background: url('../img/FONDOS/linen.png')"
          >
            <i class="material-icons">local_florist</i>
          </router-link>
        </li>
        <li>
          <router-link
            to="/home"
            class="btn-floating light-blue"
            style="background: url('../img/FONDOS/linen.png')"
          >
            <i class="material-icons">time_to_leave</i>
          </router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>
<script>

import {mapActions,mapState} from 'vuex';
export default {
  name: 'Barra',
  data: () => ({

  }),
  methods: {
    ...mapActions(['cerrarSesion']),
  },
  computed: {
    ...mapState(['error']),
  }
}
</script>
