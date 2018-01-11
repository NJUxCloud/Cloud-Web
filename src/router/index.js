import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProUploadDataPage from '../pages/ProUploadDataPage.vue'
import ProModelCollectionsPage from '../pages/ProModelCollectionsPage.vue'
import UploadedDataPage from '../pages/UploadedDataPage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/proUploadData',
      name: 'ProUploadDataPage',
      component: ProUploadDataPage
    },
    {
      path: '/proModelCollections',
      name: 'ProModelCollectionsPage',
      component: ProModelCollectionsPage
    },
    {
      path: '/uploadedData',
      name: 'UploadedDataPage',
      component: UploadedDataPage
    }
  ]
})
