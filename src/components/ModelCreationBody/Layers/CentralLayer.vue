<template>
  <div>
    <div style="margin-right: 10px;">
      <img src="../../../assets/arrow.png" class="arrow-wrapper"/>
      <div class="layer-wrapper">
        <img src="../../../assets/CentralLayer.png" style="margin-right: 10px; cursor: pointer;" @click="showCentralLayerSetting = true">
        <p>中间层{{ count }}</p>
        <i v-if="showDeleteCentral" class="el-icon-circle-close" @click="deleteCentralLayerSetting=true"></i>
      </div>
    </div>

    <el-dialog
      class="dialog-wrapper"
      :title="title"
      :visible.sync="showCentralLayerSetting"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="showCentralLayerSetting=false">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
            <div @click="showCentralLayerSetting=false">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
      </span>
    </el-dialog>

    <el-dialog
      class="dialog-wrapper"
      width="40%"
      title="删除中间层"
      :visible.sync="deleteCentralLayerSetting"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <h1 style="font-weight: 500">是否删除{{ title }}？</h1>
      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="deleteCentralLayerSettingFunction">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
            <div @click="deleteCentralLayerSetting=false">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import MyDialogButton from '../../Basic/MyDialogButton/MyDialogButton.vue'

  export default {
    props: ['count', 'totalCount'],
    components: {
      MyDialogButton
    },
    data () {
      return {
        showCentralLayerSetting: false,
        title: '中间层' + this.count,
        deleteCentralLayerSetting: false,
        showDeleteCentral: false
      }
    },
    methods: {
      deleteCentralLayerSettingFunction: function () {
        this.deleteCentralLayerSetting = false
        this.$emit('deleteCentralLayer')
      }
    },
    watch: {
      totalCount: function () {
        if (this.totalCount === this.count && this.count !== 1) {
          this.showDeleteCentral = true
        } else {
          this.showDeleteCentral = false
        }
//        alert(this.title + this.showDeleteCentral)
      }
    },
    mounted () {
      if (this.totalCount === this.count && this.count !== 1) {
        this.showDeleteCentral = true
      } else {
        this.showDeleteCentral = false
      }
//      alert(this.title + this.showDeleteCentral)
    }
  }
</script>

<style scoped src="./layer.css"></style>
