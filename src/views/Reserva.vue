<template>
  <div>
    <Barra></Barra>
    <br />
    <br />
    <br />
    <div
      class="col l12 center light z-depth-5"
      style="border-radius:15%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <br />
      
      <h3 class="green-text text-darken-4">Reservas Nacionales de Chile</h3>
        <table
          class="green-text text-darken-4"
          style="margin:0 auto; width:750px; font-family: 'Calistoga', cursive;"
        >

          <tr v-for="RG in Regiones" :key="RG.id" class="center">
            
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
                      <i class="material-icons">nature_people</i>
                      <td>{{Regiones}}</td>
                    </span>
                    <p>
                      Longitud:
                      <!--{{rs.Reservas.idReserva.infoReserva.longitud}}|
                      Latitud:
                      {{rs.Reservas.idReserva.infoReserva.latitud}}--->
                      
                      
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
                        <!---  <h5>{{rs.Reservas.idReserva.infoReserva.nombreReserva}}</h5>-->
                        </span>
                      </div>
                      <div class="col l12 center">
                        <!---<h6>Descripcion:</h6>
                        <p class="black-text">{{rs.Reservas.idReserva.infoReserva.descripcionReserva}}</p>
                        <h6>Tarifas:</h6>
                        <p class="black-text">{{rs.Reservas.idReserva.infoReserva.tarifas}}</p>
                        <h6>Contacto:</h6>
                        <p class="black-text">{{rs.Reservas.idReserva.infoReserva.contacto}}</p>
                        <h6>Foto 1:</h6>
                        <p class="black-text">{{rs.Reservas.idReserva.infoReserva.foto1Reserva}}</p>
                        <h6>Foto 2:</h6>
                        <p class="black-text">{{rs.Reservas.idReserva.infoReserva.foto2Reserva}}</p>-->
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
  name: "Reserva",
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
    foto1Reserva:"",
    foto2Reserva:"",
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
    ...mapActions(["getRegiones"]),
  },
  computed: {
    ...mapState(["idRegiones"]),
  },
  created() {
    this.getRegiones();
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
</scripts>