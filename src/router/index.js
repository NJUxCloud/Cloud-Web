import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProfessionalUploadDataPage from '../pages/ProfessionalUploadDataPage.vue'

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
      name: 'ProfessionalUploadDataPage',
      component: ProfessionalUploadDataPage
    }
  ]
})
