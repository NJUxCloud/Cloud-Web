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
            <my-button content="了  解  更  多" style="margin-left: -150px; margin-top: 100px; margin-bottom: 80px;"></my-button>
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

  export default {
    components: {
      ElCol,
      ElRow,
      MyNavBar,
      MyButton
    },
    data () {
      return {
      }
    },
    methods: {
      scrollToInfos () {
//        alert($('.header-wrapper').height())
        $('html, body').animate({scrollTop: $('.header-wrapper').height()}, 1000)
//        $(window).scrollTop(100)
      }
    }
  }
</script>

<style scoped src="./HomeHeader.css"></style>
