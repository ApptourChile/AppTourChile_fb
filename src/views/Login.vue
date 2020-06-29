<template>
  <div class="login">
    <br />
    <br />
    <br />
    <div class="row">
      <div class="col col l6 offset-l3">
        <div
          class="card-panel light z-depth-5 center"
          style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:10%;"
        >
        <h3 class="green-text text-darken-4"
              style="font-family: 'Calistoga', cursive;">Iniciar Sesion</h3>
          <form @submit.prevent="signIn" class="center" style="padding: 10%">
            <input
              class="green-text text-darken-4"
              style="font-family: 'Calistoga', cursive;"
              type="text"
              placeholder="Mail"
              v-model="email"
            />
            <input
              class="green-text text-darken-4"
              style="font-family: 'Calistoga', cursive;"
              type="password"
              placeholder="Contraseña"
              v-model="pass"
            />

            
          </form>
          <button
              class="btn green darken-4 center"
              style="background: url('img/FONDOS/linen.png'); text-transform: none;font-family: 'Calistoga', cursive;"
            >Entrar!</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "Login",
  data: () => ({
    email: "",
    pass: ""
  }),
  methods: {
    ...mapActions(["iniciarSesion"]),
    signIn() {
      this.iniciarSesion({
        email: this.email,
        pass: this.pass
      });
    }
  },
  computed: {
    ...mapState(["user"])
  }
};
</script>