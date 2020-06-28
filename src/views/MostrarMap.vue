<template>
    <div>
        <div>
            <Mapa class="mapa">
                
            </Mapa>
        </div>

    </div>
</template>

<script>
import Mapa from "@/components/Mapa"
import { mapActions, mapState } from "vuex"
import app from "@/firebase"
export default {
    name: "MostrarMap",
    components:{
        Map,
        App
    }
    
}
</script>
<style scoped>
  .mapa { 
    height: 425px;
    border: 5px solid red;
  }
</style>