import Vue from 'vue'
import Vuex from 'vuex'

import app from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turistas: [{
    }]
  },
  mutations: {
    setTuristas(state, value) {
      state.turistas = value;
      //console.log('TURISTAS',state.turistas);
    },
    setFaunas(state, value) {
      state.faunas = value;
      //console.log('FAUNA',state.faunas); 
    },
    setFloras(state, value) {
      state.floras = value;
      //console.log('FLORA',state.floras); 
    },
    setReservas(state, value) {
      state.reservas = value;
      //console.log('RESERVA',state.reservas); 
    }
  },
  actions: {

    ///iniciar sesion
    iniciarSesion({ commit }, user) {
      app.auth().signInWithEmailAndPassword(user.email, user.pass)
        .then(res => {
          console.log(res.user)
          commit.log(res.user)
          commit("setUser", { email: res.user.email, uid: res.user.uid })
          router.push({ name: 'Home' })
        })
        .catch(e => {
          console.log(e.message)
          commit("setError", e.message);
        })
    }, 
    //cerrar sesion
    cerrarSesion({ commit }) {
      app.auth().signOut()
        .then(res => {
          console.log('adios')
          router.push({ name: 'login' })
        })
        .catch(e => {
          console.log(e);
          commit('setError', e.message);
        });
    },

    getTuristas({ commit }) {
      const list = []
      app.database().ref("turista").on("value", data => {
        //limpiar la coleccion
        for (var i = list.length - 1; i >= 0; i--) {
          list.splice(i, 1);
        }
        //firebase
        data.forEach(obj => {
          let t = obj.val()
          t.id = obj.key
          list.push(t);
        })//seba arriba
      })
      //enviar la coleccion al mutation
      commit('setTuristas', list)
    },
    getFaunas({ commit }) {
      console.log('get');
      const list2 = []
      app.database().ref("Fauna").on("value", data => {
        //limpiar la coleccion
        for (var i = list2.length - 1; i >= 0; i--) {
          list2.splice(i, 1);
        }
        //firebase -.-
        data.forEach(obj => {
          let t = obj.val()
          t.id = obj.key
          list2.push(t);
        })
      })
      commit('setFaunas', list2)
    },
    getFloras({ commit }) {
      console.log('get');
      const list3 = []
      app.database().ref("Flora").on("value", data => {
        //limpiar la coleccion
        for (var i = list3.length - 1; i >= 0; i--) {
          list3.splice(i, 1);
        }
        //firebase -.-
        data.forEach(obj => {
          let t = obj.val()
          t.id = obj.key
          list3.push(t);
        })
      })
      commit('setFloras', list3)
    },
    getReservas({ commit }) {
      console.log('get');
      const list4 = []
      // app.database().ref("ReservaFloraFauna").child('R1')
      app.database().ref("Reserva").on("value", data => {
        //limpiar la coleccion
        for (var i = list4.length - 1; i >= 0; i--) {
          list4.splice(i, 1);
        }
        //firebase -.-
        data.forEach(obj => {
          let t = obj.val()
          t.id = obj.key
          list4.push(t);
        })
      })
      commit('setReservas', list4)
    }
  },
  modules: {
  }
})
/**
R1:{
  animales:{
    A1:{
      nombre:'',
    },
    A2:{
      nombre:''
    }
  },
  faunas:{
    F1:{
      especie:'sad',
      clima:
    },
    F2:{

    }
  }
},
*/
//app.database().ref("ReservaFloraFanua").child("R1")

//li.animales
//li.faunas