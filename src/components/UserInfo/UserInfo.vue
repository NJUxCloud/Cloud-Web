<template>
  <div class="user-info-wrapper">
    <el-row :gutter="20" style="margin: 0">
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
    <my-button content="修改密码" class="modify-button-wrapper"></my-button>

  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      MyButton
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize'
      })
    }
  }
</script>

<style scoped src="./UserInfo.css"></style>
