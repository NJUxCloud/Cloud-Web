<template>
  <div>
    <el-dialog
      class="dialog-wrapper"
      :visible.sync="openContact"
      :style="dialogWidth"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <img src="../../assets/dialog-bg.png">

      <div class="login-wrapper">
        <h1>联系</h1>
      </div>

      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="closeContactDialogs">
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
    props: ['openContact'],
    components: {
      MyDialogButton
    },
    data () {
      return {
        dialogWidth: {
          width: '30%',
          marginLeft: '35%'
        }
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    methods: {
      closeContactDialogs: function () {
        this.$emit('closeContact')
      },
      changeDialogWidth: function () {
        if (this.mainWidth < 420) {
          this.dialogWidth.width = '100%'
          this.dialogWidth.marginLeft = '0%'
        } else if (this.mainWidth <= 768) {
          this.dialogWidth.width = '70%'
          this.dialogWidth.marginLeft = '15%'
        } else if (this.mainWidth < 992) {
          this.dialogWidth.width = '50%'
          this.dialogWidth.marginLeft = '25%'
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
      openLogin: function () {
        this.usernameInput = ''
        this.passwordInput = ''
        this.loginDialog = !this.openSignIn
      }
    },
    mounted () {
      this.changeDialogWidth()
    }
  }
</script>

<style scoped src="./Dialogs.css"></style>
