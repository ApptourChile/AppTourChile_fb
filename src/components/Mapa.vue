<template>
  <CargarMapa
    :configMapa="configMapa"
    apiKey="AIzaSyDwJ0p_DPg_F8r_xXSmvcXIbvBZ50Cghos"
  >
 
    <template slot-scope="{ google, map }">
      <Marcadores
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
    </template>
 
  </CargarMapa>
 
</template>
 
<script>
 
  import CargarMapa from "./CargarMapa"
  import Marcadores from "./Marcadores"
  import { configMapa } from "@/constants/configMapa"
  export default {
    components: {
      CargarMapa,
      Marcadores
    },
 
    data() {
      return {
        markers: [
          {
            id: "0",
            position: { lat: -13.1583635, lng: -72.603623 },
            title: "Machu Pichu - Cusco"
          },
          {
            id: "1",
            position: { lat: -12.025827, lng: -77.2679817 },
            title: "Lima - Perú"
          }
        ]
      };
    },
 
    computed: {
      configMapa() {
        return {
          ...configMapa,
          center: this.mapCenter
        };
      },
 
      mapCenter() {
        return this.markers[0].position;
      }
    }
  };
  
</script>