<template>
  <div>
    <el-dialog
      class="dialog-wrapper"
      :visible.sync="openModifyCollection"
      :style="dialogWidth"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <img src="../../assets/dialog-bg.png">

      <div class="login-wrapper">
        <h1>修改信息</h1>
        <!--<a @click="changeDialog">去注册 ></a>-->
        <h2>文件夹名</h2>
        <el-input v-model="collectionInput"></el-input>

      </div>

      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="closeModifyCollectionDialogs">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
          <div @click="closeModifyCollectionDialogs">
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
    props: ['openModifyCollection','collectionName'],
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
      closeModifyCollectionDialogs: function () {
        this.$emit('closeModifyCollection')
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
      openModifyCollection: function () {
        this.collectionInput = this.collectionName
      }
    },
    mounted () {
      this.collectionInput = this.collectionName
    }
  }
</script>

<style scoped src="./Dialogs.css"></style>
