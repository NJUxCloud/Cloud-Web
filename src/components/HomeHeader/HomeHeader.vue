<template>
  <div class="header-wrapper">
    <img src="../../assets/head-bg.png">
    <my-nav-bar :showBg="false"></my-nav-bar>
    <div class="intro-wrapper">
      <el-row :gutter="20" style="margin: 0; position: relative; width: 100%">
        <el-col :xs="24" :sm="24" :md="10" :lg="12" style="text-align: center">
          <h1>
            基于Kubernetes和
            <br>
            TensorFlow的
            <br>
            云计算平台。
          </h1>
          <br>
          <div @click="scrollToInfos">
            <my-button content="了  解  更  多" :style="[largeSize ? largeButton : smallButton]"></my-button>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="14" :lg="12" style="text-align: center; position: relative;">
          <!--<p>SAd</p>-->
          <img src="../../assets/header-card.png">
          <br>
          <my-button content="开  始  探  索" style="top: -60px;"></my-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import MyNavBar from '../MyNavBar/MyNavBar.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import $ from 'jquery'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ElCol,
      ElRow,
      MyNavBar,
      MyButton
    },
    data () {
      return {
        largeButton: {
          marginLeft: '-150px',
          marginTop: '100px',
          marginBottom: '80px'
        },
        smallButton: {
          marginTop: '60px',
          marginBottom: '60px'
        }
      }
    },
    methods: {
      scrollToInfos () {
//        alert($('.header-wrapper').height())
        $('html, body').animate({scrollTop: $('.header-wrapper').height()}, 1000)
//        $(window).scrollTop(100)
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize',
        mainWidth: 'mainWidth'
      })
    },
    watch: {
    }
  }
</script>

<style scoped src="./HomeHeader.css"></style>
