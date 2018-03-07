import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import ProUploadDataPage from '../pages/ProUploadDataPage.vue'
import ProModelCollectionsPage from '../pages/ProModelCollectionsPage.vue'
import UploadedDataPage from '../pages/UploadedDataPage.vue'
import ProUploadFilePage from '../pages/ProUploadFilePage.vue'
import UserInfoPage from '../pages/UserInfoPage.vue'
import ModelCreationPage from '../pages/ModelCreationPage.vue'
import ModelNamePage from '../pages/ModelNamePage.vue'
import DataPretreatmentPage from '../pages/DataPretreatmentPage.vue'
import ModelResultPage from '../pages/ModelResultPage.vue'
import UploadTagPage from '../pages/UploadTagPage.vue'
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
    },
    {
      path: '/proUploadFile',
      name: 'ProUploadFilePage',
      component: ProUploadFilePage
    },
    {
      path: '/info',
      name: 'UserInfoPage',
      component: UserInfoPage
    },
    {
      path: '/modelCreation',
      name: 'ModelCreationPage',
      component: ModelCreationPage
    },
    {
      path: '/modelName',
      name: 'ModelNamePage',
      component: ModelNamePage
    },
    {
      path: '/dataPretreatment',
      name: 'DataPretreatmentPage',
      component: DataPretreatmentPage
    },
    {
      path: '/result',
      name: 'ModelResultPage',
      component: ModelResultPage
    },
    {
      path: '/uploadTag',
      name: 'UploadTagPage',
      component: UploadTagPage
    }
  ]
})
