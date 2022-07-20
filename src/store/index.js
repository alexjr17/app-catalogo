import { createStore } from 'vuex'
import repository from '@/api/repository'
export default createStore({
  modules: {
    auth: {
      state() {
        return {
            user: null
        }
      },
      getters: {
        authenticated (state) {
            return state.user !== null
        },
        user(state) {
          return state.user.name;
        }
      },
      mutations: {
        SET_USER(state, payload){
          state.user = payload
        },
      },
      actions: {
        async tokenSession(){
          await repository.tokenSession();
        },

        async login({dispatch}, user) {
          await dispatch('tokenSession');
          await repository.login(user);
        },

        async logout(){
          await repository.logout();
        },

        async get_user({ commit }) {
          await repository.get_user().then( res => {
              commit('SET_USER', res.data);
              console.log(res.data);
          }).catch( () => {
              commit('SET_USER', null);
          });
      },
      },
    },
    marcas: {
      state(){
        return{
          marcas: []
        }
      },
      getters:{
        marcas(state){
          return state.marcas;
        }
      },
      mutations:{
        SET_MARCAS(state, payload){
          state.marcas = payload;
        }
      },
      actions: {
        async pag_marcas({commit}, pag) {
          const {data} = await repository.pag_marcas(pag);
          console.log(data);
          commit('SET_MARCAS',data);
        },
        async store_marca(_, params) {
          const {data} = await repository.store_marca(params);
          console.log(data);
        },
        async get_marca(_, id) {
          const {data} = await repository.get_marca(id);
          console.log(data);
          return data;
        },
        async update_marca(_, params) {
          const {data} = await repository.update_marca(params);
          console.log(data);
        },
        async delete_marca(_, id) {
          const {data} = await repository.delete_marca(id);
          console.log(data);
        },
        async get_marcas() {
          const {data} = await repository.get_marcas();
          return data;
        }
      }
    },
    productos: {
      state(){
        return{
          productos: []
        }
      },
      getters:{
        productos(state){
          return state.productos;
        }
      },
      mutations:{
        SET_PRODUCTOS(state, payload){
          state.productos = payload;
        }
      },
      actions: {
        async pag_productos({commit}, pag) {
          const {data} = await repository.pag_productos(pag);
          console.log(data);
          commit('SET_PRODUCTOS',data);
        },
        async store_producto(_, params) {
          console.log(params);
          const {data} = await repository.store_producto(params);
          console.log(data);
        },
        async get_producto(_, id) {
          const {data} = await repository.get_producto(id);
          console.log(data);
          return data;
        },
        async update_producto(_, params) {
          const {data} = await repository.update_producto(params);
          console.log(data);
        },
        async delete_producto(_, id) {
          const {data} = await repository.delete_producto(id);
          console.log(data);
        }
      }
    },
  }
})
