import * as modelApi from '../../api/model'

// initial state
const state = {
  modelName: '哈哈哈'
}

// getters
const getters = {
  modelName: state => state.modelName
}

// actions
const actions = {
  'createModel' ({state, commit}, {onSuccess, onError, body}) {
    console.log(body)
    modelApi.createModel(data => {
      console.log(data)
      if (data.error !== undefined) {
        // console.log(data.error)
        onError(data)
      } else {
        commit('setModelName', body.modelName)
        onSuccess(data)
        // on-success
      }
    }, body,
      data => {
        onError()
      }
    )
  },
  'constructModel' ({state, commit}, {onSuccess, onError, body}) {
    console.log(body)
    modelApi.constructModel(
      data => {
        console.log(data)
        onSuccess(data)
      },
      body,
      () => {
        onError()
      }
    )
  }
}

// mutations
const mutations = {
  'setModelName' (state, modelName) {
    console.log(modelName)
    state.modelName = modelName
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
