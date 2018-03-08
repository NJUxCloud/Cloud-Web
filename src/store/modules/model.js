import * as modelApi from '../../api/model'

// initial state
const state = {
  modelName: 'asfsagf',
  modelIter: 1000
}

// getters
const getters = {
  modelName: state => state.modelName,
  modelIter: state => state.modelIter
}

// actions
const actions = {
  'createModel' ({state, commit}, {onSuccess, onError, body}) {
    console.log('createModel')
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
  'constructModel' ({state, commit}, {onSuccess, onError, body, modelInfo}) {
    console.log('constructModel')
    modelApi.constructModel(
      data => {
        console.log(data)
        commit('setIter', body.iter)
        onSuccess(data)
      },
      body,
      () => {
        onError()
      },
      modelInfo
    )
  },
  'getTrainResult' ({state, commit}, {onSuccess, onError, body}) {
    console.log('getTrainResult')
    modelApi.getTrainResult(data => {
      console.log(data)
      onSuccess(data)
        // on-success
    }, body)
  },
  'getKubernetesResult' ({state, commit}, {onSuccess, onError}) {
    console.log('getKubernetesResult')
    modelApi.getKubernetesResult(data => {
      // console.log(data)
      onSuccess(data)
      // on-success
    })
  }
}

// mutations
const mutations = {
  'setModelName' (state, modelName) {
    // console.log(modelName)
    state.modelName = modelName
  },
  'setIter' (state, iter) {
    // console.log(iter)
    state.modelIter = iter
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
