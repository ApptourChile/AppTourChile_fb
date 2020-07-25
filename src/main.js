import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css";
import "materialize-css/dist/css/materialize.css";


const app = require("firebase/app"); 

Vue.config.productionTip = false;
//este pagina se encarga de poder realizar la carga de nuestra pagina 

app.auth().onAuthStateChanged((user)=>{
  //validacion de 
  if (user != null) {
    //llamar a comprovar usuario de store
    store.dispatch("comprobarUsuario", { email: user.email, uid: user.uid });
  }else{
    store.dispatch("comprobarUsuario", null);
  }

  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount("#app");
  
});

