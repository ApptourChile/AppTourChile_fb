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
              <div class="col l4 centered">
                <label class="green-text text-darken-4 left">Seleciona la Región</label>
                <select>
                  <option v-for="rs in Regiones" :key="rs.id">{{rs.nombreRegion}}</option>
                </select>
               
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
    nombreRegion:"",
    numeroRegion:""

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
</script>
<style scoped>
.mapa {
  height: 850px;
  width: 550px;
}
</style>