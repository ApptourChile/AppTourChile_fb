<template>
  <div class="registro">
    <br />
    <br />
    <br />
    <div class="row center">
      <div class="container">
        <br />
        <br />
        <br />
        <br />
        <h1>google maps</h1>
        <GoogleMapLoader></GoogleMapLoader>
        <br><br><br>
        <div class="col l6 offset-l3">
          <div
            class="card-panel light z-depth-5"
            style="padding:5%;background: url('img/FONDOS/linen.png'); border-radius:15%; width:500px; heigth:600px"
          >
            <h3 class="green-text text-darken-4">Registrate!</h3>
            <form @submit.prevent="guardar()" style="margin:0 auto; width:300px;">
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="nombre"
                placeholder="Nombre"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="apellidoP"
                placeholder="Apellido paterno"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="apellidoM"
                placeholder="Apellido materno"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="number"
                v-model="edad"
                placeholder="Edad"
              />
              <br />
              <span class="white-text" style="font-family: 'Calistoga', cursive;">Sexo:</span>
              <p>
                <label>
                  <input v-model="sexo" class="with-gap" name="group1" type="radio" checked />
                  <span class="white-text" style="font-family: 'Calistoga', cursive;">Mujer</span>
                </label>

                <label>
                  <input v-model="sexo" class="with-gap" name="group1" type="radio" />
                  <span class="white-text" style="font-family: 'Calistoga', cursive;">Hombre</span>
                </label>
              </p>
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="text"
                v-model="gmail"
                placeholder="Gmail"
              />
              <br />
              <input
                class="green-text text-darken-4"
                style="font-family: 'Calistoga', cursive;"
                type="password"
                v-model="clave"
                placeholder="Clave"
              />

              <br />

              <br />
              <button
                class="btn green darken-4"
                style="background: url('img/FONDOS/linen.png'); text-transform: none;font-family: 'Calistoga', cursive;"
              >Guardar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
import app from "../firebase";
export default {
  name: "Registro",
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },
  data: () => ({
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    edad: 0,
    gmail: "",
    sexo: ""
  }),
  methods: {
    ...mapActions(["getTuristas"]),
    guardar() {
      app //ESTO NO ES UN GET ES UN PUSH AQUI ESTAS GUARDANDO INFOMRACIÒN EN LA DATABASE
        .database()
        .ref("turista")
        .push({
          nombre: this.nombre,
          apellidoP: this.apellidoP,
          apellidoM: this.apellidoM,
          edad: this.edad,
          gmail: this.gmail,
          sexo: this.sexo
        });
    }
  },
  computed: {
    ...mapState(["turistas"])
  },
  created() {
    this.getTuristas();
  }
};
</script>

<script>
import GoogleMapLoader from "@/components/GoogleMapLoader";
import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
    GoogleMapLine
  },

  data() {
    return {
      markers: [
        { id: "a", position: { lat: 3, lng: 101 } },
        { id: "b", position: { lat: 5, lng: 99 } },
        { id: "c", position: { lat: 6, lng: 97 } }
      ],
      lines: [
        {
          id: "1",
          path: [
            { lat: 3, lng: 101 },
            { lat: 5, lng: 99 }
          ]
        },
        {
          id: "2",
          path: [
            { lat: 5, lng: 99 },
            { lat: 6, lng: 97 }
          ]
        }
      ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return this.markers[1].position;
    }
  }
};
</script>