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
              <h3>数据说明</h3>
              <!--<img src="../../assets/box-border.png"/>-->
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
              <p>&nbsp;</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="24" :md="18" :lg="18">
          <div class="right-wrapper">
            <h3>已上传数据</h3>
            <!--<img src="../../assets/box-border.png"/>-->
            <el-row :gutter="20">
              <el-col :xs="24" :sm="24" :md="12" :lg="12" v-for="singleData in dataList" :key="singleData.index">
                <div class="data-wrapper">
                  <div class="header-wrapper">
                    <i class="el-icon-tickets"></i>
                    <h4>{{ singleData.dataName }}</h4>
                  </div>
                  <div class="path-wrapper">
                    <p>数据路径：{{ singleData.path }}</p>
                    <a>拷贝路径</a>
                  </div>
                  <div class="time-wrapper">
                    <p>上传时间：{{ singleData.updateTime }}</p>
                  </div>

                  <div class="icon-wrapper">
                    <i :class="singleData.iconClass" @mouseover="changeIconClass(singleData)" @mouseleave="changeIconClass(singleData)" @click="tryDeleteData(singleData)"></i>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog
      title="删除数据"
      :visible.sync="confirmDeleteDataStatus"
      width="300px"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
      center>
      <span>您确定要删除该数据吗？</span>
      <span slot="footer" class="dialog-footer" style="display: inline-block;">
        <div @click="confirmDeleteDataStatus = false" style="display: inline-block;">
          <my-dialog-button content="取 消"></my-dialog-button>
        </div>
        <div @click="deleteData" style="display: inline-block;">
          <my-dialog-button type="primary" content="确 定"></my-dialog-button>
        </div>
  </span>
    </el-dialog>

  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import MyDialogButton from '../Basic/MyDialogButton/MyDialogButton.vue'

  export default {
    components: {
      MyButton,
      MyDialogButton
    },
    data () {
      return {
        confirmDeleteDataStatus: false,
        dataList: [
          {
            index: 1,
            dataName: '数据1',
            path: '/数据1',
            updateTime: '2017-12-12 12:12:12',
            iconClass: 'el-icon-circle-check'
          },
          {
            index: 2,
            dataName: '数据2',
            path: '/数据2',
            updateTime: '2017-12-12 12:12:12',
            iconClass: 'el-icon-circle-check'
          },
          {
            index: 3,
            dataName: '数据3',
            path: '/数据3',
            updateTime: '2017-12-12 12:12:12',
            iconClass: 'el-icon-circle-check'
          },
          {
            index: 4,
            dataName: '数据4',
            path: '/数据4',
            updateTime: '2017-12-12 12:12:12',
            iconClass: 'el-icon-circle-check'
          },
          {
            index: 5,
            dataName: '数据5',
            path: '/数据5',
            updateTime: '2017-12-12 12:12:12',
            iconClass: 'el-icon-circle-check'
          }
        ],
        dataToBeDeleted: {}
      }
    },
    methods: {
      changeIconClass: function (singleData) {
        if (singleData.iconClass === 'el-icon-circle-check') {
          singleData.iconClass = 'el-icon-circle-close'
        } else {
          singleData.iconClass = 'el-icon-circle-check'
        }
      },
      tryDeleteData: function (singleData) {
        this.dataToBeDeleted = singleData
        this.confirmDeleteDataStatus = true
      },
      deleteData: function () {
        // todo
//        console.log(singleData)
        this.confirmDeleteDataStatus = false
      }
    }
  }
</script>

<style scoped src="./ProUploadDataBody.css"></style>
