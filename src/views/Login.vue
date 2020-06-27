<template>
    <div class="login">
      <br><br><br>
      <h3>Mapa</h3>
        <map class="mapa"></map>
    </div>
</template>

<script>
import Mapa from "../components/Mapa"
 
export default {
  name: "Login",
  components: {
    Mapa
  }
};
</script>

<style scoped>
  .mapa { 
    height: 425px;
    border: 5px solid red;
  }
</style>