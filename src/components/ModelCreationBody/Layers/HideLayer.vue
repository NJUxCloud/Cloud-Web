<template>
  <div>
    <div style="margin-right: 10px;">
      <img src="../../../assets/arrow.png" class="arrow-wrapper"/>
      <div class="layer-wrapper">
        <img src="../../../assets/HideLayer.png" style="margin-right: 10px; cursor: pointer;" @click="showHideLayerSetting = true">
        <p>隐藏层{{ count }}</p>
        <i v-if="showDelete" class="el-icon-circle-close" @click="deleteHideLayerSetting=true"></i>
      </div>
    </div>

    <el-dialog
      class="dialog-wrapper"
      width="80%"
      top="10vh"
      :title="title"
      :visible.sync="showHideLayerSetting"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
      :fullscreen="true"
    >
      <part-title title="参数初始化"></part-title>
      <div class="param-wrapper">
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="4" :sm="4" :md="4" :lg="4">
            <p>方法</p>
          </el-col>
          <el-col :xs="20" :sm="20" :md="8" :lg="8">
            <el-select v-model="selectedFunction" placeholder="请选择"  style="width: 216px; margin-bottom: 30px;">
              <el-option
                v-for="item in functions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :xs="4" :sm="4" :md="4" :lg="4">
            <p style="float: left;">b</p>
            <el-tooltip content="非负整数" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="20" :sm="20" :md="8" :lg="8">
            <el-input style="width: 216px;" v-model="bValue"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="4" :sm="4" :md="4" :lg="4">
            <p style="float: left;">W</p>
            <el-tooltip content="四个非负整数" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="5" :sm="5" :md="5" :lg="5">
            <el-input style="width: 80%;" v-model="wValue[0]"></el-input>
          </el-col>
          <el-col :xs="5" :sm="5" :md="5" :lg="5">
            <el-input style="width: 80%;" v-model="wValue[1]"></el-input>
          </el-col>
          <el-col :xs="5" :sm="5" :md="5" :lg="5">
            <el-input style="width: 80%;" v-model="wValue[2]"></el-input>
          </el-col>
          <el-col :xs="5" :sm="5" :md="5" :lg="5">
            <el-input style="width: 80%;" v-model="wValue[3]"></el-input>
          </el-col>
        </el-row>
      </div>

      <part-title title="激活函数"></part-title>
      <div class="function-wrapper">
        <el-select v-model="activationFunction" placeholder="请选择"  style="width: 216px">
          <el-option
            v-for="item in activationFunctions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>

      <part-title title="防止过拟合方法"></part-title>
      <div class="function-wrapper">
        <el-checkbox v-model="preventingOverFitting[0]">batch normalization</el-checkbox>
        <el-checkbox v-model="preventingOverFitting[1]">dropout</el-checkbox>
      </div>

      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="showHideLayerSetting=false">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
            <div @click="showHideLayerSetting=false">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
      </span>
    </el-dialog>

    <el-dialog
      class="dialog-wrapper"
      width="40%"
      title="删除隐藏层"
      :visible.sync="deleteHideLayerSetting"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
    >
      <h1 style="font-weight: 500">是否删除{{ title }}？</h1>
      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="deleteHideLayerSettingFunction">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
            <div @click="deleteHideLayerSetting=false">
            <my-dialog-button content="取消"></my-dialog-button>
          </div>
      </span>
    </el-dialog>

  </div>
</template>

<script>
  import MyDialogButton from '../../Basic/MyDialogButton/MyDialogButton.vue'
  import PartTitle from '../../Basic/PartTitle/PartTitle.vue'
  export default {
    props: ['count', 'totalCount'],
    components: {
      MyDialogButton,
      PartTitle
    },
    data () {
      return {
        showHideLayerSetting: false,
        title: '隐藏层' + this.count,
        deleteHideLayerSetting: false,
        showDelete: false,
        functions: [{
          value: '全零',
          label: '全零'
        }, {
          value: '正态分布',
          label: '正态分布'
        }, {
          value: 'Xavier',
          label: 'Xavier'
        }],
        selectedFunction: '全零',
        activationFunctions: [{
          value: 'Sigmoid函数',
          label: 'Sigmoid函数'
        }, {
          value: 'ReLU函数',
          label: 'ReLU函数'
        }],
        activationFunction: 'ReLU函数',
        preventingOverFitting: [true, false],
        bValue: 0,
        wValue: [0, 0, 0, 0]
      }
    },
    methods: {
      deleteHideLayerSettingFunction: function () {
        this.deleteHideLayerSetting = false
        this.$emit('deleteHideLayer')
      }
    },
    watch: {
      totalCount: function () {
        if (this.totalCount === this.count && this.count !== 1) {
          this.showDelete = true
        } else {
          this.showDelete = false
        }
      }
    },
    mounted () {
      if (this.totalCount === this.count && this.count !== 1) {
        this.showDelete = true
      } else {
        this.showDelete = false
      }
    }
  }
</script>

<style scoped src="./layer.css"></style>
