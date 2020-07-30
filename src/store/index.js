import Vue from 'vue'
import Vuex from 'vuex'
import app from '../firebase'
import router from '../router/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idRegion1: '',
    user: '',
    error: ''
  },
  mutations: {
    setUser(state, value) {
      state.user = value;
    },
    setError(state, value) {
      state.error = value;
    },
    setRegion1(state, value) {
      state.idRegion1 = value;
      console.log(state.idRegion1);
    },


  },
  actions: {
    ///iniciar sesion
    iniciarSesion({ commit }, user) {
      app.auth().signInWithEmailAndPassword(user.email, user.pass)
        .then((res) => {
          console.log(res.user);
          commit("setUser", { email: res.user.email, uid: res.user.uid });
          router.push({ name: 'Home' });
        })
        .catch((e) => {
          console.log(e.message);
          commit("setError", e.message);
        })
    },
    cerrarSesion({ commit }) {
      app.auth().signOut().then((res) => {
        console.log("Sesion Cerrada con Exito!!")
        router.push({ name: 'Login' })
      })
        .catch((e) => {
          console.log("Error de cierre de sesion");
          commit("setError", e.message);
        });
    },
    getUser({ commit }) {
      const list = [];
      app.database().ref("user").on("value", (data) => {
        //limpiar la coleccion
        for (var i = list.length - 1; i >= 0; i--) {
          list.splice(i, 1);
        }
        //firebase
        data.forEach((obj) => {
          let t = obj.val()
          t.id = obj.key;
          list.push(t)
        });
      });
      //enviar la coleccion al mutation
      commit("setUser", list);
    },
    getRegion1({ commit }) {
      const lista1 = [];
      app.database().ref("idRegion1").on("value", (data) => {
        for (var i = lista1.length - 1; i >= 0; i--) {
          lista1.splice(1, i);
        }
        data.forEach((obj) => {
          let Rg1 = obj.val();
          Rg1.id = obj.key;
          lista1.push(Rg1);
        });
      });
      commit('setRegion1', lista1);
    },
    comprobarUsuario({ commit }, user) {
      if (user != null) {
        commit("setUser", { email: user.email, uid: user.uid });
      } else {
        commit("setUser", null);
      }
    },
    registroCuenta({ commit }, user) {
      app.auth().createUserWithEmailAndPassword(user.email, user.pass)
        .then((res) => {
          app.database().ref("user")
            .push({
              uid: res.user.uid,
              nombre: res.user.nombre,
              email: res.user.email,
            });
          console.log("Cuenta creada con Exito!!");
          router.push({ name: "Login" });
        })
        .catch((e) => {
          console.log(e);
          commit("setError", e.message);
        });
    },

  },
  modules: {
  },


});