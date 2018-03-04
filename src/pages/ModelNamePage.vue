<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <pro-model-collections></pro-model-collections>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import ProModelCollections from '../components/ProModelCollections/ProModelCollections.vue'

  export default {
    components: {
      MyNavBar,
      MyFooter,
      ProModelCollections
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped src=""></style>
