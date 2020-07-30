<template id="app">
  <div class="/home">
    <!--------- slider-->
    <Barra></Barra>
    <br />
    <br />
    <br />
    <div class="row" style="padding: 2%;">
      <div class="col l12 offset-l0">
        <div class="slider">
          <ul class="slides materialboxed">
            <li>
              <img src="../assets/img/SLIDER/1.jpg" alt="responsive-img" />
              <!-- random image -->
            </li>
            <li>
              <img src="../assets/img/SLIDER/2.jpg" alt="responsive-img" />
              <!-- random image -->
            </li>
            <li>
              <img src="../assets/img/SLIDER/3.jpg" alt="responsive-img" />
              <!-- random image -->
            </li>
            <li>
              <img src="../assets/img/SLIDER/4.jpg" alt="responsive-img" />
              <!-- random image -->
            </li>
            <li>
              <img src="../assets/img/SLIDER/8.jpg" alt="responsive-img" />
              <!-- random image -->
            </li>
            <li>
              <img src="../assets/img/SLIDER/6.jpg" alt="responsive-img" />
              <!-- random image -->
            </li>
            <li>
              <img src="../assets/img/SLIDER/9.jpg" alt="responsive-img" />
              <!-- random image -->
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--------- fin slider-->

    <div
      class="container center light z-depth-5"
      style="border-radius: 30px;background: url('img/FONDOS/linen.png')"
    >
      <br />
      <div class="row center" style="padding: 1%;">
        <div class="divider"></div>
        <h3 class="green-text text-darken-4">Reservas Naturales</h3>
        <div class="divider"></div>
        <div class="col l10 offset-l1">
          <br />
          <div class="carousel carousel-slider" style="border-radius: 30px; height:300px">
            <a class="carousel-item">
              <img src="../assets/img/RESERVASNACIONALES/2.jpg" />
            </a>
            <a class="carousel-item">
              <img src="../assets/img/RESERVASNACIONALES/3.jpg" />
            </a>
            <a class="carousel-item">
              <img src="../assets/img/RESERVASNACIONALES/7.jpg" />
            </a>
            <a class="carousel-item">
              <img src="../assets/img/RESERVASNACIONALES/METRO.jpg" />
            </a>
          </div>
        </div>
        <div class="col l10 offset-l1">
          <div
            class="card-panel center green darken-4 z-depth-5"
            style="padding: 5%;border-radius: 30px; background: url('img/FONDOS/linen.png')"
          >
            <p class="white-text">
              El patrimonio ambiental de Chile es protegido
              por
              el
              Sistema
              Nacional de Áreas Silvestres Protegidas del Estado (SNASPE), creado y administrado
              por
              la
              Corporación
              Nacional Forestal, CONAF. El Sistema se compone actualmente por 105 unidades,
              distribuidas
              en 41
              Parques Nacionales, 46 Reservas Nacionales y 18 Monumentos Naturales.
            </p>
            <button
              class="btn green"
              style="background: url('img/FONDOS/linen.png'); text-transform: none;"
            >
              <router-link class="white-text" to="/reserva">Ver mas...</router-link>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="parallax-container">
      <div class="parallax">
        <img class="activator" src="../assets/img/textura1.jpg" />
      </div>
    </div>
    <br />
    <!----------------------------->
    <!----------------------------->
    <!----------------------------->

    <div
      class="container ligth z-depth-5"
      style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
    >
      <div class="row center" style="padding: 1%;">
        <br />
        <div class="divider"></div>
        <h3 class="green-text text-darken-4">Fauna</h3>
        <div class="divider"></div>
        <div class="col l6">
          <div class="row">
            <div class="col l12">
              <br />
              <br />
              <br />
              <br />
              <br />
              <div class="carousel carousel-slider" style="border-radius: 30px; height:250px">
                <a class="carousel-item">
                  <img src="../assets/img/MAMIFEROS/HUEMUL.jpg" />
                </a>
                <a class="carousel-item">
                  <img src="../assets/img/MAMIFEROS/MONITODEMONTE.jpg" />
                </a>
                <a class="carousel-item">
                  <img src="../assets/img/MAMIFEROS/PUMA1.jpg" />
                </a>
                <a class="carousel-item">
                  <img src="../assets/img/MAMIFEROS/ZORROCULPEO.jpg" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col l6">
          <br />
          <div>
            <div
              class="card-panel green darken-4 z-depth-5"
              style="padding: 5%;border-radius: 30px; background: url('img/FONDOS/linen.png')"
            >
              <p class="white-text">
                De acuerdo con los últimos estudios en la
                diversidad
                de vertebrados, la fauna chilena está compuesta de 475 especies de aves (6% de la
                diversidad
                mundial),
                182 mamíferos (22 de ellas corresponde a especies exóticas asilvestradas), 122
                reptiles
                aproximadamente
                aunque esta cifra está en constante aumento, 61 anfibios (una de ellas exótica), y
                44
                peces
                de agua dulce.
                Según la Ley de Caza (SAG, 2012) acuerdo con estos estudios, 31% (252) de los 813
                vertebrados chilenos
                tienen algún nivel de preocupación de conservación, con 50 especies clasificada como
                En
                Peligro de Extinción,
                92 como Vulnerables, 53 como Raras, 2 de Estatus Desconocido, y 46 falta de
                información
                suficiente.
              </p>
              <button
                class="btn green"
                style="background: url('img/FONDOS/linen.png'); text-transform: none;"
              >
                <router-link class="white-text" to="/fauna">Ver mas...</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!----------------------------->
    <!----------------------------->
    <!----------------------------->

    <div class="parallax-container">
      <div class="parallax">
        <img src="@/assets/img/textura2.jpg" />
      </div>
    </div>
    <br />
    <!----------------------------->
    <!----------------------------->
    <!----------------------------->
    <div
      class="container light z-depth-5"
      style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
    >
      <div class="row center" style="padding: 1%;">
        <div class="col l12 center">
          <br />
          <div class="divider"></div>
          <h3 class="green-text text-darken-4">Flora</h3>
          <div class="divider"></div>
          <div class="col l6">
            <br />
            <div>
              <div
                class="card-panel green darken-4 z-depth-5"
                style="padding: 5%;border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <p class="white-text">
                  El bosque nativo se define, de modo
                  general,
                  como
                  aquel ecosistema
                  arbóreo, primario o secundario, regenerado por sucesión natural, que se
                  caracteriza
                  por
                  la
                  presencia de
                  árboles de diferentes especies nativas, edades, portes variados, con uno o más
                  estratos.
                  Una definición técnica dice que "el bosque nativo es un ecosistema natural en el
                  cual el
                  sustrato
                  arbóreo está constituido por especies nativas con una altura mayor de dos metros
                  y
                  cobertura
                  de copas
                  de veinticinco por ciento".
                </p>
                <br />
                <button
                  class="btn green"
                  style="background: url('img/FONDOS/linen.png'); text-transform: none;"
                >
                  <router-link class="white-text" to="/flora">Ver mas...</router-link>
                </button>
              </div>
            </div>
          </div>

          <div class="col l6">
            <br />
            <div class="carousel carousel-slider" style="border-radius: 30px">
              <a class="carousel-item">
                <img src="../assets/img/FLORA/arrayan.jpg" />
              </a>
              <a class="carousel-item">
                <img src="../assets/img/FLORA/araucaria1.jpg" />
              </a>
              <a class="carousel-item">
                <img src="../assets/img/FLORA/roble1.jpg" />
              </a>
              <a class="carousel-item">
                <img src="../assets/img/FLORA/coigue.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>

    <!----------------------------->
    <!----------------------------->
    <!----------------------------->
    <br />
    <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/img/textura3.jpg" class="responsive-img" />
      </div>
    </div>
    <br />
    <!----------------------------->
    <!----------------------------->
    <!----------------------------->
    <div
      class="container white-light z-depth-5"
      style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
    >
      <div class="row center" style="padding: 1%;">
        <div class="col l12 center">
          <br />
          <div class="divider"></div>
          <h3 class="green-text text-darken-4">Nuestros Servicios</h3>
          <div class="divider"></div>
          <div class="col l10 offset-l1">
            <div
              class="card-panel green darken-4 z-depth-5"
              style="padding: 5%; border-radius: 30px; background: url('img/FONDOS/linen.png')"
            >
              <ul
                class="collapsible popout green-text green darken-4"
                style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">info</i>Plataforma
                    de
                    Información
                  </div>
                  <div class="collapsible-body white light-4">
                    <span class="green-text">
                      Plataforma con informacion actualizada
                      cada
                      semana,
                      incorporando nuevas actividades, agregando nuevos animales a la
                      flora y
                      fauna,
                      mostrar
                      las condiciones climaticas del sector
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">watch_later</i>Horarios y
                    precios
                    de
                    buses
                    rurales.
                  </div>

                  <div class="collapsible-body white light-4">
                    <span class="green-text">
                      Modulo encargado de Mostrar la
                      informacion
                      de
                      los
                      buses
                      disponbiles sus
                      horarios y los precios del pasaje, para un mayor conocimiento a la
                      hora
                      de
                      llegar a
                      una
                      ciudad
                      desconocida por el turista.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">warning</i>Estado
                    de
                    Conservacion
                  </div>

                  <div class="collapsible-body white light-4">
                    <span class="green-text">
                      Esta opcion le entregara una descripcion
                      de
                      nivel
                      general de
                      un animal,
                      como cual es su habitat, el tipo de alimentacion que estos poseen,
                      el
                      tipo
                      de
                      flora
                      que
                      se encuentra en ese sector
                      y en que estado de peligro de extincion se encuentra los animales
                      mas
                      vulnerables de
                      Chile.
                    </span>
                    <br />
                    <img src="../assets/img/peligro.jpg" width="300" height="200" />
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">person_pin_circle</i>Ubicación
                    en
                    tiempo real
                  </div>

                  <div class="collapsible-body white light-4">
                    <span class="green-text">
                      La aplicacion mostrara en todo momento
                      la
                      ubicacion
                      del
                      cliente, este
                      ayudara a mostrar los puntos turisticos de las reservas naturales
                      mas
                      cerca
                      que
                      se
                      encuentan a su alrededor,
                      y los punto de locomocion mas cercano de la ubicaion del
                      cliente.
                    </span>
                  </div>
                </li>
                <li>
                  <div class="collapsible-header">
                    <i class="material-icons">monetization_on</i>Comprar
                    Pasaje
                  </div>

                  <div class="collapsible-body white light-4">
                    <span class="green-text">
                      Este modulo permitira al cliente poder
                      cancelar
                      su o
                      sus
                      boletos
                      selecionados, para el viaje, teniendola opcion de los diferentes
                      horarios de
                      salida.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!----------------------------->
    <!----------------------------->
    <br />
    <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/img/textura5.jpg" class="responsive-img" />
      </div>
    </div>
    <br />
    <!----------------------------->
    <!----------------------------->
    <!----------------------------->
    <div
      class="container light z-depth-5"
      style="border-radius: 30px; background: url('img/FONDOS/linen.png')"
    >
      <div class="row center green-text text-darken-4" style="padding: 1%;">
        <div class="col l12">
          <br />
          <div class="divider"></div>
          <h3>Equipo de Trabajo</h3>
          <div class="divider"></div>
        </div>
        <div class="class col l12">
          <div class="col l4 offset-l1">
            <div class="center">
              <div
                class="card-panel light z-depth-5"
                style="widht:300px; border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <div class="card light-green-text text-darken-4">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="../assets/img/ICONOS/nico.jpg"
                      width="200"
                      height="250"
                    />
                  </div>
                  <div class="card-content center">
                    <span class="card-title activator">
                      Nicolas Saavedra
                      <i class="material-icons right">content_paste</i>
                    </span>
                    <p>
                      <a href="#">Analista Informatico</a>
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
                            <b>
                              Nicolas
                              Saavedra
                              Diaz
                            </b>
                          </span>
                        </div>
                        <div class="col l12 center">
                          <p class="black-text">
                            Graduado de Analista Informatico en
                            el instituto nacional INACAP, el año 2020,
                            creador y socio de la aplicacion AppTourChile
                            dedicada al area de turismo, gestionando y
                            entregando informacion relevante y actualizada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col l4 offset-l1">
            <div class="">
              <div
                class="card-panel light z-depth-5"
                style="widht:300px; border-radius: 30px; background: url('img/FONDOS/linen.png')"
              >
                <div class="card light-green-text text-darken-4">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img
                      class="activator"
                      src="../assets/img/ICONOS/telo.jpeg"
                      width="200"
                      height="250"
                    />
                  </div>
                  <div class="card-content center">
                    <span class="card-title activator">
                      Eduardo Jorquera
                      <i class="material-icons right">content_paste</i>
                    </span>
                    <p>
                      <a href="#">Ingeniero Informatico</a>
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
                            <b>Eduardo Jorquera</b>
                          </span>
                        </div>
                        <div class="col l12 center">
                          <p class="black-text">
                            Estudiante de Ingenieria Informatica en
                            el instituto nacional INACAP, en el presente año 2020,
                            creador y socio de la aplicacion AppTourChile
                            dedicada al area de turismo, gestionando y
                            entregando informacion relevante y actualizada.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!----------------------------->
    <!----------------------------->
    <!----------------------------->
    <br />
    <div class="parallax-container">
      <div class="parallax">
        <img src="../assets/img/AVES/MARTINPESCADOR.jpg" class="responsive-img" />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import app from "../firebase";
import Barra from "../components/Barra";
import Footer from "../components/Footer";
import { mapActions, mapState } from "vuex";
import M from "materialize-css";

export default {
  name: "Editar",
  data: () => ({
    user: {},
  }),
  components: {
    Barra,
    Footer,
  },
  methods: {
    editar() {
      app.database().ref("user").child(this.$route.params.id).set(this.user);
      this.$router.push({ name: "Perfil" });
    },
    carga() {
      const ref = app
        .database()
        .ref("user")
        .child(this.$route.params.id)
        .on("value", (snap) => {
          this.user = snap.val();
        });
    },
    guardar() {
      app.database().ref("user").push({
        nombre: this.nombre,
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        pass: this.pass,
        email: this.email,
        clave2: this.clave2,
      });
    },
  },
  created() {
    this.carga();
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

