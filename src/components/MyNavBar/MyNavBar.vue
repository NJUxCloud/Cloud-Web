<template>
  <div class="nav-wrapper">
    <img src="../../assets/nav-bg.png" class="bg" v-if="showBg"/>
    <el-row :gutter="20" style="overflow: hidden; margin: 0;">
      <el-col :xs="12" :sm="12" :md="12" :lg="12">
        <img src="../../assets/logo.png"/>

      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="12">
        <!--<p>NJUxCloud</p>-->
        <div class="buttons-wrapper">
          <my-nav-button content="登录" class="button"></my-nav-button>
          <my-nav-button content="注册" class="button"></my-nav-button>
        </div>

      </el-col>
    </el-row>
  </div>
</template>

<script>
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import MyNavButton from '../Basic/MyNavButton/MyNavButton.vue'

  export default {
    components: {
      ElCol,
      ElRow,
      MyNavButton
    },
    props: ['showBg'],
    data () {
      return {}
    }
  }
</script>

<style scoped src="./MyNavBar.css"></style>
