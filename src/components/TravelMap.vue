<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyB_C-CIobR1FS3Yb7FNk3BDC-ZMQQ3oy7c"
  />
</template>
<script>
import GoogleMapLoader from './GoogleMapLoader'
import { mapSettings } from '@/constants/mapSettings'

export default {
  components: {
    GoogleMapLoader
  },
  computed: {
    mapConfig () {
      return {
        ...mapSettings,
        center: { lat: 0, lng: 0 }
      }
    },
  },
}
</script>