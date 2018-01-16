<template>
  <div class="user-info-wrapper">
    <h1>sa</h1>



  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      MyButton
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize'
      })
    }
  }
</script>

<style scoped src="./UserInfo.css"></style>
