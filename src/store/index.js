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
      actions: {
        async all_marcas() {
          // alert(JSON.stringify(pag));
          const {data} = await repository.all_marcas();
          console.log(data);
          return data;
        },
        async pag_marcas(_, pag) {
          const {data} = await repository.pag_marcas(pag);
          console.log(data);
          return data;
        }
      }
    }
  }
})
