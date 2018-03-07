import * as dataApi from '../../api/data'

// initial state
const state = {
  dataID: 41
  // largeSize: document.body.clientWidth > 1200
}

// getters
const getters = {
  dataID: state => state.dataID
}

// actions
const actions = {
  getDataList ({state, commit}, {onSuccess, onError}) {
    console.log('getDataList')
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
  },
  uploadData ({state, commit}, {onSuccess, onError, body}) {
    console.log('uploadData')
    dataApi.uploadData(data => {
      console.log(data)
      onSuccess(data)
      commit('setDataID', data.data_id)
    }, body,
     data => {
       onError()
     }
    )
  },
  uploadTag ({state, commit}, {onSuccess, onError, body}) {
    console.log('uploadTag')
    dataApi.uploadTag(data => {
      console.log(data)
      if (data.error !== undefined) {
        // console.log(data.error)
        onError(data)
      } else {
        onSuccess(data)
        // on-success
      }
    }, body)
  },
  pretreatData ({state, commit}, {onSuccess, body, onError}) {
    console.log('pretreatData')
    dataApi.pretreatData(
      data => {
        console.log(data)
        onSuccess(data)
        // on-success
      },
      body,
      data => {
        onError(data)
      }
    )
  }
}

// mutations
const mutations = {
  'setDataID' (state, dataID) {
    state.dataID = dataID
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
