<template>
  <div class="/">
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
            <router-link to="/registro" class="green-text text-darken-4 right">
              <i class="green-text text-darken-4 material-icons right">person_add</i>
              <b>
                Registro
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
      <div class="col col l6 offset-l3">
        <div
          class="card-panel light z-depth-5 center"
          style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:10%;"
        >
          <h3
            class="green-text text-darken-4"
            style="font-family: 'Calistoga', cursive;"
          >Iniciar Sesion</h3>
          <form @submit.prevent="signIn" class="center" style="padding: 10%">
            <label class="green-text text-darken-4 left" for="first_name"><b>Email</b></label><input
              class="green-text text-darken-4"
              style="font-family: 'Calistoga', cursive;"
              type="text"
              placeholder="Mail"
              v-model="email"
            />
            <label class="green-text text-darken-4 left" for="first_name"><b>Contraseña</b></label>
            <input
              class="green-text text-darken-4"
              style="font-family: 'Calistoga', cursive;"
              type="password"
              placeholder="Contraseña"
              v-model="pass"
            />
            <div>
              <br />
              <button
                class="btn green darken-4 center"
                style="background: url('img/FONDOS/linen.png'); text-transform: none;font-family: 'Calistoga', cursive;"
              >Entrar!</button>
              
            </div>
            <br />
            <br />
            <div class="col l12">
              <p style="text-transform: none; font-family: 'Calistoga', cursive;">
                Para registrarte presiona
                <router-link
                  to="/registro"
                  class="green-text text-darken-4"
                  style="text-transform: none; font-family: 'Calistoga', cursive;"
                >Aquí!</router-link>
              </p>
              <br>
              
            </div>
            <br />
          </form>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data: () => ({
    email: "",
    pass: "",
    error:""
  }),
  methods: {
    ...mapActions(['iniciarSesion']),
    signIn() {
      this.iniciarSesion({
        email:this.email,
        pass:this.pass
      });
    }
  },
  computed: {
    ...mapState(['User']),
    ...mapState(['Error']),
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
    
  },
};
</script>