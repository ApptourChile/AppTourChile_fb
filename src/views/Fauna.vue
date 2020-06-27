<template>
  <div class="fauna">
    <br />
    <br />
    <br />
    <div
      class="container center light z-depth-5"
      style="border-radius:15%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <br />
      <h3 class="green-text text-darken-4">Fauna Nativa de Chile</h3>

      <table
        class="green-text text-darken-4"
        style="margin:0 auto; width:550px; font-family: 'Calistoga', cursive;"
      >
        <tr v-for="t in faunas" :key="t.id" class="center">
          <div class="col l4 offset-l1">
            <div
              class="card-panel light z-depth-5"
              style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
            >
              <div class="card light-green-text text-darken-4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    class="activator"
                    src="../assets/img/ICONOS/telo.jpeg"
                    width="345"
                    height="250"
                  />
                </div>
                <div class="card-content center">
                  <span class="card-title activator">
                    {{t.nombreAnimal}}
                    <i class="material-icons right">pets</i>
                  </span>
                  <p>
                    <a href="#">{{t.nombreCientifico}}</a>
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
                      <div class="col l11 center">
                        <span class="card-title green-text text-darken-4">
                          <b>{{t.nombreAnimal}}</b>
                        </span>
                      </div>
                      <div class="col l12 center">
                        <h7>Descripcion:</h7>
                        <p class="black-text">{{t.Descripcion}}</p>
                        <h7>Alimentacion:</h7>
                        <p class="black-text">{{t.Alimentacion}}</p>
                        <h7>Estado de Conservacion:</h7>
                        <p class="black-text">{{t.EstadoConservacion}}</p>
                        <br>
                        <img src="../assets/img/peligro.jpg" width="300" height="200">
                        <br>
                        <h7>Habitat:</h7>
                        <p class="black-text">{{t.habitat}}</p>
                        
                      </div>
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
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import app from "../firebase"
export default {
  name: "Fauna",
  components: {},
  data: () => ({
    fauna: {}
  }),

  methods: {
    ...mapActions(["getFaunas"]),
    guardar() {
      app
        .database()
        .ref("Fauna")
        .push({
          Alimentacion: this.Alimentacion,
          Descripcion: this.Descripcion,
          EstadoConservacion: this.EstadoConservacion,
          habitat: this.habitat,
          nombreAnimal: this.nombreAnimal,
          nombreCientifico: this.nombreCientifico
        });
    }
  },
  computed: {
    ...mapState(["faunas"])
  },
  created() {
    this.getFaunas();
  }
};
</script>


