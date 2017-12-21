// initial state
const state = {
  largeSize: document.body.clientWidth > 1200,
  mainHeight: window.innerHeight,
  scrollTop: window.scrollY,
  mainWidth: document.body.clientWidth
}

// getters
const getters = {
  largeSize: state => state.largeSize,
  mainHeight: state => state.mainHeight,
  scrollTop: state => state.scrollTop,
  mainWidth: state => state.mainWidth
}

// actions
const actions = {
}

// mutations
const mutations = {
  'setLargeSize' (state) {
    state.largeSize = true
  },
  'setSmallSize' (state) {
    state.largeSize = false
    // alert(state.largeSize)
  },
  'setHeight' (state) {
    state.mainHeight = window.innerHeight
  },
  'setScroll' (state) {
    state.scrollTop = window.scrollY
  },
  'setWidth' (state) {
    state.mainWidth = document.body.clientWidth
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
