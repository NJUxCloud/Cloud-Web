<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <model-steps :stepCount="1"></model-steps>

    <div  class="body-wrapper" v-if="isUrl">
      <h2 style="font-weight: 400; margin-top: 100px;">使用已上传数据无需再次上传数据，<br>点击下一步进行模型构建吧！</h2>
      <div class="button-wrapper" style="margin-top: 100px" @click="skipUpload">
        <my-button content="下 一 步" color="#000000" style="margin-top: 100px; margin-bottom: 30px"></my-button>
      </div>
    </div>
    <div class="body-wrapper" v-if="!isUrl">
      <h2 style="position: relative; display: inline-block; margin-top: 100px; font-weight: 400;">标签文件</h2>
      <el-upload
        class="upload-demo"
        ref="TagUpload"
        action=""
        :file-list="tagList"
        :before-upload="beforeUploadTag"
        :on-change="handleTagFileChange"
        :on-remove="handleTagFileRemove"
        :limit="1"
        :show-file-list="true"
        :auto-upload="false">
        <div slot="trigger" class="select-file-button-wrapper" v-show="showTagFileButton">
          <a class="select-file-button">选择文件</a>
        </div>
      </el-upload>

      <div class="button-wrapper" style="margin-top: 100px" @click="uploadData">
        <my-button content="点 击 上 传" color="#000000" style="margin-top: 100px; margin-bottom: 30px"></my-button>
      </div>
    </div>
    <!--<pro-model-collections></pro-model-collections>-->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import MyButton from '../components/Basic/MyButton/MyButton.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import ModelSteps from '../components/ModelSteps/ModelSteps.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    components: {
      MyNavBar,
      MyButton,
      MyFooter,
      ModelSteps
    },
    data () {
      return {
        modelName: '',
        tagList: [],
        showTagFileButton: true
      }
    },
    methods: {
      ...mapActions({
        uploadTagAction: 'uploadTag'
      }),
      handleTagFileChange (file, fileList) {
//        alert('sa')
        this.showTagFileButton = false
      },
      handleTagFileRemove (file, fileList) {
        this.showTagFileButton = true
      },
      beforeUploadTag (file) {
        console.log(file)
        if (file.name.split('.')[file.name.split('.').length - 1] !== 'json') {
          this.$message({
            type: 'error',
            showClose: true,
            message: '只接受json类型标签文件！'
          })
        } else {
          this.uploadTagAction({
            onSuccess: () => {
//              this.tagList.push(file)
              this.$message({
                'showClose': true,
                'type': 'success',
                'message': '上传标签文件成功!'
              })
              if (this.isUrl) {
//                this.$router.push('/modelCreation')
                let body = {
                  'dataId': this.dataID,
                  'modelName': this.modelName,
                  'operations': []
                }
                this.pretreatData({
                  onSuccess: () => {
                    this.$router.push('/modelCreation')
                  },
                  body: body,
                  onError: () => {
                  }
                })
              } else {
                this.$router.push('/dataPretreatment')
              }
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
        if (this.$refs.TagUpload.uploadFiles.length > 0) {
          this.$refs.TagUpload.submit()
        } else {
          this.$message({
            showClose: true,
            message: '请分别选择要上传的标签文件！',
            type: 'error'
          })
        }
//        console.log(this.$refs.dataUpload.uploadFiles.length)
//        console.log(this.$refs.tagUpload.uploadFiles.length)
      },
      skipUpload: function () {
        this.$router.push('/dataPretreatment')
      }
    },
    computed: {
      ...mapGetters({
        isUrl: 'isUrl',
        dataID: 'dataID',
        modelName: 'modelName'
      })
    },
    mounted () {
//      alert(this.isUrl)
//      alert(this.dataID)
    }
  }
</script>

<style scoped src="../components/ProUploadDataBody/ProUploadDataBody.css"></style>
