import Vue from 'vue'
import Vuex from 'vuex'

import app from '../firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    turistas:[{
      }]
  },
  mutations: {
    setTuristas(state,value){
      state.turistas = value;
      //console.log('TURISTAS',state.turistas);
    },
    setFaunas(state,value){
      state.faunas = value;
      //console.log('FAUNA',state.faunas); 
    },
    setFloras(state,value){
      state.floras = value;
      //console.log('FLORA',state.floras); 
    },
    setReservas(state,value){
      state.reservas = value;
      //console.log('RESERVA',state.reservas); 
    }
  },
  actions: {
    getTuristas({commit}){
      const list =[]
      app.database().ref("turista").on("value",data=>{
        //limpiar la coleccion
        for(var i=list.length -1 ; i>=0; i--){
          list.splice(i,1);
        }
        //firebase
        data.forEach(obj =>{
          let t = obj.val()
          t.id = obj.key
          list.push(t);
        })//seba arriba
      })
      //enviar la coleccion al mutation
      commit('setTuristas',list)
    },
    getFaunas({commit}){
      console.log('get');
      const list2 =[]
      app.database().ref("Fauna").on("value",data=>{
        //limpiar la coleccion
        for(var i=list2.length -1 ; i>=0; i--){
          list2.splice(i,1);
        }
        //firebase -.-
        data.forEach(obj =>{
          let t = obj.val()
          t.id = obj.key
          list2.push(t);
        })
      }) 
      commit('setFaunas',list2)
    },
    getFloras({commit}){
      console.log('get');
      const list3 =[]
      app.database().ref("Flora").on("value",data=>{
        //limpiar la coleccion
        for(var i=list3.length -1 ; i>=0; i--){
          list3.splice(i,1);
        }
        //firebase -.-
        data.forEach(obj =>{
          let t = obj.val()
          t.id = obj.key
          list3.push(t);
        })
      }) 
      commit('setFloras',list3)
    },
    getReservas({commit}){
      console.log('get');
      const list4 =[]
      app.database().ref("Reserva").on("value",data=>{
        //limpiar la coleccion
        for(var i=list4.length -1 ; i>=0; i--){
          list4.splice(i,1);
        }
        //firebase -.-
        data.forEach(obj =>{
          let t = obj.val()
          t.id = obj.key
          list4.push(t);
        })
      }) 
      commit('setReservas',list4)
    }
  },
  modules: {
  }
})
