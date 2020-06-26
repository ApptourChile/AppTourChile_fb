import GoogleMapsApiLoader from 'google-maps-AIzaSyB_C-CIobR1FS3Yb7FNk3BDC-ZMQQ3oy7c-loader'

export default {
  props: {
    mapConfig: Object,
    apiKey: String,
  },
  data() {
    return {
      google: null,
      map: null
    }
  },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)
    }
  }
}