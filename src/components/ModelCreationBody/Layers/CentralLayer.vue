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
      width="80%"
      top="10vh"
      :title="title"
      :visible.sync="showCentralLayerSetting"
      :modal=true
      :modal-append-to-body=false
      :show-close=false
      :close-on-click-modal=false
      :close-on-press-escape=false
      :fullscreen="true"
    >
      <!--<part-title title="参数初始化"></part-title>-->
      <!--<div class="param-wrapper">-->
        <!--<el-row :gutter="20" style="margin: 0; width: 100%;">-->
          <!--<el-col :xs="4" :sm="4" :md="4" :lg="4">-->
            <!--<p>方法</p>-->
          <!--</el-col>-->
          <!--<el-col :xs="20" :sm="20" :md="8" :lg="8">-->
            <!--<el-select v-model="selectedFunction" placeholder="请选择"  style="width: 216px; margin-bottom: 30px;">-->
              <!--<el-option-->
                <!--v-for="item in functions"-->
                <!--:key="item.value"-->
                <!--:label="item.label"-->
                <!--:value="item.value">-->
              <!--</el-option>-->
            <!--</el-select>-->
          <!--</el-col>-->
          <!--<el-col :xs="4" :sm="4" :md="4" :lg="4">-->
            <!--<p style="float: left;">b</p>-->
            <!--<el-tooltip content="非负整数" placement="right" effect="light">-->
              <!--<i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>-->
            <!--</el-tooltip>-->
          <!--</el-col>-->
          <!--<el-col :xs="20" :sm="20" :md="8" :lg="8">-->
            <!--<el-input style="width: 216px;" v-model="bValue"></el-input>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :gutter="20" style="margin: 0; width: 100%;">-->
          <!--<el-col :xs="4" :sm="4" :md="4" :lg="4">-->
            <!--<p style="float: left;">W</p>-->
            <!--<el-tooltip content="四个非负整数" placement="right" effect="light">-->
              <!--<i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>-->
            <!--</el-tooltip>-->
          <!--</el-col>-->
          <!--<el-col :xs="5" :sm="5" :md="5" :lg="5">-->
            <!--<el-input style="width: 80%;" v-model="wValue[0]"></el-input>-->
          <!--</el-col>-->
          <!--<el-col :xs="5" :sm="5" :md="5" :lg="5">-->
            <!--<el-input style="width: 80%;" v-model="wValue[1]"></el-input>-->
          <!--</el-col>-->
          <!--<el-col :xs="5" :sm="5" :md="5" :lg="5">-->
            <!--<el-input style="width: 80%;" v-model="wValue[2]"></el-input>-->
          <!--</el-col>-->
          <!--<el-col :xs="5" :sm="5" :md="5" :lg="5">-->
            <!--<el-input style="width: 80%;" v-model="wValue[3]"></el-input>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->

      <part-title title="内部层选择"></part-title>
      <div class="function-wrapper">
        <el-checkbox v-model="innerLayer[0]">卷积层</el-checkbox>
        <el-checkbox v-model="innerLayer[1]">池化层</el-checkbox>
        <el-checkbox v-model="innerLayer[2]">激活层</el-checkbox>
        <el-checkbox v-model="innerLayer[3]">全连接层</el-checkbox>
        <el-checkbox v-model="innerLayer[4]">归一化层</el-checkbox>
      </div>

      <part-title title="卷积层设置" v-if="innerLayer[0]"></part-title>
      <div class="function-wrapper" v-if="innerLayer[0]">
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4">
            <p style="float: left;">卷积核</p>
            <el-tooltip content="4个正整数" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="8" :sm="8" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">高</p>
            <el-input style="width: 80%;" v-model="kernel[0]"></el-input>
          </el-col>
          <el-col :xs="8" :sm="8" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">宽</p>
            <el-input style="width: 80%;" v-model="kernel[1]"></el-input>
          </el-col>
          <el-col :xs="8" :sm="8" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">输出层</p>
            <el-input style="width: 80%;" v-model="kernel[2]"></el-input>
          </el-col>
          <!--<el-col :xs="5" :sm="5" :md="5" :lg="5" style="white-space: nowrap">-->
            <!--<p style="float: left;">个数</p>-->
            <!--<el-input style="width: 80%;" v-model="kernel[3]"></el-input>-->
          <!--</el-col>-->
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4">
            <p style="float: left;">步长</p>
            <el-tooltip content="3个正整数" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">高度步长</p>
            <el-input style="width: 80%;" v-model="convolutionStep[0]"></el-input>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">宽度步长</p>
            <el-input style="width: 80%;" v-model="convolutionStep[1]"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left">
            <p>填充方式</p>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" style="text-align: left">
            <el-select v-model="convolutionFillType" placeholder="请选择"  style="width: 216px; margin-bottom: 30px;">
              <el-option
                v-for="item in fillTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left">
            <p>初始化方式</p>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" style="text-align: left">
            <el-select v-model="init" placeholder="请选择"  style="width: 216px; margin-bottom: 30px;">
              <el-option
                v-for="item in initStrings"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left">
            <p>是否使用偏移</p>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" style="text-align: left">
            <el-checkbox v-model="isBias"></el-checkbox>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4">
            <p style="float: left;">偏移初始化小数</p>
            <el-tooltip content="值域： 0-1" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="8" :sm="8" :md="5" :lg="5" style="white-space: nowrap">
            <!--<p style="float: left;">高</p>-->
            <el-slider v-model="biasConstant" :format-tooltip="formatTooltip" style="width: 216px;"></el-slider>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4">
            <p style="float: left;">正太分布值</p>
            <el-tooltip content="初始化方式不是全零会使用到, 值域： 0-1" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="8" :sm="8" :md="5" :lg="5" style="white-space: nowrap">
            <!--<p style="float: left;">高</p>-->
            <el-slider v-model="stddevNorm" :format-tooltip="formatTooltip" style="width: 216px;"></el-slider>
            <!--<el-input v-model="stddevNorm"></el-input>-->
          </el-col>
        </el-row>
      </div>

      <part-title title="池化层设置" v-if="innerLayer[1]"></part-title>
      <div class="function-wrapper" v-if="innerLayer[1]">
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4">
            <p style="float: left;">核参数</p>
            <el-tooltip content="2个正整数" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">高</p>
            <el-input style="width: 80%;" v-model="poolWindow[0]"></el-input>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">宽</p>
            <el-input style="width: 80%;" v-model="poolWindow[1]"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4">
            <p style="float: left;">步长</p>
            <el-tooltip content="2个正整数" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">高度步长</p>
            <el-input style="width: 80%;" v-model="poolStep[0]"></el-input>
          </el-col>
          <el-col :xs="12" :sm="12" :md="5" :lg="5" style="white-space: nowrap">
            <p style="float: left;">宽度步长</p>
            <el-input style="width: 80%;" v-model="poolStep[1]"></el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="4" :sm="4" :md="4" :lg="4" style="text-align: left">
            <p>填充方式</p>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" style="text-align: left">
            <el-select v-model="poolFillType" placeholder="请选择"  style="width: 216px; margin-bottom: 30px;">
              <el-option
                v-for="item in fillTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>

      <part-title title="激活层设置" v-if="innerLayer[2]"></part-title>
      <div class="function-wrapper" v-if="innerLayer[2]">
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left">
            <p>激活函数</p>
          </el-col>
          <el-col :xs="20" :sm="20" :md="20" :lg="20" style="text-align: left">
            <el-select v-model="activationFunction" placeholder="请选择"  style="width: 216px; margin-bottom: 30px;">
              <el-option
                v-for="item in activationFunctions"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-col>
        </el-row>
        <el-row :gutter="20" style="margin: 0; width: 100%;" v-if="activationFunction==='leaky_relu'">
          <el-col :xs="24" :sm="24" :md="4" :lg="4">
            <p style="float: left;">激活函数参数</p>
          </el-col>
          <el-col :xs="8" :sm="8" :md="5" :lg="5" style="white-space: nowrap">
            <!--<p style="float: left;">高</p>-->
            <el-input v-model="activeParam[0]"></el-input>
          </el-col>
        </el-row>

      </div>

      <part-title title="全连接层设置" v-if="innerLayer[3]"></part-title>
      <div class="function-wrapper" v-if="innerLayer[3]">
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left; white-space: nowrap">
            <p style="float: left">隐藏层个数</p>
            <el-tooltip content="值域： 大于0正整数" placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="24" :sm="24" :md="5" :lg="5" style="text-align: left">
            <el-input v-model="hiddenCount"></el-input>
          </el-col>
        </el-row>
        <!--<el-checkbox v-model="connectionLayer">展开特征图</el-checkbox>-->
      </div>

      <part-title title="归一化层设置" v-if="innerLayer[4]"></part-title>
      <div class="function-wrapper" v-if="innerLayer[4]">
        <!--<el-row :gutter="20" style="margin: 0; width: 100%;">-->
          <!--<el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left; white-space: nowrap">-->
            <!--<p style="float: left">shift</p>-->
            <!--<el-tooltip content="正整数" placement="right" effect="light">-->
              <!--<i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>-->
            <!--</el-tooltip>-->
          <!--</el-col>-->
          <!--<el-col :xs="24" :sm="24" :md="20" :lg="20" style="text-align: left">-->
            <!--<el-input v-model="shift"></el-input>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <!--<el-row :gutter="20" style="margin: 0; width: 100%;">-->
          <!--<el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left; white-space: nowrap">-->
            <!--<p style="float: left">scale</p>-->
            <!--<el-tooltip content="正整数" placement="right" effect="light">-->
              <!--<i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>-->
            <!--</el-tooltip>-->
          <!--</el-col>-->
          <!--<el-col :xs="24" :sm="24" :md="20" :lg="20" style="text-align: left">-->
            <!--<el-input v-model="scale"></el-input>-->
          <!--</el-col>-->
        <!--</el-row>-->
        <el-row :gutter="20" style="margin: 0; width: 100%;">
          <el-col :xs="24" :sm="24" :md="4" :lg="4" style="text-align: left; white-space: nowrap">
            <p style="float: left">epsilon</p>
            <el-tooltip content="值域： 大于0 小于0.1 " placement="right" effect="light">
              <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
            </el-tooltip>
          </el-col>
          <el-col :xs="24" :sm="24" :md="5" :lg="5" style="text-align: left">
            <!--<el-input v-model="epsilon"></el-input>-->
            <el-slider v-model="epsilon" :format-tooltip="formatNorm" style="width: 216px;"></el-slider>

          </el-col>
        </el-row>
      </div>

      <span slot="footer" class="dialog-footer footer-wrapper">
          <div @click="saveSetting">
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
  import PartTitle from '../../Basic/PartTitle/PartTitle.vue'

  export default {
    props: ['count', 'totalCount'],
    components: {
      MyDialogButton,
      PartTitle
    },
    data () {
      return {
        showCentralLayerSetting: false,
        title: '中间层' + this.count,
        deleteCentralLayerSetting: false,
        showDeleteCentral: false,
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
        bValue: 0,
        wValue: [0, 0, 0, 0],
        innerLayer: [true, true, true, true, true],
        kernel: [1, 1, 1],
        convolutionStep: [1, 1],
        initStrings: [{
          value: 'zero',
          label: 'zero'
        }, {
          value: 'norm',
          label: 'norm'
        }, {
          value: 'xavier',
          label: 'xavier'
        }],
        init: 'norm',
        isBias: false,
        biasConstant: 10,
        stddevNorm: 10,
        activeParam: [0.2],
        poolStep: [2, 2],
        fillTypes: [{
          value: 'SAME',
          label: 'SAME'
        }, {
          value: 'VALID',
          label: 'VALID'
        }],
        convolutionFillType: 'SAME',
        poolFillType: 'SAME',
        poolWindow: [2, 2],
        activationFunctions: [{
          value: 'sigmoid',
          label: 'Sigmoid函数'
        }, {
          value: 'relu',
          label: 'ReLU函数'
        }, {
          value: 'leaky_relu',
          label: 'leaky_relu'
        }],
        activationFunction: 'relu',
        connectionLayer: true,
        scale: 1,
        shift: 1,
        epsilon: 1,
        hiddenCount: 512
      }
    },
    methods: {
      formatTooltip (val) {
        return val / 100
      },
      formatNorm (val) {
        return val / 1000
      },
      deleteCentralLayerSettingFunction: function () {
        this.deleteCentralLayerSetting = false
        this.$emit('deleteCentralLayer')
      },
      saveSetting () {
        let middleLayer = []
        for (let i = 0; i < this.innerLayer.length; i++) {
          if (this.innerLayer[i]) {
            switch (i) {
              case 0:
                middleLayer.push({
                  'layer': 'conv',
                  'filter': this.kernel,
                  'stride': this.convolutionStep,
                  'padding': this.convolutionFillType,
                  'init': this.init,
                  'isBias': this.isBias,
                  'bias_constant': this.biasConstant / 100,
                  'stddev_norm': this.stddevNorm / 100
                })
                break
              case 1:
                middleLayer.push({
                  'layer': 'pool',
                  'kernel': this.poolWindow,
                  'stride': this.poolStep,
                  'padding': this.poolFillType
                })
                break
              case 2:
                middleLayer.push({
                  'layer': 'active',
                  'active_func': this.activationFunction,
                  'param': this.activeParam
                })
                break
              case 3:
                middleLayer.push({
                  'layer': 'connect',
                  'hidden': this.hiddenCount
                })
                break
              case 4:
                middleLayer.push({
                  'layer': 'norm',
                  'epsilon': this.epsilon / 1000
                })
                break
            }
          } else {
          }
        }

//        console.log(middleLayer)
        this.showCentralLayerSetting = false
        this.$emit('setCentralLayer', middleLayer)
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
