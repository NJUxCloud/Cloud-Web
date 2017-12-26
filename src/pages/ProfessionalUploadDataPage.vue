<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <pro-upload-data-body></pro-upload-data-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import ProUploadDataBody from '../components/ProUploadDataBody/ProUploadDataBody.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'

  export default {
    components: {
      MyNavBar,
      ProUploadDataBody,
      MyFooter
    },
    data () {
      return {
      }
    }
  }
</script>
