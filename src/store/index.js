import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
import global from './modules/global'
import auth from './modules/auth'
import data from './modules/data'
import model from './modules/model'

// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    global,
    auth,
    data,
    model
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
