import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from '../apis/user.js'

Vue.use(Vuex)

export default new Vuex.Store({
  //類似vue裡的data，要改動state，要用mutations
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: true
    },

    isAuthenticated: false
  },
  //用來修改state的方法，用commit發動 mutations
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // 將 API 取得的 currentUser 覆蓋掉 Vuex state 中的 currentUser
        ...currentUser,

      }
      // 將使用者的登入狀態改為 true
      state.isAuthenticated = true

    }
  },
  //透過API請求資料，用dispatch發動actions
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser()
        console.log(data)

        if (data.status === 'error') {
          throw new Error(data.message)
        }

        const {
          id,
          name,
          email,
          image,
          isAdmin
        } = data


        //用commit連結取得的資料
        commit('setCurrentUser', {
          id,
          name,
          email,
          image,
          isAdmin
        })


      } catch (error) {
        console.log('error', error)
      }
    }
  },
  modules: {
  }
})
