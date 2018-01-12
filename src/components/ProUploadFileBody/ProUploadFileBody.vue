<template>
  <div class="upload-file-wrapper">
    <el-row :gutter="20" style="margin: 0;">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="breadcrumb-wrapper">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>已上传数据
              <el-tooltip content="呈现所有已上传数据以供使用、修改和删除" placement="bottom" effect="light">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>

    </el-row>


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

<style scoped src="./ProUploadFileBody.css"></style>
