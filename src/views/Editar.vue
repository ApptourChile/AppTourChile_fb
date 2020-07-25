<template>
  <div class="editar">
    <Barra></Barra>
    <br />
    <br />
    <br />
    <div class="row">
      <div class="container">
        <div class="col l6 offset-l3">
          <div
            class="card-panel light z-depth-5 center"
            style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:15%; width:500px; heigth:600px"
          >
            <h3 class="green-text text-darken-4">Editar Perfil</h3>
            <form @submit.prevent="editar" style="margin:0 auto; width:300px;" class="center">
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Nombre</b>
              </label>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="user.nombre"
                placeholder="Nombre"
              />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Apellido Paterno</b>
              </label>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="user.apellidoPaterno"
                placeholder="Apellido paterno"
              />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Apellido Materno</b>
              </label>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="user.apellidoMaterno"
                placeholder="Apellido materno"
              />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Email</b>
              </label>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="user.email"
                placeholder="Email"
              />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Contraseña</b>
              </label>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="password"
                v-model="user.pass"
                placeholder="Contraseña"
              />
              <br />
              <label class="green-text text-darken-4 left" for="first_name">
                <b>Confirmar Clave</b>
              </label>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="password"
                v-model="clave2"
                placeholder="Confirme Contraseña"
              />
              <br />
              <button class="btn green darken-4">Guardar</button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>


<script>
import app from "../firebase";
import Barra from "../components/Barra";
import Footer from "../components/Footer";
import { mapActions, mapState } from "vuex";
export default {
  name: "Editar",
  data: () => ({
    user: {}
  }),
  components: {
    Barra,
    Footer
  },
  methods: {
    editar() {
      app
        .database()
        .ref("user")
        .child(this.$route.params.id)
        .set(this.user);
      this.$router.push({ name: "Perfil" });
    },
    carga() {
      const ref = app
        .database()
        .ref("user")
        .child(this.$route.params.id)
        .on("value", snap => {
          this.user = snap.val();
        });
    },
    guardar() {
      app
        .database()
        .ref("user")
        .push({
          nombre: this.nombre,
          apellidoPaterno: this.apellidoPaterno,
          apellidoMaterno: this.apellidoMaterno,
          pass: this.pass,
          email: this.email,
          clave2: this.clave2
        });
    }
  },
  created() {
    this.carga();
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