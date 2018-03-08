<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <model-using-body></model-using-body>
    <!--<pro-model-collections></pro-model-collections>-->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import ModelUsingBody from '../components/ModelUsingBody/ModelUsingBody.vue'

  export default {
    components: {
      MyNavBar,
      ModelUsingBody,
      MyFooter
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped src=""></style>
