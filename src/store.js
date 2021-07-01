import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const URL_USUARIOS = 'https://60a96f6d20a641001730725a.mockapi.io/usuarios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        usuarios: []
    },
    actions : {
       async getUsuarios({commit}) {
         console.log('actions -> getUsuarios')
         try {
            let {data:usuarios} =await axios (URL_USUARIOS)
            commit('getUsuarios',usuarios)
         }
         catch {
             commit('getUsuarios',[])
         }  
       },  

       async addUsuario({commit}, usuario){
        console.log('actions -> addUsuario')
         try {
            let {data:elUsuario} =await axios.post (URL_USUARIOS, usuario)
            commit('addUsuario',elUsuario)
         }
         catch (error){
             console.log(error)
         }  
       }
    },
    mutations : {
            getUsuarios(state,usuarios) {
            console.log('mutations -> getUsuarios')
            state.usuarios = usuarios
            console.log(usuarios)
            },

             addUsuario(state, elUsuario){
                state.usuarios.push(elUsuario)
            }
    }
})