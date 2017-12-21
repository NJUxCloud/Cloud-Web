<template>
  <div class="footer-wrapper">
    <img src="../../assets/footer-bg.png"/>
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <p>copyright@2017 - NJUxCloud Team Created</p>
    </el-col>
    <el-col :xs="12" :sm="12" :md="12" :lg="12">
      <!--<p>NJUxCloud</p>-->
      <div class="buttons-wrapper">
        <my-nav-button content="联系" class="button"></my-nav-button>
        <my-nav-button content="关于" class="button"></my-nav-button>
      </div>

    </el-col>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import MyNavButton from '../Basic/MyNavButton/MyNavButton.vue'

  export default {
    components: {
      ElCol,
      ElRow,
      MyNavButton
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped src="./MyFooter.css"></style>
