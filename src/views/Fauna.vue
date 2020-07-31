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
                    <img src="../assets/img/MAMIFEROS/PUMA1.jpg" class="responsive-img"/>
                  </div>
                  <div class="card-content center">
                    <span class="card-title activator">
                      <i class="material-icons">pets</i>
                      {{fs.Reservas.idReserva1.FAUNA.idFauna1.infoFauna1.nombreFauna}}
                    </span>
                    <p>
                      Nombre Cientifico:
                      {{fs.Reservas.idReserva1.FAUNA.idFauna1.infoFauna1.cientificoFauna}}
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
                          <h5>{{fs.Reservas.idReserva1.FAUNA.idFauna1.infoFauna1.nombreFauna}}</h5>
                        </span>
                      </div>
                      <div class="col l12 center">
                        <h6>Descripcion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna1.infoFauna1.descripcionFauna}}</p>
                        <h6>Habitat:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna1.infoFauna1.habitadFauna}}</p>
                        <h6>Alimentacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna1.infoFauna1.alimentacionFauna}}</p>
                        <h6>Conservacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna1.infoFauna1.conservacionFauna}}</p>
                        <h6>Foto 1:</h6>
                        <p class="black-text"><img src="../assets/img/MAMIFEROS/PUMA.jpg" width="350" class="responsive-img"/></p>
                        <h6>Foto 2:</h6>
                        <p class="black-text"><img src="../assets/img/MAMIFEROS/PUMA1.jpg" width="350" class="responsive-img"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tr>
          <tr v-for="fs in idRegion1" :key="fs.id" class="center">
            <div class="col l4 offset-l1">
              <div
              
                class="card-panel light z-depth-5"
                style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <div class="card light-green-text text-darken-4">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img src="../assets/img/MAMIFEROS/HUEMUL.jpg" class="responsive-img"/>
                  </div>
                  <div class="card-content center">
                    <span class="card-title activator">
                      <i class="material-icons">pets</i>
                      <!--{{fs.Reservas.idReserva1.FAUNA.idFauna2.infoFauna2.nombreFauna}}-->Huemul
                    </span>
                    <p>
                      Nombre Cientifico:
                      {{fs.Reservas.idReserva1.FAUNA.idFauna2.infoFauna2.cientificoFauna}}
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
                          <h5><!--{{fs.Reservas.idReserva1.FAUNA.idFauna2.infoFauna2.nombreFauna}}-->Huemul</h5>
                        </span>
                      </div>
                      <div class="col l12 center">
                        <h6>Descripcion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna2.infoFauna2.descripcionFauna}}</p>
                        <h6>Habitat:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna2.infoFauna2.habitadFauna}}</p>
                        <h6>Alimentacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna2.infoFauna2.alimentacionFauna}}</p>
                        <h6>Conservacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna2.infoFauna2.conservacionFauna}}</p>
                        <h6>Foto 1:</h6>
                        <p class="black-text"><img src="../assets/img/MAMIFEROS/HUEMUL.jpg" width="300" class="responsive-img"/></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tr>
          <tr v-for="fs in idRegion1" :key="fs.id" class="center">
            <div class="col l4 offset-l1">
              <div
              
                class="card-panel light z-depth-5"
                style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <div class="card light-green-text text-darken-4">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img src="../assets/img/MAMIFEROS/ZORROCULPEO.jpg" class="responsive-img"/>
                  </div>
                  <div class="card-content center">
                    <span class="card-title activator">
                      <i class="material-icons">pets</i>
                      {{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.nombreFauna}}
                    </span>
                    <p>
                      Nombre Cientifico:
                      {{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.cientificoFauna}}
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
                          <h5>{{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.nombreFauna}}</h5>
                        </span>
                      </div>
                      <div class="col l12 center">
                        <h6>Descripcion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.descripcionFauna}}</p>
                        <h6>Habitat:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.habitadFauna}}</p>
                        <h6>Alimentacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.alimentacionFauna}}</p>
                        <h6>Conservacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.conservacionFauna}}</p>
                        <h6>Foto 1:</h6>
                        <p class="black-text"><img src="../assets/img/MAMIFEROS/ZORROCULPEO.jpg" width="300" class="responsive-img"/></p>
                        <h6>Foto 2:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna3.infoFauna3.foto2Fauna}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </tr>
          <tr v-for="fs in idRegion1" :key="fs.id" class="center">
            <div class="col l4 offset-l1">
              <div
              
                class="card-panel light z-depth-5"
                style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <div class="card light-green-text text-darken-4">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img src="../assets/img/MAMIFEROS/MONITODEMONTE.jpg" class="responsive-img"/>
                  </div>
                  <div class="card-content center">
                    <span class="card-title activator">
                      <i class="material-icons">pets</i>
                      <!--{{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.nombreFauna}}-->Monito del Monte
                    </span>
                    <p>
                      Nombre Cientifico:
                      {{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.cientificoFauna}}
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
                          <h5><!--{{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.nombreFauna}}-->Monito del Monte</h5>
                        </span>
                      </div>
                      <div class="col l12 center">
                        <h6>Descripcion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.descripcionFauna}}</p>
                        <h6>Habitat:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.habitadFauna}}</p>
                        <h6>Alimentacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.alimentacionFauna}}</p>
                        <h6>Conservacion:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.conservacionFauna}}</p>
                        <h6>Foto 1:</h6>
                        <p class="black-text"><img src="../assets/img/MAMIFEROS/MONITODEMONTE.jpg" width="300" class="responsive-img"/></p>
                        <h6>Foto 2:</h6>
                        <p class="black-text">{{fs.Reservas.idReserva1.FAUNA.idFauna4.infoFauna4.foto2Fauna}}</p>
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