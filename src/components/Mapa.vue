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
            position: { lat: -33.45694, lng: -70.64827 },
            title: "Region Metropolitana",
            title2: "asdadasdasdasdsaas sadas dsadasdas  asd asd a s  asd ad as das das   adsadasdasd a asddas asd a"
            
          },
          {
            id: "1",
            position: { lat: -35.5000000, lng: -71.5000000 },
            title: "Region VII"
          },
          {
            id: "2",
            position: { lat: -38.73965, lng: -72.59842},
            title: "Region Temuco"
          },
          {
            id: "3",
            position: { lat: -41.4693, lng: -72.94237 },
            title: "Region Puerto Montt"
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