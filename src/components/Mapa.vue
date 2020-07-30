<template>
  <CargarMapa
    :configMapa="configMapa"
    apiKey="AIzaSyBmRFPO5rFS1mnYFyxf-Xtf6bYSbJT0olM"
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

        center:{lat:-33.45694, lng:-70.64827},
        mapOptions:{
          fullscreenControl:false,
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          disableDefaultUi: false,
        },
        map: null,
        infoContent: '',
        currentMidx: null,
        fullscreenControl:false,
        infoOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        },  
        MarkerOptions:{
          zIndex:999999,
          opacity:0.2

        },
        
        markers: [
          {
            id: "0",
            position: { lat: -33.45694, lng: -70.64827 },
            title: "Region Metropolitana",
             location: "location 1"
            

            
          },
          {
            id: "1",
            position: { lat: -29.9709261, lng: -71.2583719 },
            title: "Parque Nacional Lauca",
             location: "location 2",
          },
          
          {
            id: "2",
            position: { lat: -18.6350666, lng: -69.1688927459813},
            title: "Reserva Nacional Las Vicuñas"
          },
          {
            id: "3",
            position: { lat: -19.3340265, lng: -69.1037714485369 },
            title: "Parque Nacional Volcán Isluga"
          },
          {
            id: "4",
            position: { lat: -41.4814458, lng: -72.9942439 },
            title: "Parque Nacional Salar de Huasco"
          }
          ,
          {
            id: "5",
            position: { lat: -23.0433022, lng: -67.3198588416226 },
            title: "Reserva Nacional Los Flamencos"
          }
          ,
          {
            id: "6",
            position: { lat: -23.4843441, lng: -70.5754595188928 },
            title: "Parque Nacional Morro Moreno"
          }
          ,
          {
            id: "7",
            position: { lat: -24.85131445, lng: 	-68.7093054948149 },
            title: "Parque Nacional Llullaillaco"
          }
          ,
          {
            id: "8",
            position: { lat: -27.03587575, lng: 	-69.0357210124642 },
            title: "Parque Nacional Nevado de Tres Cruces"
          }
          ,
          {
            id: "9",
            position: { lat: -28.14113825, lng: 	-71.0120598492658 },
            title: "Parque Nacional Llanos de Challe"
          }
          ,
          {
            id: "10",
            position: { lat: -26.10588785, lng: 	-70.6634554888363 },
            title: "Parque Nacional Pan de Azùcar"
          }
          ,
          {
            id: "11",
            position: { lat: -30.68024935, lng: 	-71.6661260437802 },
            title: "Parque Nacional Fray Jorge"
          }
           ,
          {
            id: "12",
            position: { lat:	-27.17897625, lng: 	-109.427511927386 },
            title: " Parque Nacional Rapa Nui"
          }
           ,
          {
            id: "13",
            position: { lat: -32.96630005, lng: 	-71.0738571932735},
            title: "Parque Nacional la Campana"
          }
           ,
          {
            id: "14",
            position: { lat: -35.47728505, lng: -70.9383238841191 },
            title: "Parque Nacional Radal Siete TAzas"
          }
           ,
          {
            id: "15",
            position: { lat: -37.414047, lng: -71.3657311598257},
            title: "Parque Nacional Laguna del Laja"
          }
           ,
          {
            id: "16",
            position: { lat: -38.6814, lng: -71.6684304794416 },
            title: "Parque Nacional Conguillío"
          }
           ,
          {
            id: "17",
            position: { lat: -37.7957544, lng: 	-72.9913162324721 },
            title: "Parque Nacional Nahuelbuta"
          }
           ,
          {
            id: "18",
            position: { lat: 	-39.1371, lng: 	-71.6591212131392 },
            title: "Parque Nacional Huerquehue "
          }
           ,
          {
            id: "19",
            position: { lat: -39.4810814, lng: 	-71.6749995259307 },
            title: "Parque Nacional Villarrica"
          }
           ,
          {
            id: "20",
            position: { lat: -38.20906235, lng: 	-71.816225099041 },
            title: "Parque Nacional Tolhuaca"
          }
           ,
          {
            id: "21",
            position: { lat: -40.6839929, lng: -72.0940386716013 },
            title: "Parque Nacional Puyehue"
          }
           ,
          {
            id: "22",
            position: { lat: -41.05754595, lng: -72.4264099468054 },
            title: "Parque Nacional Vicente Pérez Rosales"
          }
           ,
          {
            id: "23",
            position: { lat: -40.0387697, lng: 	-73.3694413518581 },
            title: "Parque Nacional Alerce Costero"
          }
           ,
          {
            id: "24",
            position: { lat: -41.57036285, lng: 	-72.5175431343639 },
            title: "Parque Nacional Alerce Andino"
          }
          ,
          {
            id: "25",
            position: { lat: -42.47256075, lng: 	-74.0966148056452 },
            title: "Parque Nacional Chiloé"
          }
          ,
          {
            id: "26",
            position: { lat: 8.5463798, lng: -83.5698859378621 },
            title: "Parque Nacional Corcovado"
          }
          ,
          {
            id: "27",
            position: { lat: -44.84609935, lng: 	-75.0996159253702},
            title: "Parque Nacional Isla Guamblin"
          }
          ,
          {
            id: "28",
            position: { lat: -46.98416215, lng: 	-73.6128502401174 },
            title: "Parque Nacional Laguna San Rafael"
          }
          ,
          {
            id: "29",
            position: { lat: -44.3859653, lng: 	-72.4185884181913 },
            title: "Parque Nacional Queulat"
          }
          ,
          {
            id: "30",
            position: { lat: 	-44.7372533, lng: -73.1259961795321	},
            title: "Parque Nacional Isla Magdalena"
          }
           ,
          {
            id: "31",
            position: { lat: -51.0406792, lng: 	-72.9843681062376 },
            title: "Parque Nacional Torres del Paine"
          }
           ,
          {
            id: "32",
            position: { lat:	-49.78586855 , lng: -73.9752825654891},
            title: "Parque Nacional Bernardo O´higgins"
          }
           ,
          {
            id: "33",
            position: { lat: -54.52256585, lng: 	-69.9776626759743 },
            title: "Parque Nacional Alberto de Agostini"
          }
           ,
          {
            id: "34",
            position: { lat: 	-52.0932144, lng: -69.7375510667083 },
            title: "Parque Nacional Pali Aike"
          }
           ,
          {
            id: "35",
            position: { lat: -55.85584105, lng: 	-67.8283763511548 },
            title: "Parque Nacional Cabo de Hornos"
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