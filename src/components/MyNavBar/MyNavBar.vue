<template>
  <div class="nav-wrapper">
    <img src="../../assets/nav-bg.png" class="bg" v-if="showBg"/>
    <el-row :gutter="20" style="overflow: hidden; margin: 0;">
      <el-col :xs="12" :sm="12" :md="12" :lg="12">
        <img src="../../assets/logo.png"/>

      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12"  class="hidden-sm-and-down">
        <!--<p>NJUxCloud</p>-->
        <div class="buttons-wrapper" v-show="!isLogin">
          <my-nav-button content="登录" class="button"></my-nav-button>
          <my-nav-button content="注册" class="button"></my-nav-button>
        </div>

        <div class="buttons-wrapper" v-show="isLogin">
          <!--<my-nav-button content="首页" class="button"></my-nav-button>-->

          <el-popover
            ref="popover2"
            placement="top-start"
            width="200"
            trigger="click"
            :disabled="!isLogin"
          >
            <!--<my-nav-button content="登录" class="button"></my-nav-button>-->
            <el-button class="collapse-nav-element">首页</el-button>
            <el-button class="collapse-nav-element">我的数据</el-button>
            <el-button class="collapse-nav-element">个人信息</el-button>
            <el-button class="collapse-nav-element" style="border: none">退出登录</el-button>
          </el-popover>

          <my-nav-button content="专业上传" class="button"></my-nav-button>
          <my-nav-button content="流程探索" class="button"></my-nav-button>
          <el-button class="collapse-nav-button" style="color: #76B6C2" v-popover:popover2><i class="el-icon-more" ></i> </el-button>
          <!--<el-button class="collapse-nav-button" style="color: #76B6C2;" v-popover:popover1><i class="el-icon-more" ></i> </el-button>-->
        </div>

      </el-col>

      <el-col :xs="12" :sm="12" :md="12" :lg="12" class="hidden-md-and-up">
        <el-popover
          ref="popover1"
          placement="top-start"
          width="200"
          trigger="click"
          :disabled="largeSize"
        >
          <!--<my-nav-button content="登录" class="button"></my-nav-button>-->
          <div v-show="!isLogin">
            <el-button class="collapse-nav-element">登录</el-button>
            <el-button class="collapse-nav-element">注册</el-button>
            <el-button class="collapse-nav-element">联系</el-button>
            <el-button class="collapse-nav-element" style="border: none;">关于</el-button>
          </div>

          <div v-show="isLogin">
            <el-button class="collapse-nav-element">首页</el-button>
            <el-button class="collapse-nav-element">专业上传</el-button>
            <el-button class="collapse-nav-element">流程探索</el-button>
            <el-button class="collapse-nav-element">我的数据</el-button>
            <el-button class="collapse-nav-element">个人信息</el-button>
            <el-button class="collapse-nav-element">联系</el-button>
            <el-button class="collapse-nav-element">关于</el-button>
            <el-button class="collapse-nav-element" style="border: none">退出</el-button>
          </div>
        </el-popover>
        <el-button class="collapse-nav-button" v-popover:popover1 ><i class="el-icon-more" ></i> </el-button>

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
    props: ['showBg'],
    data () {
      return {
        isCollapse: true,
        isLogin: false
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
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

<style scoped src="./MyNavBar.css"></style>
