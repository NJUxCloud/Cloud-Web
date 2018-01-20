// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import './index.css'
import './typo.css'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import TreeFolder from './components/TreeFolder/TreeFolder.vue'
import TreeFolderContents from './components/TreeFolder/TreeFolderContents.vue'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

Vue.component('tree-folder', TreeFolder)
Vue.component('tree-folder-contents', TreeFolderContents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data () {
    return {
      screenWidth: document.body.clientWidth,
      screenHeight: window.innerHeight,
      scrollTop: window.scrollY
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScrollEvent)
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        window.screenHeight = window.innerHeight
        that.screenWidth = window.screenWidth
        that.screenHeight = window.screenHeight
      })()
    }
  },
  watch: {
    screenWidth: function () {
      this.setWidth()
      if (this.screenWidth > 968) {
        this.setLarge()
      } else {
        this.setSmall()
      }
    },
    screenHeight: function () {
      this.setWindowHeight()
    }
  },
  methods: {
    ...Vuex.mapMutations({
      setLarge: 'setLargeSize', // 将 `this.add()` 映射为 `this.$store.commit('increment')`,
      setSmall: 'setSmallSize',
      setWindowHeight: 'setHeight',
      setScrollY: 'setScroll',
      setWidth: 'setWidth'
      // setUsername: types.CHANGE_USERNAME,
      // changeLogStatus: types.CHANGE_LOG_STATUS
    }),
    handleScrollEvent () {
      this.setScrollY()
    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }
})
