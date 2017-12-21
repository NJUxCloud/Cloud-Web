<template>
  <div>
    <home-header></home-header>
    <home-body></home-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import HomeHeader from '../components/HomeHeader/HomeHeader.vue'
  import HomeBody from '../components/HomeBody/HomeBody.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'

  export default {
    components: {
      HomeHeader,
      HomeBody,
      MyFooter
    },
    data () {
      return {
      }
    }
  }
</script>
