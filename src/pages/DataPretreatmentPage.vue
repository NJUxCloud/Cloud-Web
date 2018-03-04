<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <data-pretreatment-body></data-pretreatment-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import DataPretreatmentBody from '../components/DataPretreatmentBody/DataPretreatmentBody.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'

  export default {
    components: {
      MyNavBar,
      DataPretreatmentBody,
      MyFooter
    },
    data () {
      return {
      }
    }
  }
</script>
