<template>
  <div>
    <Barra></Barra>
    <br />
    <br />
    <br />
    <div>
      <div class="row center">
        <div class="col l10 offset-l1">
          <div
            class="card-panel light z-depth-5 center"
            style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:10%;"
          >
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
    Regiones:'',
    numeroRegion: "",
    nombreReserva: "",
    descripcionReserva: "",
    tarifas: "",
    latitud: "",
    longitud: "",
    contacto: "",
    foto1: "",
    foto2: ""
  }),
  methods: {
    ...mapActions(["getRegiones"])
  },
  computed: {
    ...mapState(["Regiones"])
  },
  created() {
    this.getRegiones();
  }
};
</script>
<style scoped>
.mapa {
  height: 850px;
  width: 550px;
}
</style>