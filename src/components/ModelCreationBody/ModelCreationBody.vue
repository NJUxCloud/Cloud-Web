<template>
  <div class="model-creation-wrapper">
    <!--<el-row :gutter="20" style="margin: 0;">-->
      <!--<el-col :xs="24" :sm="24" :md="12" :lg="12">-->
        <!--<div class="breadcrumb-wrapper">-->
          <!--<el-breadcrumb separator="/">-->
            <!--<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>-->
            <!--<el-breadcrumb-item>模型构建-->
              <!--<el-tooltip content="" placement="bottom" effect="light">-->
                <!--<i class="el-icon-question"></i>-->
              <!--</el-tooltip>-->
            <!--</el-breadcrumb-item>-->
          <!--</el-breadcrumb>-->
        <!--</div>-->
      <!--</el-col>-->
    <!--</el-row>-->
    <model-steps :stepCount="3"></model-steps>


    <div class="model-creation-content-wrapper">
      <el-row :gutter="20" style="margin: 0;">
        <el-col :xs="24" :sm="6" :md="5" :lg="4">
          <div class="time-wrapper">
            <el-button typeof="default" @click="handleRefresh" style="opacity: 0;">
              <i class="el-icon-refresh"></i>
            </el-button>

            <el-button typeof="default" style="color: #ffffff; background-color: #9AD9D7;" @click="handleStartClick">
              <i :class="[startButton ? 'el-icon-caret-right' : 'el-icon-loading']"></i>
            </el-button>

            <!--<p>已运行时间</p>-->
            <!--<h2>{{ time }}</h2>-->
            <!--<time-counter :startCountTime="startCountTime" :defaultValue="defaultValue" @setDefaultVal="setDefaultVal"></time-counter>-->
            <!--<time-counter :startCountTime="startCountTime" :defaultVal="defaultVal" v-if="!startCountTime"></time-counter>-->
          </div>
        </el-col>
        <el-col :xs="24" :sm="18" :md="19" :lg="20">
          <div class="model-creation-setting-wrapper">
            <part-title title="基本设置"></part-title>
            <div class="basic-setting-wrapper">
              <el-row :gutter="20" style="margin: 0;">
                <el-col :xs="12" :sm="12" :md="4" :lg="4">
                  <p>神经网络</p>
                </el-col>
                <el-col :xs="12" :sm="12" :md="8" :lg="8">
                  <el-select v-model="network" placeholder="请选择"  style="width: 216px">
                    <el-option
                      v-for="item in networkOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :xs="12" :sm="12" :md="4" :lg="4">
                  <p>训练集测试集选择</p>
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="5">
                  <div class="block">
                    <el-slider v-model="testValue" :format-tooltip="formatTooltip" style="width: 216px;"></el-slider>
                  </div>
                </el-col>
              </el-row>

              <el-row :gutter="20" style="margin: 0;">
                <el-col :xs="12" :sm="12" :md="4" :lg="4">
                  <p>损失函数</p>
                </el-col>
                <el-col :xs="12" :sm="12" :md="8" :lg="8">
                  <el-select v-model="loss" placeholder="请选择" style="width: 216px">
                    <el-option
                      v-for="item in lossOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
                <el-col :xs="12" :sm="12" :md="4" :lg="4">
                  <p>优化算法</p>
                </el-col>
                <el-col :xs="12" :sm="12" :md="8" :lg="8">
                  <el-select v-model="optimizer" placeholder="请选择" style="width: 216px">
                    <el-option
                      v-for="item in optimizerOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                </el-col>
              </el-row>

              <el-row :gutter="20" style="margin: 0;">
                <el-col :xs="12" :sm="12" :md="4" :lg="4">
                  <p style="float: left;">迭代次数</p>
                  <el-tooltip content="非负整数" placement="right" effect="light">
                    <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
                  </el-tooltip>
                </el-col>
                <el-col :xs="12" :sm="12" :md="8" :lg="8">
                  <el-input style="width: 216px;" v-model="iterCount"></el-input>
                </el-col>
                <el-col :xs="12" :sm="12" :md="4" :lg="4">
                  <p style="float: left">学习率</p>
                  <el-tooltip content="小数" placement="right" effect="light">
                    <i class="el-icon-question" style="font-size: 16px; color: #999; position: relative; top: 2px;"></i>
                  </el-tooltip>
                </el-col>
                <el-col :xs="12" :sm="12" :md="6" :lg="6">
                  <el-slider v-model="learnRate" :format-tooltip="formatTooltip" style="width: 216px;"></el-slider>
                  <!--<el-input style="width: 216px;" v-model="learnRate"></el-input>-->
                </el-col>
              </el-row>
            </div>
            <part-title title="神经网络设置"></part-title>
            <!--<el-tooltip content="" placement="bottom" effect="light">-->
            <!--<i class="el-icon-question"></i>-->
            <!--</el-tooltip>-->


            <div class="layers-wrapper">
              <el-tooltip content="增加层数" placement="right" effect="light">
                <!--<i class="el-icon-circle-plus" @click="hideLayerCount++" v-if="network === '传统神经网络'"></i>-->
                <i class="el-icon-circle-plus" @click="centralLayerCount++" v-if="network === 'CNN'"></i>
              </el-tooltip>

              <input-layer></input-layer>
              <hide-layer v-for="n in hideLayerCount" :count="n" :key="n" v-if="network === '传统神经网络'" :totalCount="hideLayerCount" @deleteHideLayer="deleteHideLayer"></hide-layer>
              <central-layer v-for="n in centralLayerCount" :count="n" :key="n" v-if="network === 'CNN'" :totalCount="centralLayerCount"  @deleteCentralLayer="deleteCentralLayer" @setCentralLayer="setCentralLayer"></central-layer>
              <output-layer :type="network"></output-layer>
            </div>

          </div>
        </el-col>
      </el-row>
    </div>


  </div>
