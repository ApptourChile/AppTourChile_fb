<template>
  <div id="app">
      <nav
        class="light-grey navbar-fixed"
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
                <i class="green-text text-darken-4 material-icons right">create</i>
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
            <li>
              <router-link to="/verMapa" class="green-text text-darken-4 right">
                <i class="green-text text-darken-4 material-icons right">gps</i>
                <b>Mapa</b>
                <!--Fauna-->
              </router-link>
            </li>
          </ul>
          <ul class="right">
            <li>
              <router-link to="/registro" class="green-text text-darken-4 right">
                <i class="green-text text-darken-4 material-icons right">group_add</i>
                <b>
                  Registro
                  <!--Registro-->
                </b>
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
              <router-link to="/login" class="green-text text-darken-4 right">
                <i class="green-text text-darken-4 material-icons right">directions_bus</i>
                <b>Mapa</b>
                <!--LOCOMOCION-->
              </router-link>
            </li>
          </ul>
          <ul class="sidenav" id="mobile-demo">
            <li>
              <router-link to="/" class="green-text text-darken-4 brand-logo center">
                <img src="img/ICONOS/logo_app.png" height="130" width="140" />
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="green-text text-darken-4 right">
                <i class="green-text text-darken-4 material-icons right">account_circle</i>
                <b>
                  Turista
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

            <li>
              <router-link to="/registro" class="green-text text-darken-4 right">
                <i class="green-text text-darken-4 material-icons right">group_add</i>
                <b>
                  Registro
                  <!--Registro-->
                </b>
              </router-link>
            </li>
            <li>
              <router-link to="/mapa" class="green-text text-darken-4 right">
                <i class="green-text text-darken-4 material-icons right">location_on</i>
                <b>Mapa</b>
                <!--donde estoy-->
              </router-link>
            </li>
            <li>
              <router-link to="/editar" class="green-text text-darken-4 right">
                <i class="green-text text-darken-4 material-icons right">directions_bus</i>
                <b>Editar</b>
                <!--LOCOMOCION-->
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large light-green darken-4" style="background: url('../img/FONDOS/linen.png')">
            <i class="large material-icons ">more_vert</i>
        </a>
        <ul>
            <li><router-link to="/perfil" class="btn-floating red" style="background: url('../img/FONDOS/linen.png')"><i
                        class="material-icons">map</i></router-link></li>
            <li><router-link to="/fauna"  class="btn-floating yellow" style="background: url('../img/FONDOS/linen.png')"><i
                        class="material-icons">pets</i></router-link></li>
            <li><router-link to="/flora" class="btn-floating light-green darken-3" style="background: url('../img/FONDOS/linen.png')"
                    ><i class="material-icons">local_florist</i></router-link></li>
            <li><router-link to="/home"  class="btn-floating light-blue" style="background: url('../img/FONDOS/linen.png')"
                    ><i class="material-icons">time_to_leave</i></router-link></li>
        </ul>
    </div>

      <router-view />
    </div>
</template>