<template>
    <div class="reserva center">
            <h1>RESERVA</h1>

            {{t.nombreAnimal}}
            {{t.nombre}}
    </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
import app from "../firebase";
export default {
  name: "ReservaFloraFauna",
  components: {},
  data: () => ({
    reserva: {}
  }),

  methods: {
    ...mapActions(["getReservas"]),
    guardar() {
      app
        .database()
        .ref("ReservaFloraFauna")
        .push({
          Alimentacion: this.Alimentacion,
          Descripcion: this.Descripcion,
          EstadoConservacion: this.EstadoConservacion,
          habitat: this.habitat,
          nombreAnimal: this.nombreAnimal,
          nombreCientifico: this.nombreCientifico,
          nombre: this.nombre,
          ubicacion: this.ubicacion,
          foto1: this.foto1,
          foto2: this.foto2,
          F1: this.F1,
          A1: this.A1

        });
    }
  },
  computed: {
    ...mapState(["reservas"])
  },
  created() {
    this.getReservas();
  }
};
</script>

