<template>
  <div class="user-info-wrapper">
    <el-row :gutter="20" style="margin: 0" class="inputs-wrapper">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <h3>用户名</h3>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-input :disabled="true"></el-input>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <h3>邮箱</h3>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-input :disabled="true"></el-input>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <h3>密码</h3>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <el-input :disabled="true" value="******"></el-input>
      </el-col>
    </el-row>
    <div class="modify-button-wrapper" @click="openModifyPassword = true">
      <my-button content="修改密码"></my-button>
    </div>
    <modify-password-dialog :openModifyPassword="openModifyPassword" @closeModifyPassword="closeModifyPassword"></modify-password-dialog>

  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import { mapGetters } from 'vuex'
  import ModifyPasswordDialog from '../Dialogs/ModifyPasswordDialog.vue'

  export default {
    components: {
      MyButton,
      ModifyPasswordDialog
    },
    data () {
      return {
        openModifyPassword: false
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize'
      })
    },
    methods: {
      closeModifyPassword: function () {
        this.openModifyPassword = false
      }
    }
  }
</script>

<style scoped src="./UserInfo.css"></style>
