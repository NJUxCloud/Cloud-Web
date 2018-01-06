<template>
  <div class="model-collections-wrapper">
    <el-row :gutter="20" style="margin: 0;">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="breadcrumb-wrapper">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>专业上传</el-breadcrumb-item>
            <el-breadcrumb-item>模型文件夹
              <el-tooltip content="上传代码文件夹以供训练选用" placement="bottom" effect="light">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div :class="[largeSize ? 'upload-button-wrapper-lg' : 'upload-button-wrapper-sm' ]">
          <my-button content="上传文件夹" color="#000000"></my-button>
        </div>
      </el-col>
    </el-row>

    <div class="body-wrapper">
      <el-row :gutter="20" style="margin: 0;">
        <el-col>
          <div class="collection-wrapper">
            <div class="name-wrapper">
              <h3>模型<br>文件夹1</h3>

            </div>
            <div class="buttons-wrapper">
              <i class="el-icon-edit"></i>
              <i class="el-icon-close"></i>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
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

<style scoped src="./ProModelCollections.css"></style>
