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
