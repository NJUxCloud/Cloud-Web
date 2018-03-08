<template>
  <div class="model-using-wrapper">
    <el-row :gutter="20" style="margin: 0;">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="breadcrumb-wrapper">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item  :to="{ path: '/proModelCollections' }">我的模型</el-breadcrumb-item>
            <el-breadcrumb-item>使用模型
              <el-tooltip content="手写数字，上传识别" placement="bottom" effect="light">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>

    </el-row>

    <div class="canvas-wrapper">
      <draw-canvas></draw-canvas>
    </div>


  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import DrawCanvas from '../DrawCanvas/DrawCanvas.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    components: {
      MyButton,
      DrawCanvas
    },
    data () {
      return {
      }
    },
    computed: {
      ...mapGetters({
      })
    },
    methods: {
      ...mapActions({
      })
    },
    mounted () {
    }
  }
</script>

<style scoped src="./ModelUsingBody.css"></style>
