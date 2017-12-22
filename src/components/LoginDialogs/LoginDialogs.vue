<template>
  <div>
    <el-dialog
      class="dialog-wrapper"
      :visible.sync="openLogin"
      :style="dialogWidth"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <img src="../../assets/dialog-bg.png">

      <div class="login-wrapper" v-show="loginDialog">
        <h1>登录</h1>
        <a @click="changeDialog">去注册 ></a>
        <h2>用户名</h2>
        <el-input v-model="usernameInput"></el-input>
        <h2>密码</h2>
        <el-input v-model="passwordInput" type="password"></el-input>
      </div>

      <div class="login-wrapper" v-show="!loginDialog">
        <h1>注册</h1>
        <a @click="changeDialog">去登录 ></a>
        <h2>用户名</h2>
        <el-input v-model="usernameInput"></el-input>
        <h2>密码</h2>
        <el-input v-model="passwordInput" :type="password"></el-input>
        <i class="el-icon-view" @mouseover="changeInputType" @mouseleave="changeInputType"></i>
      </div>

      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="closeLoginDialogs">
            <my-nav-button content="取消"></my-nav-button>
          </div>
          <div @click="closeLoginDialogs">
            <my-nav-button content="确定"></my-nav-button>
          </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MyNavButton from '../Basic/MyNavButton/MyNavButton.vue'

  export default {
    props: ['openLogin', 'openSignIn'],
    components: {
      MyNavButton
    },
    data () {
      return {
        dialogWidth: {
          width: '30%',
          marginLeft: '35%'
        },
        usernameInput: '',
        passwordInput: '',
        loginDialog: true,
        password: 'password'
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    methods: {
      closeLoginDialogs: function () {
        this.$emit('closeLogin')
      },
      changeDialogWidth: function () {
        if (this.mainWidth < 420) {
          this.dialogWidth.width = '100%'
          this.dialogWidth.marginLeft = '0%'
        } else if (this.mainWidth <= 768) {
          this.dialogWidth.width = '60%'
          this.dialogWidth.marginLeft = '20%'
        } else if (this.mainWidth < 992) {
          this.dialogWidth.width = '40%'
          this.dialogWidth.marginLeft = '30%'
        } else {
          this.dialogWidth.width = '30%'
          this.dialogWidth.marginLeft = '35%'
        }
      },
      changeDialog: function () {
        this.loginDialog = !this.loginDialog
      },
      changeInputType: function () {
        if (this.password === 'password') {
          this.password = 'text'
        } else {
          this.password = 'password'
        }
      }
    },
    watch: {
      mainWidth: function () {
        this.changeDialogWidth()
      },
      openLogin: function () {
        this.usernameInput = ''
        this.passwordInput = ''
        this.loginDialog = !this.openSignIn
      }
    },
    mounted () {
      this.changeDialogWidth()
//      this.loginDialog = this.openSignIn
//      alert(this.openSignIn)
      this.usernameInput = ''
      this.passwordInput = ''
    }
  }
</script>

<style scoped src="./LoginDialogs.css"></style>
