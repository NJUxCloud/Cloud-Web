import * as authApi from '../../api/auth'

// initial state
const state = {
  isLogin: false
}

// getters
const getters = {
  isLogin: state => state.isLogin
}

// actions
const actions = {
  'userLogin' ({state, commit}, {body, onSuccess, onError}) {
    console.log('userLogin')
    authApi.userLogIn(data => {
      console.log(data)
      if (data.error !== undefined) {
        // console.log(data.error)
        onError(data)
      } else {
        onSuccess()
        localStorage.setItem('key', data.key)
        commit('setLoginStatus', true)
        // on-success
      }
    }, body)
  },
  'userSignin' ({state, commit}, {body, onSuccess, onError}) {
    console.log('userSignin')
    authApi.userSignin(data => {
      console.log(data)
      if (data.error !== undefined) {
        // console.log(data.error)
        onError(data)
      } else {
        onSuccess()
        localStorage.setItem('key', data.key)
        commit('setLoginStatus', true)
        // on-success
      }
    }, body)
  }
}

// mutations
const mutations = {
  'setLoginStatus' (state, status) {
    state.isLogin = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
