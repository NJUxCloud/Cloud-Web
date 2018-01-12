<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <pro-upload-file-body></pro-upload-file-body>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import ProUploadFileBody from '../components/ProUploadFileBody/ProUploadFileBody.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'

  export default {
    components: {
      MyNavBar,
      ProUploadFileBody,
      MyFooter
    },
    data () {
      return {
      }
    }
  }
</script>
