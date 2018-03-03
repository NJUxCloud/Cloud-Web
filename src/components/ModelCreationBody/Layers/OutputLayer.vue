<template>
  <div>
    <img src="../../../assets/arrow.png" class="arrow-wrapper"/>
    <div class="layer-wrapper">
      <img src="../../../assets/OutputLayer.png" class="square-img-wrapper" style="cursor: pointer;">
      <p>输出层</p>
    </div>

    <el-dialog
      class="dialog-wrapper"
      width="80%"
      top="10vh"
      title="输出层设置"
      :visible.sync="showOutputLayerSetting"
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

      <div v-if="this.type === '传统神经网络'" style="width: 100%">
        <part-title title="激活函数"></part-title>
        <div class="function-wrapper" style="width: 100%">
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
        <div class="function-wrapper" style="width: 100%">
          <el-checkbox v-model="preventingOverFitting[0]">batch normalization</el-checkbox>
          <el-checkbox v-model="preventingOverFitting[1]">dropout</el-checkbox>
        </div>

        <div v-if="preventingOverFitting[0]">
          <el-row :gutter="20" style="margin: 0; width: 100%;">
            <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left; white-space: nowrap">
              <p style="float: left">shift</p>
              <el-tooltip content="正整数" placement="right" effect="light">
                <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
              </el-tooltip>
            </el-col>
            <el-col :xs="24" :sm="24" :md="20" :lg="20" style="text-align: left">
              <el-input v-model="shift"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin: 0; width: 100%;">
            <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left; white-space: nowrap">
              <p style="float: left">scale</p>
              <el-tooltip content="正整数" placement="right" effect="light">
                <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
              </el-tooltip>
            </el-col>
            <el-col :xs="24" :sm="24" :md="20" :lg="20" style="text-align: left">
              <el-input v-model="scale"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20" style="margin: 0; width: 100%;">
            <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left; white-space: nowrap">
              <p style="float: left">epsilon</p>
              <el-tooltip content="正整数（显示的是e^n,n是要输入的值）" placement="right" effect="light">
                <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
              </el-tooltip>
            </el-col>
            <el-col :xs="24" :sm="24" :md="20" :lg="20" style="text-align: left">
              <el-input v-model="epsilon"></el-input>
            </el-col>
          </el-row>
        </div>
      </div>

      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="showOutputLayerSetting=false">
            <my-dialog-button content="确定"></my-dialog-button>
          </div>
            <div @click="showOutputLayerSetting=false">
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
    components: {
      MyDialogButton,
      PartTitle
    },
    props: ['type'],
    data () {
      return {
        showOutputLayerSetting: false,
        bValue: 0,
        wValue: [0, 0, 0, 0],
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
        scale: 1,
        shift: 1,
        epsilon: -1
      }
    }
  }
</script>

<style scoped src="./layer.css"></style>
