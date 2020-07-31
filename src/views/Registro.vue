<template>
  <div class>
    <nav
      class="navbar-wraper light-grey"
      style="background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <div class="nav-wrapper">
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <router-link to="/" class="green-text text-darken-4 brand-logo center">
              <img src="img/ICONOS/logo_app.png" height="130" width="140" />
            </router-link>
          </li>
          <li>
            <router-link to="/" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">account_circle</i>
              <b>
                Login
                <!--Reserva Nacional-->
              </b>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col l6 offset-l3">
        <div
          class="card-panel light z-depth-5 center"
          style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:10%;"
        >
          <h1 class="green-text text-darken-4">Registro</h1>

       
            <form @submit.prevent="crear">
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Nombre</b>
              </label>
              <input type="text" placeholder="Nombre" v-model="nombre" />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Apellido Paterno</b>
              </label>
              <input type="text" placeholder="Apellido P." v-model="apellidoPaterno" />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Apellido Paterno</b>
              </label>
              <input type="text" placeholder="Apellido M." v-model="apellidoMaterno" />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Email</b>
              </label>
              <input type="text" placeholder="Email" v-model="email" />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Contraseña</b>
              </label>
              <input type="password" placeholder="Clave" v-model="pass" />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Validar Contraseña</b>
              </label>
              <input type="password" placeholder="Clave Confirmacion" v-model="clave2" />
              <br />
              <br />
              <button class="btn green darken-4"><router-link
              
                class="white-text text-darken-4"
                style="text-transform: none;font-family: 'Calistoga', cursive;"
              >Guardar</router-link></button>
              <br />
            </form>

          <div class="col l12">
            <p class="black-text" style="text-transform: none;font-family: 'Calistoga', cursive;">
              Para Iniciar Sesion presiona
              <router-link to="/login"
                @submit.prevent="crear"
                class="green-text text-darken-4"
                style="text-transform: none;font-family: 'Calistoga', cursive;"
              ></router-link>
            </p>
          </div>
          <br />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
import Barra from "../components/Barra";
import Footer from "../components/Footer";
import app from "../firebase";
export default {
  name: "Registro",
  components: {
    Footer
  },
  data: () => ({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    email: "",
    pass: "",
    clave2: ""
  }),
  methods: {
    ...mapActions(["registroCuenta"]),
    ...mapActions(["getUser"]),
    ...mapActions(["getError"]),
    //guarda en base de datos no registra user

    guardarUser() {
      app
        .database()
        .ref("user")
        .push({
          nombre: this.nombre,
          apellidoPaterno: this.apellidoPaterno,
          apellidoMaterno: this.apellidoMaterno,
          email: this.email,
          pass: this.pass,
          clave2: this.clave2
        });
    },
    crear() {
      this.registroCuenta({
        //validar claves iguales
        nombre: this.nombre,
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        email: this.email,
        pass: this.pass,
        clave2: this.clave2
      });
      this.$router.push({ name: "Login" });
    }
  },
  computed: {
    ...mapState(["user"]),
    ...mapState(["error"])
  },
  mounted() {
    
      var elems = document.querySelectorAll(".parallax");
      var instances = M.Parallax.init(elems);
      var elems = document.querySelectorAll(".slider");
      var instances = M.Slider.init(elems, {
        height: 360,
        indicators: true,
        interval: 2000,
      });
      var elems = document.querySelectorAll(".carousel");
      var instances = M.Carousel.init(elems, {
        fullWidth: true,
        dist: -200,
        indicators: true,
        height: 200,
      });
      var elems = document.querySelectorAll(".datepicker");
      var instances = M.Datepicker.init(elems, {});
      var elems = document.querySelectorAll(".timepicker");
      var instances = M.Timepicker.init(elems, {});
      var elems = document.querySelectorAll(".collapsible");
      var instances = M.Collapsible.init(elems, {});
      var elems = document.querySelectorAll(".materialboxed");
      var instances = M.Materialbox.init(elems);
      var elems = document.querySelectorAll(".fixed-action-btn");
      var instances = M.FloatingActionButton.init(elems, {
        direction: "up",
      });
      var elems = document.querySelectorAll(".sidenav");
      var instances = M.Sidenav.init(elems, {});  
      var elems = document.querySelectorAll("select");
      var instances = M.FormSelect.init(elems, {});    
  }
};
</script>
