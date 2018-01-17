<template>
  <div>
    <el-dialog
      class="dialog-wrapper"
      :visible.sync="openModifyPassword"
      :style="dialogWidth"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <img src="../../assets/dialog-bg.png">

      <div class="login-wrapper">
        <h1>修改密码</h1>
        <h2>输入旧密码</h2>
        <el-input v-model="oldPassword" type="password"></el-input>
        <h2>输入新密码</h2>
        <el-input v-model="newPassword1" type="password"></el-input>
        <h2>确认新密码</h2>
        <el-input v-model="newPassword2" type="password"></el-input>
      </div>


      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="closeModifyPasswordDialog">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
          <div @click="closeModifyPasswordDialog">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MyDialogButton from '../Basic/MyDialogButton/MyDialogButton.vue'

  export default {
    props: ['openModifyPassword'],
    components: {
      MyDialogButton
    },
    data () {
      return {
        dialogWidth: {
          width: '30%',
          marginLeft: '35%'
        },
        newPassword1: '',
        oldPassword: '',
        newPassword2: ''
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    methods: {
      closeModifyPasswordDialog: function () {
        this.$emit('closeModifyPassword')
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
      }
    },
    watch: {
      mainWidth: function () {
        this.changeDialogWidth()
      },
      openModifyPassword: function () {
        this.newPassword1 = ''
        this.oldPassword = ''
        this.newPassword2 = ''
      }
    },
    mounted () {
      this.changeDialogWidth()
      this.newPassword1 = ''
      this.oldPassword = ''
      this.newPassword2 = ''
    }
  }
</script>

<style scoped src="./Dialogs.css"></style>
