<template>
  <div class="model-collections-wrapper">
    <el-row :gutter="20" style="margin: 0;">
      <el-col :xs="24" :sm="24" :md="12" :lg="12">
        <div class="breadcrumb-wrapper">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <!--<el-breadcrumb-item>专业上传</el-breadcrumb-item>-->
            <el-breadcrumb-item>我的模型
              <el-tooltip content="上传代码文件夹以供训练选用" placement="bottom" effect="light">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>
      <!--<el-col :xs="24" :sm="24" :md="12" :lg="12" :class="[largeSize ? 'upload-button-div-wrapper-lg' : 'upload-button-div-wrapper-sm' ]">-->
        <!--<div :class="[largeSize ? 'upload-button-wrapper-lg' : 'upload-button-wrapper-sm' ]">-->
          <!--<my-button content="上传文件夹" color="#000000"></my-button>-->
        <!--</div>-->
      <!--</el-col>-->
    </el-row>

    <div class="body-wrapper">
      <el-row :gutter="20" style="margin: 0;">
        <el-col :xs="24" :sm="12" :md="8" :lg="6"  v-for="(collection, index) in collections" :key="index" style="text-align: center">
          <div class="collection-wrapper">
            <div class="name-wrapper">
              <p>模型{{index}}</p>
              <h3>{{ collection }}</h3>

            </div>
            <div class="buttons-wrapper">
              <!--<el-button @click="openModifyCollection = true">-->
                <!--<i class="el-icon-edit"></i>-->
              <!--</el-button>-->
              <!--<el-button @click="openDeleteCollection = true">-->
                <!--<i class="el-icon-close"></i>-->
              <!--</el-button>-->
              <el-button style="width: 100%; font-size: 20px" @click="useModel(collection)">使 用 模 型</el-button>
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
  import { mapGetters, mapActions } from 'vuex'
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
        getModelList: 'getModelList'
      }),
      useModel: function (modelName) {
        this.$router.push('/construct/' + modelName)
      }
    },
    mounted () {
      this.getModelList({
        onSuccess: (data) => {
          this.collections = JSON.parse(JSON.stringify(data))
          console.log(this.collections)
        },
        onError: () => {
          this.$message({
            showClose: true,
            type: 'error',
            message: '获得用户模型列表失败...请检查网络后重试'
          })
        }
      })
    }
  }
</script>

<style scoped src="./ProModelCollections.css"></style>
