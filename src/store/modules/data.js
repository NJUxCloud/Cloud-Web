import * as dataApi from '../../api/data'

// initial state
const state = {
  dataID: 48,
  useUploadedData: false,
  isUrl: false
  // largeSize: document.body.clientWidth > 1200
}

// getters
const getters = {
  dataID: state => state.dataID,
  useUploadedData: state => state.useUploadedData,
  isUrl: state => state.isUrl
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
  },
  'useData' (state, {dataID, isUrl}) {
    console.log('isUrl: ' + isUrl)
    console.log('dataID: ' + dataID)
    state.dataID = dataID
    state.useUploadedData = true
    state.isUrl = isUrl
  },
  'uploadData' (state) {
    state.useUploadedData = false
  },
  'setDataType' (state, type) {
    state.isUrl = type
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
