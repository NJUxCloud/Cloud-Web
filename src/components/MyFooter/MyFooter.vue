<template>
  <div class="footer-wrapper">
    <img src="../../assets/footer-bg.png"/>
    <el-row style="padding: 0; margin: 0;">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <p :style="[largeSize ? '' : smallSizeFooter]">copyright@2017 - NJUxCloud Team Created</p>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" class="hidden-sm-and-down">
        <!--<p>NJUxCloud</p>-->
        <div class="buttons-wrapper">
          <my-nav-button content="联系" class="button"></my-nav-button>
          <my-nav-button content="关于" class="button"></my-nav-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import MyNavButton from '../Basic/MyNavButton/MyNavButton.vue'
  import { mapGetters } from 'vuex'
  import 'element-ui/lib/theme-chalk/display.css'

  export default {
    components: {
      ElCol,
      ElRow,
      MyNavButton
    },
    data () {
      return {
        smallSizeFooter: {
          width: '100%',
          textAlign: 'center',
          marginLeft: 0
        }
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize',
        mainWidth: 'mainWidth'
      })
    }
  }
</script>

<style scoped src="./MyFooter.css"></style>
