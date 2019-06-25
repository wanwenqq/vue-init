import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  token: ''
}
const getters = {
  getCount () {
    return state.count
  },
  getToken () {
    return state.token
  }
}
const mutations = {
  newCount (state, num) {
    return state.count + num
  },
  refreshToken (state, newToken) {
    return (state.token = newToken)
  }
}
const actions = {
  getNewCount (context, num) {
    context.commit('newCount', num)
  },
  doRefreshToken (context, newToken) {
    context.commit('refreshToken', newToken)
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
