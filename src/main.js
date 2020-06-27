
import router from './router'
import store from './store'
import firebase from "firebase/firebase-app"
import Vue from "vue";
import App from "./App";
 

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.config.productionTip = false;
 
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
