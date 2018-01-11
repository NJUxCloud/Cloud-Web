<template>
  <div class="uploaded-data-wrapper">
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

    <div class="body-wrapper">
      <h1 v-if="collections.length === 0">暂无历史数据...</h1>
      <el-row :gutter="20" style="margin: 0;">
        <el-col :xs="24" :sm="12" :md="8" :lg="6"  v-for="(collection, index) in collections" :key="index" style="text-align: center">
          <div class="collection-wrapper">
            <div class="name-wrapper">
              <h3>历史<br>数据{{ index }}</h3>
              <p>上传于<br>2017-11-11<br>11:11:11</p>

            </div>
            <div class="buttons-wrapper">
              <el-button @click="openModifyCollection = true">
                <i class="el-icon-edit"></i>
              </el-button>
              <el-button @click="openDeleteCollection = true">
                <i class="el-icon-close"></i>
              </el-button>
            </div>
          </div>
          <div class="model-button-wrapper">
            <el-button type="default">查<br>看<br>对<br>应<br>模<br>型</el-button>
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
  import { mapGetters } from 'vuex'
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
        collections: [
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {},
          {}
        ]
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize'
      })
    }
  }
</script>

<style scoped src="./UploadedDataBody.css"></style>
