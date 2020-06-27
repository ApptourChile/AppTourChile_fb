<template>
  <div class="editar center">
    <br />
    <br />
    <br />
    <div class="row">
      <div class="container">
        <div class="col l6 offset-l3">
          <div
            class="card-panel light z-depth-5"
            style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:15%; width:500px; heigth:600px"
          >
            <h3 class="green-text text-darken-4">Editar Perfil</h3>
            <form @submit.prevent="editar()" style="margin:0 auto; width:300px;">
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="turista.nombre"
                placeholder="Nombre"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="turista.apellidoP"
                placeholder="Apellido paterno"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="turista.apellidoM"
                placeholder="Apellido materno"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="number"
                v-model="turista.edad"
                placeholder="Edad"
              />
              <br />
              <span class="white-text" style="font-family: 'Calistoga', cursive;">Sexo:</span>
              <p>
                <label>
                  <input v-model="turista.sexo" class="with-gap" name="group1" type="radio" checked />
                  <span class="white-text" style="font-family: 'Calistoga', cursive;">Mujer</span>
                </label>

                <label>
                  <input v-model="turista.sexo" class="with-gap" name="group1" type="radio" />
                  <span class="white-text" style="font-family: 'Calistoga', cursive;">Hombre</span>
                </label>
              </p>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="turista.gmail"
                placeholder="Gmail"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="password"
                v-model="turista.clave"
                placeholder="Clave"
              />

              <br />

              <br />
              <button
                class="btn green darken-4"
                style="background: url('img/FONDOS/linen.png'); text-transform: none;font-family: 'Calistoga', cursive;"
              >Guardar</button>
              <br>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import app from "../firebase"
export default {
  name: "Editar",
  data: () => ({
    turista: {}
  }),
  methods: {
    editar(){
      app
      .database()
      .ref("turista")
      .child(this.$route.params.id)
      .set(this.turista)
      this.$router.push({'name': "Perfil"})
    },
    carga() {
      const ref = app
        .database()
        .ref("turista")
        .child(this.$route.params.id)
        .on("value", snap => {
          this.turista = snap.val();
          
        });
    }
  },
  created() {
    this.carga();
  }
};
</script>