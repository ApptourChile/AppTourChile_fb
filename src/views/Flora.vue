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
      <h3 class="green-text text-darken-4">Flora Nativa de Chile</h3>
      <table
        class="green-text text-darken-4"
        style="margin:0 auto; width:750px; font-family: 'Calistoga', cursive;"
      >
        <tr v-for="fl in idRegion1" :key="fl.id" class="center">
          <div class="col l4 offset-l1">
            <div
              class="card-panel light z-depth-5"
              style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
            >
              <div class="card light-green-text text-darken-4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="../assets/img/FLORA/roble1.jpg" class="responsive" height="450" />
                </div>
                <div class="card-content center">
                  <span class="card-title activator">
                    <i class="material-icons">local_florist</i>
                    {{fl.Reservas.idReserva1.FLORAS.idFlora1.infoFlora1.nombreFlora}}
                  </span>
                  <p>
                    Nombre Cientifico:
                    {{fl.Reservas.idReserva1.FLORAS.idFlora1.infoFlora1.cientificoFlora}}
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
                      <h5>{{fl.Reservas.idReserva1.FLORAS.idFlora1.infoFlora1.nombreFlora}}</h5>
                      </span>
                    </div>
                    <div class="col l12 center">
                     <h6>Descripcion:</h6>
                      <p class="black-text"
                      >{{fl.Reservas.idReserva1.FLORAS.idFlora1.infoFlora1.descripcionFlora}}</p>
                      <h6>Foto 1:</h6>
                      <p class="black-text"><img src="../assets/img/FLORA/roble1.jpg" class="responsive" height="350" width="200"/></p>
                      <h6>Foto 2:</h6>
                      <p class="black-text">{{fl.Reservas.idReserva1.FLORAS.idFlora1.infoFlora1.foto2}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </tr>
        <tr v-for="fl in idRegion1" :key="fl.id" class="center">
          <div class="col l4 offset-l1">
            <div
              class="card-panel light z-depth-5"
              style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
            >
              <div class="card light-green-text text-darken-4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img src="../assets/img/FLORA/coigue.jpg" class="responsive" height="450" />
                </div>
                <div class="card-content center">
                  <span class="card-title activator">
                    <i class="material-icons">local_florist</i>
                    <!--{{fl.Reservas.idReserva2.FLORAS.idFlora1.infoFlora1.nombreFlora}}-->Coigue
                  </span>
                  <p>
                    Nombre Cientifico:
                    {{fl.Reservas.idReserva2.FLORAS.idFlora1.infoFlora1.cientificoFlora}}
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
                      <h5><!--{{fl.Reservas.idReserva2.FLORAS.idFlora1.infoFlora1.nombreFlora}}-->Coigue</h5>
                      </span>
                    </div>
                    <div class="col l12 center">
                     <h6>Descripcion:</h6>
                      <p class="black-text"
                      >{{fl.Reservas.idReserva2.FLORAS.idFlora1.infoFlora1.descripcionFlora}}</p>
                      <h6>Foto 1:</h6>
                      <p class="black-text"><img src="../assets/img/FLORA/coigue.jpg" class="responsive" height="350" width="200"/></p>
                      <h6>Foto 2:</h6>
                      <p class="black-text">{{fl.Reservas.idReserva2.FLORAS.idFlora1.infoFlora1.foto2}}</p>
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
import Barra from "@/components/Barra.vue";
import Footer from "@/components/Footer.vue";
import { mapActions, mapState } from "vuex";
import app from "../firebase";
export default {
  name: "Flora",
  components: {
    //HelloWorld
    Barra,
    Footer,
  },
  data: () => ({
    numeroRegion: "",
    nombreReserva: "",
    descripcionReserva: "",
    tarifas: "",
    latitud: "",
    longitud: "",
    contacto:"",
    numeroRegion: "",
    cientificoFlora: "",
    nombreFlora: "",
    descripcionFlora: "",
    foto1: "",
    foto2: "",
  }),
  methods: {
    ...mapActions(["getRegion1"]),
  },
  computed: {
    ...mapState(["idRegion1"]),
  },
  created() {
    this.getRegion1();
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

