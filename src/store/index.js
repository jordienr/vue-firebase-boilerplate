import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from '../firebase'
import router from '../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userProfile: {}
  },
  mutations: {
    setUserProfile(state, val) {
      console.log(val)
      state.userProfile = val
    }
  },
  actions: {
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchUserProfile', user)
    },

    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      commit('setUserProfile', userProfile.data())
      if (router.currentRoute.path === '/login' || router.currentRoute.path === '/register') {
        router.push('/')
      }
    },
    
    async register({ dispatch }, form) {
      const { user } = await fb.auth.createUserWithEmailAndPassword(form.email, form.password)
      await fb.usersCollection.doc(user.uid).set({
        // Add here the data we want users to save to their profiles
        name: form.name
      })
      dispatch('fetchUserProfile', user)
    },
    
    async logout({ commit }) {
      await fb.auth.signOut()
      commit('setUserProfile', {})
      router.push('/login')
    }
  },
  modules: {
  }
})
