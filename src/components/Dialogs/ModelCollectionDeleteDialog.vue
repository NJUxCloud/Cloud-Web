<template>
  <div>
    <el-dialog
      class="dialog-wrapper"
      :visible.sync="openDeleteCollection"
      :style="dialogWidth"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <img src="../../assets/dialog-bg.png">

      <div class="login-wrapper">
        <h1>删除文件夹</h1>
        <!--<a @click="changeDialog">去注册 ></a>-->
        <h2 style="width: 80%; margin-left: 15%; margin-top: 35%">您确定要删除模型文件夹：<br>{{ collectionInput }}吗？</h2>
        <!--<el-input v-model="collectionInput"></el-input>-->

      </div>

      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="closeDeleteCollectionDialogs">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
          <div @click="closeDeleteCollectionDialogs">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import MyDialogButton from '../Basic/MyDialogButton/MyDialogButton.vue'

  export default {
    props: ['openDeleteCollection','collectionName'],
    components: {
      MyDialogButton
    },
    data () {
      return {
        dialogWidth: {
          width: '30%',
          marginLeft: '35%'
        },
        collectionInput: ''
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    methods: {
      closeDeleteCollectionDialogs: function () {
        this.$emit('closeDeleteCollection')
      },
      changeDialogWidth: function () {
        if (this.mainWidth < 420) {
          this.dialogWidth.width = '100%'
          this.dialogWidth.marginLeft = '0%'
        } else if (this.mainWidth <= 768) {
          this.dialogWidth.width = '60%'
          this.dialogWidth.marginLeft = '20%'
        } else if (this.mainWidth < 992) {
          this.dialogWidth.width = '40%'
          this.dialogWidth.marginLeft = '30%'
        } else {
          this.dialogWidth.width = '30%'
          this.dialogWidth.marginLeft = '35%'
        }
      }
    },
    watch: {
      mainWidth: function () {
        this.changeDialogWidth()
      },
      openDeleteCollection: function () {
        this.collectionInput = this.collectionName
      }
    },
    mounted () {
      this.collectionInput = this.collectionName
    }
  }
</script>

<style scoped src="./Dialogs.css"></style>
