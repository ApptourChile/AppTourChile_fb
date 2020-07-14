<template>
  <div id="app">
    <Barra></Barra>
    <br />
    <br />
    <br />
    <div
      class="col l12 center light z-depth-5"
      style="border-radius:15%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <br />
      <h3 class="green-text text-darken-4">Fauna Nativa de Chile</h3>
        <table
          class="green-text text-darken-4"
          style="margin:0 auto; width:750px; font-family: 'Calistoga', cursive;"
        >
          <tr v-for="fs in idRegion1" :key="fs.id" class="center">
            <div class="col l4 offset-l1">
              <div
              
                class="card-panel light z-depth-5"
                style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <div class="card light-green-text text-darken-4">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" width="345" height="250" />
                  </div>
                  <div class="card-content center">
                    <span class="card-title activator">
                      <i class="material-icons">local_florist</i>
                      {{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.nombreFauna}}
                    </span>
                    <p>
                      Nombre Cientifico:
                      {{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.cientificoFauna}}
                      <br />
                      
                    </p>
                  </div>
                  <div
                    class="card-reveal white center"
                    style="background: url('img/FONDOS/linen.png')"
                  >
                    <div class="row">
                      <div class="col l12">
                        <div class="col l1 center">
                          <span class="card-title green-text text-darken-4">
                            <i class="material-icons left black-text">reply</i>
                          </span>
                        </div>
                        <div class="col l11"></div>
                      </div>
                      <div class="col l12 center">
                        <span class="card-title green-text text-darken-4">
                          <h5>{{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.nombreFauna}}</h5>
                        </span>
                      </div>
                      <div class="col l12 center">
                        <h6>Descripcion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.descripcionFauna}}</p>
                        <h6>Habitat:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.habitadFauna}}</p>
                        <h6>Alimentacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.alimentacionFauna}}</p>
                        <h6>Conservacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.conservacionFauna}}</p>
                        <h6>Foto 1:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.foto1Fauna}}</p>
                        <h6>Foto 2:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva.FAUNA.idFauna1.infoFauna.foto2Fauna}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tr>
        </table>
      </div>
      <br />
      <Footer></Footer>
    </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Barra from '@/components/Barra.vue';
import Footer from '@/components/Footer.vue';
import { mapActions, mapState } from "vuex";
import app from "../firebase";
export default {
  name: "Fauna",
  components: {
    //HelloWorld
    Barra,
    Footer
  },
  data: () => ({
    numeroRegion: "",
    nombreReserva: "",
    descripcionReserva: "",
    tarifas: "",
    latitud: "",
    longitud: "",
    contacto:"",
    cientificoFlora: "",
    nombreFlora: "",
    descripcionFlora: "",
    foto1:"",
    foto2:"",
    nombreFauna:"",
    descripcionFauna:"",
    cientificoFauna:"",
    habitadFauna:"",
    alimentacionFauna:"",
    conservacionFauna:"",
    foto1Fauna:"",
    foto2Fauna:""
  }),
  methods: {
    ...mapActions(["getRegion1"]),
  },
  computed: {
    ...mapState(["idRegion1"]),
  },
  created() {
    this.getRegion1();
  }
};
</scripts>