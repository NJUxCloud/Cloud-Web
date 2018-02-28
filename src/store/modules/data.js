import * as dataApi from '../../api/data'

// initial state
const state = {
  // largeSize: document.body.clientWidth > 1200
}

// getters
const getters = {
  // largeSize: state => state.largeSize
}

// actions
const actions = {
  getDataList ({state, commit}, {onSuccess, onError}) {
    console.log('userSignin')
    dataApi.getDataList(data => {
      console.log(data)
      if (data.error !== undefined) {
        // console.log(data.error)
        onError(data)
      } else {
        onSuccess(data)
        // on-success
      }
    })
  }
}

// mutations
const mutations = {
  // 'setLargeSize' (state) {
  //   state.largeSize = true
  // }
}

export default {
  state,
  getters,
  actions,
  mutations
}
