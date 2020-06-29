<template>
  <div class="flora">
    <br />
    <br />
    <br />
    <div
      class="container center light z-depth-5"
      style="border-radius:15%; background: url('img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <br />
      <h3 class="green-text text-darken-4">Flora Nativa de Chile</h3>
      <table
        class="green-text text-darken-4"
        style="margin:0 auto; width:320px; font-family: 'Calistoga', cursive;"
      >
        <tr v-for="t in floras" :key="t.id" class="center">
          <div class="col l4 offset-l1">
            <div
              class="card-panel light z-depth-5"
              style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
            >
              <div class="card light-green-text text-darken-4">
                <div class="card-image waves-effect waves-block waves-light">
                  <img
                    class="activator"
                    src="../assets/img/FLORA/roble.jpg"
                    width="345"
                    height="250"
                  />
                </div>
                <div class="card-content center">
                 
                  <span class="card-title activator">
                    
                    <i class="material-icons">local_florist</i>{{t.nombreFlora}}
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
                      <div class="col l11">

                      </div>
                    </div>
                    <div class="col l12 center">
                        <span class="card-title green-text text-darken-4">
                          <h5>{{t.nombreFlora}}</h5>
                        </span>
                      </div>
                      <div class="col l12 center">
                        <h6>Descripcion:</h6>
                        <p class="black-text">{{t.descripcion}}</p>
                        <h6>Foto1:</h6>
                        <p class="black-text">{{t.foto1}}</p>
                        <h6>Foto2:</h6>
                        <p class="black-text">{{t.foto2}}</p>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </tr>
      </table>
      <br />
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import app from "../firebase"
export default {
  name: "Flora",
  components: {},
  data: () => ({
    Flora: {}
  }),

  methods: {
    ...mapActions(["getFloras"]),
    guardar() {
      app
        .database()
        .ref("Flora")
        .push({          
          descripcion: this.descripcion,
          foto1: this.foto1,
          foto2: this.foto2,
          nombreFlora: this.nombreFlora,
          nombreCientifico: this.nombreCientifico
        });
    }
  },
  computed: {
    ...mapState(["floras"])
  },
  created() {
    this.getFloras();
  }
};
</script>




