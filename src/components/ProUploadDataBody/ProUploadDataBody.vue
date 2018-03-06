<template>
  <div>
    <!--<div class="breadcrumb-wrapper">-->
      <!--<el-breadcrumb separator="/">-->
        <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>专业上传</el-breadcrumb-item>-->
        <!--<el-breadcrumb-item>上传数据-->
          <!--<el-tooltip content="上传数据以供模型选用" placement="bottom" effect="light">-->
            <!--<i class="el-icon-question"></i>-->
          <!--</el-tooltip>-->
        <!--</el-breadcrumb-item>-->
      <!--</el-breadcrumb>-->
    <!--</div>-->
    <model-steps :stepCount="1"></model-steps>

    <div class="body-wrapper">
      <!--<el-row :gutter="20" style="margin: 0">-->
        <!--<el-col :xs="24" :sm="24" :md="6" :lg="6">-->
          <!--<div class="left-wrapper">-->
            <!--<div class="button-wrapper" @click="openUploadData = true">-->
              <!--<my-button content="点 击 上 传" color="#000000"></my-button>-->
            <!--</div>-->
            <!--<div class="intro-wrapper">-->
              <!--<h3>数据说明</h3>-->
              <!--&lt;!&ndash;<img src="../../assets/box-border.png"/>&ndash;&gt;-->
              <!--<p style="text-align: left">接受格式：</p>-->
              <!--<p>.zip</p>-->
              <!--<p style="text-align: left">包含格式：</p>-->
              <!--<p>.txt</p>-->
              <!--<p>.png</p>-->
              <!--<p>.jpg</p>-->
              <!--<p>.mp3</p>-->
            <!--</div>-->
          <!--</div>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :md="18" :lg="18">-->
          <!--<div class="right-wrapper">-->
            <!--<h3>已上传数据</h3>-->
            <!--<h1 style="width: 100%; margin-top: 25%; text-align: center; font-weight: 600;" v-if="dataList.length === 0">尚未上传数据...</h1>-->
            <!--&lt;!&ndash;<img src="../../assets/box-border.png"/>&ndash;&gt;-->
            <!--<el-row :gutter="20">-->
              <!--<el-col :xs="24" :sm="24" :md="12" :lg="12" v-for="singleData in dataList" :key="singleData.index">-->
                <!--<div class="data-wrapper">-->
                  <!--<div class="header-wrapper">-->
                    <!--<i class="el-icon-tickets"></i>-->
                    <!--<h4>{{ singleData.dataName }}</h4>-->
                  <!--</div>-->
                  <!--<div class="path-wrapper">-->
                    <!--<p>数据路径：{{ singleData.path }}</p>-->
                    <!--<a>拷贝路径</a>-->
                  <!--</div>-->
                  <!--<div class="time-wrapper">-->
                    <!--<p>上传时间：{{ singleData.updateTime }}</p>-->
                  <!--</div>-->

                  <!--<div class="icon-wrapper">-->
                    <!--<i :class="singleData.iconClass" @mouseover="changeIconClass(singleData)" @mouseleave="changeIconClass(singleData)" @click="tryDeleteData(singleData)"></i>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</el-col>-->
            <!--</el-row>-->
          <!--</div>-->
        <!--</el-col>-->
      <!--</el-row>-->

      <h2 style="font-weight: 400;">数据文件</h2>
      <el-upload
        class="upload-demo"
        ref="dataUpload"
        action=""
        :file-list="fileList"
        :before-upload="beforeUploadData"
        :on-change="handleDataFileChange"
        :on-remove="handleDataFileRemove"
        :limit="1"
        :show-file-list="true"
        :auto-upload="false"
      >
        <div slot="trigger" class="select-file-button-wrapper" v-show="showDataFileButton">
          <!--<my-dialog-button content="选取文件" v-show="showDataFileButton"></my-dialog-button>-->
          <!--<ul class="el-upload-list el-upload-list&#45;&#45;text">-->
          <!--<li class="el-upload-list__item is-ready">-->
          <!--<a class="el-upload-list__item-name"></a>-->

          <!--</li>-->
          <!--</ul>-->
          <a class="select-file-button">选择文件</a>
        </div>
        <!--<el-button slot="trigger" size="small" type="default">选取文件</el-button>-->
        <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>-->
        <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
      </el-upload>

      <h2 style="position: relative; display: inline-block; margin-top: 100px; font-weight: 400;">标签文件</h2>
      <el-upload
        class="upload-demo"
        ref="tagUpload"
        action=""
        :file-list="tagList"
        :before-upload="beforeUploadTag"
        :on-change="handleTagFileChange"
        :on-remove="handleTagFileRemove"
        :limit="1"
        :show-file-list="true"
        :auto-upload="false">
        <div slot="trigger" class="select-file-button-wrapper" v-show="showTagFileButton">
          <!--<my-dialog-button content="选取文件" v-show="showDataFileButton"></my-dialog-button>-->
          <!--<ul class="el-upload-list el-upload-list&#45;&#45;text">-->
          <!--<li class="el-upload-list__item is-ready">-->
          <!--<a class="el-upload-list__item-name"></a>-->

          <!--</li>-->
          <!--</ul>-->
          <a class="select-file-button">选择文件</a>
        </div>
        <!--<el-button slot="trigger" size="small" type="default">选取文件</el-button>-->
        <!--<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传</el-button>-->
        <!--<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>-->
      </el-upload>

      <div class="button-wrapper" @click="uploadData">
        <my-button content="点 击 上 传" color="#000000" style="margin-top: 100px; margin-bottom: 30px"></my-button>
      </div>
    </div>

    <el-dialog
      title="删除数据"
      :visible.sync="confirmDeleteDataStatus"
      width="300px"
      top="300px"
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
    <upload-data-dialog :openUploadData="openUploadData" @closeUploadData="openUploadData=false"></upload-data-dialog>

  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import MyDialogButton from '../Basic/MyDialogButton/MyDialogButton.vue'
  import UploadDataDialog from '../Dialogs/UploadDataDialog.vue'
  import {mapGetters, mapActions} from 'vuex'
  import ModelSteps from '../ModelSteps/ModelSteps.vue'

  export default {
    components: {
      MyButton,
      UploadDataDialog,
      MyDialogButton,
      ModelSteps
    },
    data () {
      return {
        confirmDeleteDataStatus: false,
        openUploadData: false,
        dataList: [
          {
            index: 1,
            dataName: '数据1',
            path: '/数据1',
            updateTime: '2017-12-12 12:12:12',
            iconClass: 'el-icon-circle-check'
          }
        ],
        dataToBeDeleted: {},
        fileList: [],
        tagList: [],
        showDataFileButton: true,
        showTagFileButton: true,
        uploaded: [false, false]
      }
    },
    computed: {
      ...mapGetters({
        modelName: 'modelName'
      })
    },
    methods: {
      ...mapActions({
        getDataList: 'getDataList',
        uploadDataAction: 'uploadData',
        uploadTagAction: 'uploadTag'
      }),
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
        this.confirmDeleteDataStatus = false
      },
      handleDataFileChange (file, fileList) {
//        alert('sa')
        this.showDataFileButton = false
      },
      handleDataFileRemove (file, fileList) {
        this.showDataFileButton = true
      },
      handleTagFileChange (file, fileList) {
//        alert('sa')
        this.showTagFileButton = false
      },
      handleTagFileRemove (file, fileList) {
        this.showTagFileButton = true
      },
      beforeUploadData (file) {
        console.log(file)
        if (file.name.split('.')[file.name.split('.').length - 1] !== 'zip') {
          this.$message({
            type: 'error',
            showClose: true,
            message: '只接受zip类型数据文件！'
          })
          this.uploaded[0] = false
          this.uploaded[1] = false
        } else {
          this.uploadDataAction({
            onSuccess: () => {
//              this.fileList.push(file)
//              this.$message({
//                'showClose': true,
//                'type': 'success',
//                'message': '上传数据成功!'
              this.uploaded[0] = true
              this.uploadFinish()
//              })
            },
            onError: () => {
              this.$message({
                'showClose': true,
                'type': 'error',
                'message': '上传数据失败!'
              })
            },
            body: {
              'file_type': 'zip',
              'file_class': 'picture',
              'file': file
            }
          })
        }
        return false
      },
      beforeUploadTag (file) {
        console.log(file)
        if (file.name.split('.')[file.name.split('.').length - 1] !== 'json') {
          this.$message({
            type: 'error',
            showClose: true,
            message: '只接受json类型标签文件！'
          })
          this.uploaded[0] = false
          this.uploaded[1] = false
        } else {
          this.uploadTagAction({
            onSuccess: () => {
//              this.tagList.push(file)
//              this.$message({
//                'showClose': true,
//                'type': 'success',
//                'message': '上传标签文件成功!'
//              })
              this.uploaded[1] = true
              this.uploadFinish()
            },
            onError: () => {
              this.$message({
                'showClose': true,
                'type': 'error',
                'message': '上传标签文件失败!'
              })
            },
            body: {
              'modelName': this.modelName,
              'file': file
            }
          })
        }
        return false
      },
      uploadData: function () {
//        console.log(this.$refs.upload)
        if (this.$refs.dataUpload.uploadFiles.length > 0 && this.$refs.tagUpload.uploadFiles.length > 0) {
          this.$refs.dataUpload.submit()
          this.$refs.tagUpload.submit()
        } else {
          this.$message({
            showClose: true,
            message: '请分别选择数据文件和标签文件！',
            type: 'error'
          })
        }
//        console.log(this.$refs.dataUpload.uploadFiles.length)
//        console.log(this.$refs.tagUpload.uploadFiles.length)
      },
      uploadFinish () {
        if (this.uploaded[0] === true && this.uploaded[1] === true) {
          this.$router.push('/dataPretreatment')
          this.$message({
            showClose: true,
            message: '上传数据及标签文件成功！',
            type: 'success'
          })
        }
      }
    },
    watch: {
      fileList: function () {
        if (this.fileList.length === 0) {
          this.showDataFileButton = true
        } else {
          this.showDataFileButton = false
        }
      },
      tagList: function () {
        if (this.tagList.length === 0) {
          this.showTagFileButton = true
        } else {
          this.showTagFileButton = false
        }
      }
    },
    mounted () {
//      this.getDataList({
//        onSuccess: (data) => {
//          this.dataList = JSON.parse(JSON.stringify(data))
//          console.log(data)
//        },
//        onError: () => {
//        }
//      })
    }
  }
</script>

<style scoped src="./ProUploadDataBody.css"></style>
