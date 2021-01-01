import Vue from 'vue'
import Vuex from 'vuex'
import usersAPI from "../apis/user.js";

Vue.use(Vuex)

export default new Vuex.Store({
  // state 屬性：與 Vue 物件內的 data 屬性類似，是放置資料的地方
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  // mutations 屬性：想要修改 state 的資料時，會在 mutations 裡設定函式
  //commit取用mutations裡的method
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser
      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true
    },

    revokeAuthentication(state) {
      state.currentUser = {}
      localStorage.removeItem('token')
      state.isAuthenticated = false

    }
  },
  // action 屬性：設定其他的非同步函式，例如發送 API 請求等等
  //dispatch取用 actions的method
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        // const { data: { profile }, statusText } = await usersAPI.getCurrentUser()
        const { data } = await usersAPI.getCurrentUser()
        console.log(data)

        // if (statusText !== 'OK') {
        //   throw new Error(statusText)
        // }
        const { id, name, email, image, isAdmin } = data

        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })

        return true
      } catch (error) {
        console.error(error.message)

        return false
      }
    }
  },
  modules: {
  }
})
