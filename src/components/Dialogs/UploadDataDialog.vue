<template>
  <div>
    <el-dialog
      class="dialog-wrapper"
      :visible.sync="openUploadData"
      :style="dialogWidth"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <img src="../../assets/dialog-bg.png">

      <div class="login-wrapper">
        <h1>上传数据</h1>
        <h2>数据文件</h2>
        <el-upload
          class="upload-demo"
          ref="upload"
          action=""
          :on-preview="handlePreview"
          :file-list="fileList"
          :on-exceed="handleExceed"
          :on-success="handleSuccess"
          :on-change="handleDataFileChange"
          :on-remove="handleDataFileRemove"
          :limit="1"
          :show-file-list="true"
          :auto-upload="false">
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

        <h2 style="position: relative; display: inline-block; margin-top: 5%;">标签文件</h2>
        <el-upload
          class="upload-demo"
          ref="upload"
          action=""
          :on-preview="handlePreview"
          :file-list="fileList"
          :on-exceed="handleExceed"
          :on-success="handleSuccess"
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
      </div>



      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="submitUpload">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
          <div @click="closeUploadDataDialogs">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MyDialogButton from '../Basic/MyDialogButton/MyDialogButton.vue'

  export default {
    props: ['openUploadData'],
    components: {
      MyDialogButton
    },
    data () {
      return {
        dialogWidth: {
          width: '30%',
          marginLeft: '35%'
        },
        fileList: [],
        showDataFileButton: true,
        showTagFileButton: true
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    methods: {
      closeUploadDataDialogs: function () {
        this.$emit('closeUploadData')
      },
      changeDialogWidth: function () {
        if (this.mainWidth < 420) {
          this.dialogWidth.width = '100%'
          this.dialogWidth.marginLeft = '0%'
        } else if (this.mainWidth <= 620) {
          this.dialogWidth.width = '80%'
          this.dialogWidth.marginLeft = '10%'
        } else if (this.mainWidth <= 768) {
          this.dialogWidth.width = '70%'
          this.dialogWidth.marginLeft = '15%'
        } else if (this.mainWidth <= 880) {
          this.dialogWidth.width = '60%'
          this.dialogWidth.marginLeft = '20%'
        } else if (this.mainWidth < 992) {
          this.dialogWidth.width = '50%'
          this.dialogWidth.marginLeft = '25%'
        } else if (this.mainWidth < 1080) {
          this.dialogWidth.width = '40%'
          this.dialogWidth.marginLeft = '30%'
        } else {
          this.dialogWidth.width = '30%'
          this.dialogWidth.marginLeft = '35%'
        }
      },
      submitUpload: function () {
        console.log(this.$refs.upload)
        this.$refs.upload.submit()
      },
      handleExceed (files, fileList) {
        alert('超过')
//        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      handlePreview (file) {
        console.log(file)
      },
      handleSuccess (response, file, fileList) {
        alert('sa')
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
      }
    },
    watch: {
      fileList: function () {
        console.log(this.fileList)
      },
      mainWidth: function () {
        this.changeDialogWidth()
      }
    },
    mounted () {
      this.changeDialogWidth()
    }
  }
</script>

<style scoped src="./Dialogs.css"></style>
<style scoped src="./Upload.css"></style>