</template>

<script>
  import TimeCounter from '../TimeCounter/TimeCounter.vue'
  import PartTitle from '../Basic/PartTitle/PartTitle.vue'
  import InputLayer from './Layers/InputLayer.vue'
  import HideLayer from './Layers/HideLayer.vue'
  import OutputLayer from './Layers/OutputLayer.vue'
  import CentralLayer from './Layers/CentralLayer.vue'
  import ModelSteps from '../ModelSteps/ModelSteps.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    components: {
      TimeCounter,
      PartTitle,
      InputLayer,
      HideLayer,
      OutputLayer,
      CentralLayer,
      ModelSteps
    },
    data () {
      return {
        startButton: true,
        time: 0,
        startCountTime: false,
        defaultValue: 0,
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        testValue: 80,
        hideLayerCount: 1,
        centralLayerCount: 1,
//        networkOptions: [{
//          value: '传统神经网络',
//          label: '传统神经网络'
//        }, {
//          value: 'CNN',
//          label: 'CNN'
//        }],
        networkOptions: [{
          value: 'CNN',
          label: 'CNN'
        }],
        network: 'CNN',
        lossOptions: [{
          value: 'mse',
          label: '平方差函数'
        }, {
          value: 'entropy',
          label: '交叉熵函数'
        }],
        loss: 'mse',
        optimizerOptions: [{
          value: 'GradientDescentOptimizer',
          label: 'GradientDescentOptimizer'
        }],
        optimizer: 'GradientDescentOptimizer',
        iterCount: 1000,
        learnRate: 1,
        middleLayer: [],
        choosedMiddleSetting: false
      }
    },
    computed: {
      ...mapGetters({
        isUrl: 'isUrl',
        modelName: 'modelName'
      })
    },
    methods: {
      ...mapActions({
        constructModel: 'constructModel'
      }),
      formatTooltip (val) {
        return val / 100
      },
      handleStartClick: function () {
//        this.startButton = !this.startButton
//        if (!this.startButton) {
//          this.startCountTime = true
//        } else {
//          this.startCountTime = false
//        }
        let re = /^[0-9]+$/

//        console.log(typeof (this.iterCount))
        if (!re.test(this.iterCount)) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '迭代次数必须为非负整数！'
          })
          return
        }

        if (!this.choosedMiddleSetting) {
          this.$message({
            showClose: true,
            type: 'error',
            message: '请点击中间层进行参数设置！！'
          })
          return
        }
        let loadingInstance = this.$loading({
          body: true,
          lock: true,
          text: '模型构建中...'
        })

        let body = {
          'iter': parseInt(this.iterCount),
          'learning_rate': this.learnRate / 100,
          'ratio': this.testValue / 100,
          'loss_name': this.loss,
          'optimizer_name': this.optimizer,
          'net_type': 'CNN',
          'net_config': {
            'middle_layer': this.middleLayer,
            'output_layer': {}
          }
        }

        let modelInfo = {
          modelName: this.modelName,
          dataType: this.isUrl ? 'url' : 'file'
        }

        this.constructModel({
          onSuccess: () => {
            loadingInstance.close()
            this.$router.push('/result')
          },
          onError: () => {
            this.$message({
              showClose: true,
              type: 'error',
              message: '构建模型失败！'
            })
          },
          body: body,
          modelInfo: modelInfo
        })
//        this.$router.push('/result')
      },
      handleRefresh: function () {
        this.startButton = true
        this.time = 0
        this.defaultValue = 0
      },
      timedCount: function () {
        this.startCountTime = true
//        this.time = this.time + 1
//        setTimeout("timedCount()", 1000)
      },
      setDefaultVal: function (data) {
//        console.log('setDefaultVal')
        this.defaultValue = data
      },
      deleteHideLayer: function () {
        this.hideLayerCount--
      },
      deleteCentralLayer: function () {
        this.centralLayerCount--
      },
      setCentralLayer: function (data) {
        this.choosedMiddleSetting = true
        this.middleLayer = this.middleLayer.concat(data)
        console.log(this.middleLayer)
//        console.log(data)
      }
    }
  }
</script>

<style scoped src="./ModelCreationBody.css"></style>
