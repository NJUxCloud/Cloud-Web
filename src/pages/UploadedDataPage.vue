<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <uploaded-data-body></uploaded-data-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import UploadedDataBody from '../components/UploadedDataBody/UploadedDataBody.vue'

  export default {
    components: {
      MyNavBar,
      UploadedDataBody,
      MyFooter
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped src=""></style>
