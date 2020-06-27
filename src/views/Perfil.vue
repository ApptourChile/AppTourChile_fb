<template>
  <div class="perfil center">
    <br><br><br>
    <div class="container  light z-depth-5" style="border-radius:15%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;">
    <br>
    <h3 class="green-text text-darken-4 ">Lista Turistas</h3>

    <table style="margin:0 auto; width:300px; font-family: 'Calistoga', cursive;">
      <tr class="green-text text-darken-4 " >
        <th>Nombre</th>
        <th>Apellido Paterno</th>
        <th>Apellido Materno</th>
        <th>Edad</th>
        <th>Sexo</th>
        <th>Gmail</th>
        <th>Clave</th>
        <th></th>
        <th></th>
        
      </tr>
      <tr v-for="t in turistas" :key="t.id">
        <td>{{t.nombre}}</td>
        <td>{{t.apellidoP}}</td>
        <td>{{t.apellidoM}}</td>
        <td>{{t.edad}}</td>
        <td>{{t.sexo}}</td>
        <td>{{t.gmail}}</td>
        <td>{{t.clave}}</td>
        
        <td>  
          <router-link class="green-text text-darken-4" style="font-family: 'Calistoga', cursive;" :to="{'name':'Editar', 'params':{'id':t.id}}">
            <button class="btn green darken-4" style="border-radius:55%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive, ;">Editar</button> 
          </router-link>
        </td>
        <td class="" style="margin:8%">
         <br>
              <a href="#" class="red-text text-darken-4" @click="eliminar(t.id)">Eliminar</a>
        </td>
      </tr>
      <br><br>
    </table>
    </div>
   <br>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import app from "../firebase"
export default {
  name: "Perfil",
  components: {},
  data: () => ({
    turista:{}
  }),
  methods: {
    ...mapActions(["getTuristas"]),
    
    eliminar(id){
      if(confirm("estas seguro de eliminar a este turista...")){
        app
        .database()
        .ref("turista")
        .child(id).remove();
      }
    },
    guardar() {
      app
        .database()
        .ref("turista")
        .push({
          nombre: this.nombre,
          apellidoP: this.apellidoP,
          apellidoM: this.apellidoM,
          edad: this.edad,
          gmail: this.gmail,
          sexo: this.sexo

        });
    }
  },
  computed: {
    ...mapState(["turistas"])
  },
  created() {
    this.getTuristas();
  }
};
</script>


