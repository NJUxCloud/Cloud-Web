<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <!--<uploaded-data-body></uploaded-data-body>-->
    <user-info></user-info>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import UserInfo from '../components/UserInfo/UserInfo.vue'

  export default {
    components: {
      MyNavBar,
      UserInfo,
      MyFooter
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped src=""></style>
