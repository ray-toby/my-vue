import Vue from 'vue'
import Vuex from 'vuex'
import us from '../service/user';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('token') ? true : false
  },
  mutations: {
    setLoginState(state, b) {
      state.isLogin = b;
    }
  },
  actions: {
    login({commit}, user) {
      // commit
      return us.login(user).then(res => {
        const { code, token } = res.data;
        if(code) {

          commit('setLoginState', true);
          localStorage.setItem('token', token);

          return code
        }
      })
    },
    logout({commit}) {
      localStorage.removeItem('token');

      commit('setLoginState', false)
    }
  },
  modules: {

  }
})
