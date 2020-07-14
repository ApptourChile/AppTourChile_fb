<template>
  <div class="perfil">
    <Barra></Barra>
    <br />
    <br />
    <br />
    <div
      class="container center light z-depth-5"
      style="border-radius:15%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <br />
      <h3 class="green-text text-darken-4">Lista Usuarios</h3>

      <table style="margin:0 auto; width:700px; font-family: 'Calistoga', cursive;">
        <tr class="green-text text-darken-4 table">
          <th>Nombre</th>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Email</th>
          <th>Contraseña</th>
          <th>Confirmar Contraseña</th>
          <th></th>
          <th></th>
        </tr>
        <tr v-for="t in user" :key="t.id">
          <td>{{t.nombre}}</td>
          <td>{{t.apellidoPaterno}}</td>
          <td>{{t.apellidoMaterno}}</td>
          <td>{{t.email}}</td>
          <td>{{t.pass}}</td>
          <td>{{t.clave2}}</td>

          <td>
            <router-link
              class="green-text text-darken-4 btn-floating"
               style="border-radius:55%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive, ;"
              :to="{'name':'Editar', 'params':{'id':t.id}}"
            ><i class="material-icons">create</i></router-link>
           </td>   
          <td>
            <a href="#" class="btn-floating red red-text text-darken-4" style="border-radius:55%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive, ;" @click="eliminar(t.id)"><i class="material-icons">delete</i></a>
          </td>
        </tr>
        <br />
        <br />
      </table>
    </div>
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import Barra from "../components/Barra";
import Footer from "../components/Footer";
import { mapActions, mapState } from "vuex";
import app from "../firebase";
export default {
  name: "Perfil",
  components: {
    Barra,
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
    ...mapActions(["getUser"]),

    eliminar(id) {
      if (confirm("estas seguro de eliminar a este Turista...")) {
        app
          .database()
          .ref("user")
          .child(id)
          .remove();
      }
    },
    guardar() {
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
    }
  },
  computed: {
    ...mapState(["user"])
  },
  created() {
    this.getUser();
  }
};
</script>
