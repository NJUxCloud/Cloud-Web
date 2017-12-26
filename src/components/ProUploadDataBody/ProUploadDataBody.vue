<template>
  <div>
    <div class="breadcrumb-wrapper">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>专业上传</el-breadcrumb-item>
        <el-breadcrumb-item>上传数据
          <el-tooltip content="上传数据以供模型选用" placement="bottom" effect="light">
            <i class="el-icon-question"></i>
          </el-tooltip>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="body-wrapper">
      <el-row :gutter="20" style="margin: 0">
        <el-col :xs="24" :sm="24" :md="6" :lg="6">
          <div class="left-wrapper">
            <div class="button-wrapper">
              <my-button content="点 击 上 传" color="#000000"></my-button>
            </div>
            <div class="intro-wrapper">
              <!--<img src="../../assets/box-border.png"/>-->
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18" :lg="18">
          <div class="right-wrapper">
            <!--<img src="../../assets/box-border.png"/>-->
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" v-for="(index, singleData) in dataList" :key="index">
                <div class="data-wrapper">
                  <div class="header-wrapper">
                    <i class="el-icon-tickets"></i>
                    <h3>{{ singleData.dataName }}</h3>
                  </div>

                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'

  export default {
    components: {
      MyButton
    },
    data () {
      return {
        dataList: [
          {
            dataName: '数据1',
            path: '/数据1',
            updateTime: '2017-12-12 12:12:12'
          },
          {
            dataName: '数据2',
            path: '/数据2',
            updateTime: '2017-12-12 12:12:12'
          },
          {
            dataName: '数据3',
            path: '/数据3',
            updateTime: '2017-12-12 12:12:12'
          },
          {
            dataName: '数据4',
            path: '/数据4',
            updateTime: '2017-12-12 12:12:12'
          },
          {
            dataName: '数据5',
            path: '/数据5',
            updateTime: '2017-12-12 12:12:12'
          }
        ]
      }
    }
  }
</script>

<style scoped src="./ProUploadDataBody.css"></style>
