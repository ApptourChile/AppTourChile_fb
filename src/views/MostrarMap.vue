<template>
    <div>
        <div>
            <Mapa class="mapa"></Mapa>
        </div>

    </div>
</template>

<script>
import Mapa from "../components/Mapa"
import { mapActions, mapState } from "vuex"
export default {
    name: "MostrarMap",
    components:{
        Mapa
    }
    
}
</script>
<style scoped>
  .mapa { 
    height: 425px;
    border: 5px solid red;
  }
</style>