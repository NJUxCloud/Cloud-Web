<template>
  <div class="nav-wrapper">
    <img src="../../assets/nav-bg.png" class="bg" v-if="showBg"/>
    <el-row :gutter="20" style="overflow: hidden; margin: 0;">
      <el-col :xs="4" :sm="4" :md="12" :lg="12">
        <img src="../../assets/logo.png" v-show="largeSize"/>
        <img src="../../assets/logo-sm.png" v-show="!largeSize"/>

      </el-col>
      <el-col :xs="20" :sm="20" :md="12" :lg="12"  class="hidden-sm-and-down">
        <!--<p>NJUxCloud</p>-->
        <div class="buttons-wrapper" v-show="!isLogin">
          <div style="position: relative; display: inline-block" @click="openLoginDialog">
            <my-nav-button content="登录" class="button"></my-nav-button>
          </div>
          <div style="position: relative; display: inline-block" @click="openSignInDialog">
            <my-nav-button content="注册" class="button"></my-nav-button>
          </div>
        </div>

        <div class="buttons-wrapper" v-show="isLogin">
          <el-popover
            ref="popover3"
            placement="top-start"
            width="200"
            trigger="click"
            :disabled="!isLogin"
          >
            <!--<my-nav-button content="登录" class="button"></my-nav-button>-->
            <div v-show="isLogin">
              <router-link to="/proUploadData">
                <el-button class="collapse-nav-element">数据上传</el-button>
              </router-link>
              <router-link to="/proUploadFile">
                <el-button class="collapse-nav-element">代码上传</el-button>
              </router-link>
              <router-link to="/proModelCollections">
                <el-button class="collapse-nav-element" style="border: none">模型文件夹</el-button>
              </router-link>
            </div>
          </el-popover>

          <el-popover
            ref="popover2"
            placement="top-start"
            width="200"
            trigger="click"
            :disabled="!isLogin"
          >
            <!--<my-nav-button content="登录" class="button"></my-nav-button>-->
            <router-link to="/">
              <el-button class="collapse-nav-element">首页</el-button>
            </router-link>
            <router-link to="/uploadedData">
              <el-button class="collapse-nav-element">我的数据</el-button>
            </router-link>
            <router-link to="/info">
              <el-button class="collapse-nav-element">个人信息</el-button>
            </router-link>
            <el-button class="collapse-nav-element" style="border: none" @click="doQuitLog">退出登录</el-button>
          </el-popover>

          <!--<router-link to="/proUploadData">-->
          <div style="display: inline-block; position: relative; outline: none" v-popover:popover3 v-show="largeSize">
            <my-nav-button content="专业上传" class="button"></my-nav-button>
          </div>
          <!--</router-link>-->
          <div style="display: inline-block; position: relative; outline: none" v-popover:popover4 v-show="largeSize">
            <my-nav-button content="流程探索" class="button"></my-nav-button>
          </div>
          <el-button class="collapse-nav-button" style="color: #76B6C2" v-popover:popover2 v-show="largeSize"><i
            class="el-icon-more"></i></el-button>


        </div>
      </el-col>

      <el-col :xs="20" :sm="20" :md="12" :lg="12" class="hidden-md-and-up">
        <el-popover
          ref="popover4"
          placement="top-start"
          width="200"
          trigger="click"
          :disabled="!isLogin"
        >
          <!--<my-nav-button content="登录" class="button"></my-nav-button>-->
          <router-link to="/">
            <el-button class="collapse-nav-element" style="border: none">流程探索</el-button>
          </router-link>
        </el-popover>

        <el-popover
          ref="popover5"
          placement="top-start"
          width="200"
          trigger="click"
          :disabled="!isLogin"
        >
          <!--<my-nav-button content="登录" class="button"></my-nav-button>-->
          <div v-show="isLogin">
            <router-link to="/proUploadData">
              <el-button class="collapse-nav-element">数据上传</el-button>
            </router-link>
            <router-link to="/proUploadFile">
              <el-button class="collapse-nav-element">代码上传</el-button>
            </router-link>
            <router-link to="/proModelCollections">
              <el-button class="collapse-nav-element" style="border: none">模型文件夹</el-button>
            </router-link>
          </div>
        </el-popover>

        <el-popover
          ref="popover6"
          placement="top-start"
          width="200"
          trigger="click"
        >
          <!--<my-nav-button content="登录" class="button"></my-nav-button>-->

          <div v-show="!isLogin">
            <el-button class="collapse-nav-element" @click="openLoginDialog">登录</el-button>
            <el-button class="collapse-nav-element" @click="openSignInDialog">注册</el-button>
            <el-button class="collapse-nav-element" @click="openContact = true">联系</el-button>
            <el-button class="collapse-nav-element" style="border: none;" @click="openAbout = true">关于</el-button>
          </div>

          <div v-show="isLogin">
            <router-link to="/">
              <el-button class="collapse-nav-element">首页</el-button>
            </router-link>
            <router-link to="/uploadedData">
              <el-button class="collapse-nav-element">我的数据</el-button>
            </router-link>
            <router-link to="/info">
              <el-button class="collapse-nav-element">个人信息</el-button>
            </router-link>
            <el-button class="collapse-nav-element" @click="openContact = true">联系</el-button>
            <el-button class="collapse-nav-element" @click="openAbout = true">关于</el-button>
            <el-button class="collapse-nav-element" style="border: none" @click="doQuitLog">退出</el-button>
          </div>
        </el-popover>

        <el-button class="collapse-nav-button" style="color: #ffffff" v-popover:popover6 v-show="!largeSize"><i
          class="el-icon-more"></i></el-button>
        <el-button v-if="isLogin" class="collapse-nav-button" style="color: #ffffff" v-popover:popover4
                   v-show="!largeSize"><i class="el-icon-tickets"></i></el-button>
        <el-button v-if="isLogin" class="collapse-nav-button" style="color: #ffffff" v-popover:popover5
                   v-show="!largeSize"><i class="el-icon-upload2"></i></el-button>
        <!--<el-popover-->
        <!--ref="popover1"-->
        <!--placement="top-start"-->
        <!--width="200"-->
        <!--trigger="click"-->
        <!--:disabled="largeSize"-->
        <!--&gt;-->
        <!--&lt;!&ndash;<my-nav-button content="登录" class="button"></my-nav-button>&ndash;&gt;-->
        <!--<div v-show="!isLogin">-->
        <!--<el-button class="collapse-nav-element" @click="openLoginDialog">登录</el-button>-->
        <!--<el-button class="collapse-nav-element" @click="openSignInDialog">注册</el-button>-->
        <!--<el-button class="collapse-nav-element" @click="openContact = true">联系</el-button>-->
        <!--<el-button class="collapse-nav-element" style="border: none;" @click="openAbout = true">关于</el-button>-->
        <!--</div>-->

        <!--<div v-show="isLogin">-->
        <!--<el-button class="collapse-nav-element">首页</el-button>-->
        <!--<el-button class="collapse-nav-element">专业上传</el-button>-->
        <!--<el-button class="collapse-nav-element">流程探索</el-button>-->
        <!--<el-button class="collapse-nav-element">我的数据</el-button>-->
        <!--<el-button class="collapse-nav-element">个人信息</el-button>-->
        <!--<el-button class="collapse-nav-element" @click="openContact = true">联系</el-button>-->
        <!--<el-button class="collapse-nav-element" @click="openAbout = true">关于</el-button>-->
        <!--<el-button class="collapse-nav-element" style="border: none" @click="doQuitLog">退出</el-button>-->
        <!--</div>-->
        <!--</el-popover>-->
        <!--<el-button class="collapse-nav-button" v-popover:popover1 ><i class="el-icon-more" ></i> </el-button>-->
      </el-col>
    </el-row>

    <login-dialogs :openLogin="openLogin" :openSignIn="openSignIn" @closeLogin="openLogin = false"></login-dialogs>
    <contact-dialog :openContact="openContact" @closeContact="openContact = false"></contact-dialog>
    <about-dialog :openAbout="openAbout" @closeAbout="openAbout = false"></about-dialog>

  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import MyNavButton from '../Basic/MyNavButton/MyNavButton.vue'
  import {mapGetters} from 'vuex'
  import 'element-ui/lib/theme-chalk/display.css'
  import LoginDialogs from '../Dialogs/LoginDialogs.vue'
  import ContactDialog from '../Dialogs/ContactDialog.vue'
  import AboutDialog from '../Dialogs/AboutDialog.vue'

  export default {
    components: {
      LoginDialogs,
      ElCol,
      ElRow,
      MyNavButton,
      ContactDialog,
      AboutDialog
    },
    props: ['showBg'],
    data () {
      return {
        isCollapse: true,
        isLogin: true,
        openLogin: false,
        openSignIn: false,
        openContact: false,
        openAbout: false
      }
    },
    methods: {
      openLoginDialog () {
        this.openLogin = true
        this.openSignIn = false
      },
      openSignInDialog () {
        this.openLogin = true
        this.openSignIn = true
      },
      doQuitLog () {
        // todo
        this.$router.push('/')
        this.isLogin = false
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize',
        mainWidth: 'mainWidth'
      })
    },
    watch: {}
  }
</script>

<style scoped src="./MyNavBar.css"></style>
