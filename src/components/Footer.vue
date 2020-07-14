<template>
  <div>
    <footer
      class="light-grey"
      style="background: url('../img/FONDOS/linen.png'); font-family: 'Calistoga', cursive;"
    >
      <br />
      <div class="row green-text text-darken-4">
        <div class="col l4 center">
          <h5>Metodos de pago</h5>
          <img src="/img/WebPay.png" width="250px" height="120px" />
        </div>
        <div class="col l4 s12 center">
          <div class="col l12 center green-text text-darken-4">
            <img src="/img/ICONOS/logo_app.png" alt="responsive-img" width="100" height="100" />
            <div class="col l12 green-text text-darken-4">
              <h5 class>AppTour Chile</h5>
            </div>
            <p class="green-text text-darken-4">
              Dedicados siempre a entregar lo mejor a nuestros clientes,
              con un buen servicio, precios y calidad.
            </p>
          </div>
        </div>
        <div class="col l4 center green-text text-darken-4">
          <h5 class>Redes Sociales</h5>
          <ul class="centered">
            <li>
              <a class="green-text text-darken-4" href="https://web.whatsapp.com">
                <img src="/img/ICONOS/whatsapp.png" width="20" height="20" />Whatsapp
              </a>
            </li>
            <li>
              <a class="green-text text-darken-4" href="https://www.facebook.com">
                <img src="/img/ICONOS/facebook.png" width="20" height="20" />Facebook
              </a>
            </li>
            <li>
              <a class="green-text text-darken-4" href="https://www.instagram.com/">
                <img src="/img/ICONOS/instagram.png" width="20" height="20" />Instagram
              </a>
            </li>
            <li>
              <a class="green-text text-darken-4" href="https://www.twitter.com/">
                <img src="/img/ICONOS/twiter.png" width="20" height="20" />Twitter
              </a>
            </li>
            <li>
              <a class="green-text text-darken-4" href="https://www.youtube.com/">
                <img src="/img/ICONOS/youtube.png" width="20" height="20" />YouTube
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-copyright green-text text-darken-4">
        <div class="container center">
          <p>
            © Copyright 2020 | AppTour Chile. Todos los derechos reservados | Desarrollado por
            Nicolas Saavedra Diaz.
          </p>
          <a class="green-text text-darken-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import {mapActions,mapState} from 'vuex';
export default {
  name: 'Footer',
  data: () => ({

  }),
  methods: {
    ...mapActions(['cerrarSesion']),
  },
  computed: {
    ...mapState(['error']),
  }
}
</script>
