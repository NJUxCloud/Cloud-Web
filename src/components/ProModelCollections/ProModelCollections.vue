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
      <el-col :xs="24" :sm="24" :md="12" :lg="12" :class="[largeSize ? 'upload-button-div-wrapper-lg' : 'upload-button-div-wrapper-sm' ]">
        <div :class="[largeSize ? 'upload-button-wrapper-lg' : 'upload-button-wrapper-sm' ]">
          <my-button content="上传文件夹" color="#000000"></my-button>
        </div>
      </el-col>
    </el-row>

    <div class="body-wrapper">
      <el-row :gutter="20" style="margin: 0;">
        <el-col :xs="24" :sm="12" :md="8" :lg="6"  v-for="collection in collections" style="text-align: center">
          <div class="collection-wrapper">
            <div class="name-wrapper">
              <h3>模型<br>文件夹1</h3>

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

<style scoped src="./ProModelCollections.css"></style>
