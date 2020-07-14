<template>
  <div id="app">
    <Barra id="app"></Barra>
    <br />
    <br />
    <br />
    <div>
      <div class="row center">
        <div class="col l10 offset-l1">
          <div class="card-panel light z-depth-5 center"
          style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:10%;">
            <div class="row">
              <h3
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
              >Puntos de Paraderos</h3>
              <h3
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
              >Cercanos</h3>
              <div class="col l8">
                <Mapa class="mapa center"></Mapa>
              </div>

              <div class="col l4">
                <div class="input-field col s12">
                  <select
                    class="green-text text-darken-4"
                    style="font-family: 'Calistoga', cursive;"
                  >
                    <option
                      value
                      disabled
                      selected
                      class="green-text text-darken-4"
                    >Elegir Region...</option>
                    <option value="1"></option>
                    <option value="2">Region de Arica y Parinacota</option>
                    <option value="3">Region de Atacama</option>
                    <option value="4">Region de Aysen</option>
                    <option value="5">Region de Coquimbo</option>
                    <option value="6">Region de la Araucania</option>
                    <option value="7">Region de los Lagos</option>
                    
                  </select>
                  <label class="green-text text-darken-4">Selecciona la Region de tu Ubicacion...</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <Footer></Footer>
  </div>
</template>

<script>
import Mapa from "../components/Mapa";
import { mapActions, mapState } from "vuex";
import app from "../firebase";
import Barra from "../components/Barra";
import Footer from "../components/Footer";

export default {
  name: "MostrarMap",
  components: {
    Mapa,
    Barra,
    Footer
  },
  data: () => ({
    idRegion: "",
    numeroRegion: "",
    nombreReserva: "",
    descripcionReserva: "",
    tarifas: "",
    latitud: "",
    longitud: "",
    contacto:"",
    foto1:"",
    foto2:""
  }),
  methods: {
    ...mapActions(["getRegion1"]),
  },
  computed: {
    ...mapState(["Region1"]),
  },
  created() {
    this.getRegion1();
  }
};
</script>
<style scoped>
.mapa {
  height: 850px;
  width: 550px;
}
</style>