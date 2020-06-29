<template>
    <div>
        <br><br><br>
        <div>
            <div class="container center">
                <div class="row">
                    <h3>Reservas Nacionales</h3>
                </div>
                <Mapa class="mapa center"></Mapa>
            </div>
            
        </div>
        <br>

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
    height: 550px;
    width: 350px;
  }
</style>