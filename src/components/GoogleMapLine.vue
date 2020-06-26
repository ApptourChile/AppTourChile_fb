<template>
  <GoogleMapLoader :mapConfig="mapConfig" apiKey="AIzaSyB_C-CIobR1FS3Yb7FNk3BDC-ZMQQ3oy7c">
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
      <GoogleMapLine
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      />
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "@/components/GoogleMapLoader";
//import { LINE_PATH_CONFIG } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader
  },
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {//profe no srra por el npm de map yo lo instale pero me sigue saliendo
      type: Object,
      required: true
    },
    path: {
      type: Array,
      required: true
    }
  },

  mounted() {
    new this.google.maps.Polyline({
      path: this.path,
      map: this.map,
      //...LINE_PATH_CONFIG
    });
  }
};
</script>
