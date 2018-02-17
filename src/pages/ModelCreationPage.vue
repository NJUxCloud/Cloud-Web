<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <model-creation-body></model-creation-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import ModelCreationBody from '../components/ModelCreationBody/ModelCreationBody.vue'

  export default {
    components: {
      MyNavBar,
      MyFooter,
      ModelCreationBody
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped src=""></style>
