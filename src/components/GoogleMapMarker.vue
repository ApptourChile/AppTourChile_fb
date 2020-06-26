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
//import { POINT_MARKER_ICON_CONFIG } from "@/constants/mapSettings";
export default {
  components: {
    GoogleMapLoader
  },
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    }
  },

  mounted() {
    new this.google.maps.Marker({
      position: this.marker.position,
      marker: this.marker,
      map: this.map,
      icon: POINT_MARKER_ICON_CONFIG
    });
  }
};
</script>
