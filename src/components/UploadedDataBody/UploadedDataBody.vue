<template>
  <div class="uploaded-data-wrapper">
    <el-row :gutter="20" style="margin: 0;">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="breadcrumb-wrapper">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的数据
              <el-tooltip content="呈现所有已上传数据以供使用、修改和删除" placement="bottom" effect="light">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>

    </el-row>

    <div class="body-wrapper">
      <h1 v-if="collections.length === 0" style="font-weight: 600;">暂无历史数据...</h1>
      <el-row :gutter="20" style="margin: 0;">
        <el-col :xs="24" :sm="12" :md="8" :lg="6"  v-for="(collection, index) in collections" :key="index" style="text-align: center">
          <div class="collection-wrapper">
            <div class="name-wrapper">
              <h4 style="white-space: normal; width: 100%; word-break: break-all;">{{ collection.file_name }}</h4>
              <p>上传于<br>{{ collection.created_at.split('T')[0] }}<br>{{ collection.created_at.split('T')[1].split('.')[0] }}</p>

            </div>
            <div class="buttons-wrapper">
              <!--<el-button @click="openModifyCollection = true">-->
                <!--<i class="el-icon-edit"></i>-->
              <!--</el-button>-->
              <!--<el-button @click="openDeleteCollection = true">-->
                <!--<i class="el-icon-close"></i>-->
              <!--</el-button>-->
              <el-button style="width: 100%; font-size: 20px" @click="useDataToCreateModel(collection)">构建新模型</el-button>
            </div>
          </div>
          <div class="model-button-wrapper">
            <!--<el-button type="default">查<br>看<br>对<br>应<br>模<br>型</el-button>-->
            <el-button type="default" style="top: -180px; color: #666; cursor: default">图<br><br>片<br><br>数<br><br>据</el-button>
          </div>
          <!--<my-button content="查 看对应模型" class="model-button"></my-button>-->

        </el-col>
      </el-row>
    </div>

    <model-collection-delete-dialog :openDeleteCollection="openDeleteCollection" collectionName="模型文件夹" @closeDeleteCollection="openDeleteCollection = false"></model-collection-delete-dialog>
    <model-collection-modify-dialog :openModifyCollection="openModifyCollection" collectionName="模型文件夹" @closeModifyCollection="openModifyCollection = false"></model-collection-modify-dialog>
  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  import ModelCollectionModifyDialog from '../Dialogs/ModelCollectionModifyDialog.vue'
  import ModelCollectionDeleteDialog from '../Dialogs/ModelCollectionDeleteDialog.vue'

  export default {
    components: {
      MyButton,
      ModelCollectionModifyDialog,
      ModelCollectionDeleteDialog
    },
    data () {
      return {
        openDeleteCollection: false,
        openModifyCollection: false,
        collections: []
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize'
      })
    },
    methods: {
      ...mapActions({
        getDataList: 'getDataList'
      }),
      ...mapMutations({
        useData: 'useData'
      }),
      useDataToCreateModel: function (data) {
        let isUrl = false
        if (data.file_name.startsWith('url')) {
          isUrl = true
        }
        this.useData({
          dataID: data.id,
          isUrl: isUrl})
        console.log(data.id + ';' + isUrl)
        this.$router.push('/modelName')
      }
    },
    mounted () {
      this.getDataList({
        onSuccess: (data) => {
          this.collections = JSON.parse(JSON.stringify(data))
          console.log(data)
        },
        onError: () => {
        }
      })
    }
  }
</script>

<style scoped src="./UploadedDataBody.css"></style>
