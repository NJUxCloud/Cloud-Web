<template>
  <div>
    <model-steps :stepCount="2"></model-steps>
    <div class="data-pretreatment-wrapper">
      <!--<el-row :gutter="20" style="text-align: center">-->
        <!--<el-col :xs="24" :sm="24" :md="8" :lg="8">-->
          <!--<h2>操作名称</h2>-->
        <!--</el-col>-->
        <!--<el-col :xs="24" :sm="24" :md="16" :lg="16">-->
          <!--<h2>参数及变化的范围</h2>-->
        <!--</el-col>-->
      <!--</el-row>-->
      <div class="operation-selection">
        <h2>预处理操作选择</h2>
        <el-checkbox v-for="(operation, index) in operations" :key="index" v-model="selections[index]">
          {{ operation.operationName }}
        </el-checkbox>
      </div>

      <div class="param-wrapper" style="margin-top: 30px"></div>

      <div v-if="selections[i-1]" class="param-wrapper" v-for="i in 5">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <h4>{{ operations[i-1].operationName }}</h4>
          </el-col>
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <el-checkbox v-model="operations[i-1].overlap">是否覆盖原数据</el-checkbox>
          </el-col>
        </el-row>
      </div>

      <div v-if="selections[5]" class="param-wrapper">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <h4>{{ operations[5].operationName }}</h4>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <el-checkbox v-model="operations[5].overlap">是否覆盖原数据</el-checkbox>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>增益值</p>
            <el-input v-model="operations[5].value1"></el-input>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>偏置值</p>
            <el-input v-model="operations[5].value2"></el-input>
          </el-col>
        </el-row>
      </div>

      <div v-if="selections[6]" class="param-wrapper">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <h4>{{ operations[6].operationName }}</h4>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <el-checkbox v-model="operations[6].overlap">是否覆盖原数据</el-checkbox>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>最大增益值</p>
            <el-input v-model="operations[6].value1" :blur="testData"></el-input>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>最大偏置值</p>
            <el-input v-model="operations[6].value2"></el-input>
          </el-col>
        </el-row>
      </div>

      <div v-if="selections[6+i]" class="param-wrapper" v-for="i in 2">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <h4>{{ operations[6+i].operationName }}</h4>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <el-checkbox v-model="operations[6+i].overlap">是否覆盖原数据</el-checkbox>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>卷积核 边长</p>
            <el-select v-model="operations[6+i].value1">
              <el-option
                v-for="item in values"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-slider v-model="operations[11+i].value1" :format-tooltip="formatTooltip" :disabled="!operations[10].overlap"></el-slider>-->
          </el-col>
        </el-row>
      </div>
      <!--<div v-if="selections[5]" class="param-wrapper">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :xs="24" :sm="6" :md="6" :lg="6">-->
            <!--<h4>{{ operations[5].operationName }}</h4>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<el-checkbox v-model="operations[5].overlap">是否覆盖原数据</el-checkbox>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>最多调整为原来的n倍</p>-->
            <!--<el-slider v-model="operations[5].value1" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->

      <!--对比度-->
      <!--<div v-if="selections[6]" class="param-wrapper">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :xs="24" :sm="6" :md="6" :lg="6">-->
            <!--<h4>{{ operations[6].operationName }}</h4>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<el-checkbox v-model="operations[6].overlap">是否覆盖原数据</el-checkbox>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>调整为原来的n倍</p>-->
            <!--<el-slider v-model="operations[6].value1" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
      <!--<div v-if="selections[7]" class="param-wrapper">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :xs="24" :sm="6" :md="6" :lg="6">-->
            <!--<h4>{{ operations[7].operationName }}</h4>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<el-checkbox v-model="operations[7].overlap">是否覆盖原数据</el-checkbox>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>最少调整为原来的m倍</p>-->
            <!--<el-slider v-model="operations[7].value1" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>最多调整为原来的n倍</p>-->
            <!--<el-slider v-model="operations[7].value2" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->

      <!--色相-->
      <!--<div v-if="selections[8]" class="param-wrapper">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :xs="24" :sm="6" :md="6" :lg="6">-->
            <!--<h4>{{ operations[8].operationName }}</h4>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<el-checkbox v-model="operations[8].overlap">是否覆盖原数据</el-checkbox>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>调整为原来的n倍</p>-->
            <!--<el-slider v-model="operations[8].value1" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
      <!--<div v-if="selections[9]" class="param-wrapper">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :xs="24" :sm="6" :md="6" :lg="6">-->
            <!--<h4>{{ operations[9].operationName }}</h4>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<el-checkbox v-model="operations[9].overlap">是否覆盖原数据</el-checkbox>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>最多调整为原来的n倍</p>-->
            <!--<el-slider v-model="operations[9].value1" :format-tooltip="formatTooltip1"></el-slider>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->

      <!--饱和度-->
      <!--<div v-if="selections[10]" class="param-wrapper">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :xs="24" :sm="6" :md="6" :lg="6">-->
            <!--<h4>{{ operations[10].operationName }}</h4>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<el-checkbox v-model="operations[10].overlap">是否覆盖原数据</el-checkbox>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>调整为原来的n倍</p>-->
            <!--<el-slider v-model="operations[10].value1" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->
      <!--<div v-if="selections[11]" class="param-wrapper">-->
        <!--<el-row :gutter="20">-->
          <!--<el-col :xs="24" :sm="6" :md="6" :lg="6">-->
            <!--<h4>{{ operations[11].operationName }}</h4>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<el-checkbox v-model="operations[11].overlap">是否覆盖原数据</el-checkbox>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>最少调整为原来的m倍</p>-->
            <!--<el-slider v-model="operations[11].value1" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
          <!--<el-col :xs="8" :sm="6" :md="6" :lg="6">-->
            <!--<p>最多调整为原来的n倍</p>-->
            <!--<el-slider v-model="operations[11].value2" :format-tooltip="formatTooltip"></el-slider>-->
          <!--</el-col>-->
        <!--</el-row>-->
      <!--</div>-->

      <div v-if="selections[8+i]" class="param-wrapper" v-for="i in 3">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <h4>{{ operations[8+i].operationName }}</h4>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <el-checkbox v-model="operations[8+i].overlap">是否覆盖原数据</el-checkbox>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>卷积核 边长</p>
            <el-select v-model="operations[8+i].value1">
              <el-option
                v-for="item in length"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-slider v-model="operations[11+i].value1" :format-tooltip="formatTooltip" :disabled="!operations[10].overlap"></el-slider>-->
          </el-col>
        </el-row>
      </div>


      <div v-if="selections[11+i]" class="param-wrapper" v-for="i in 1">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <h4>{{ operations[11+i].operationName }}</h4>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <el-checkbox v-model="operations[11+i].overlap">是否覆盖原数据</el-checkbox>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>过滤器强度</p>
            <el-select v-model="operations[11+i].value1">
              <el-option
                v-for="item in strength"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <!--<el-slider v-model="operations[11+i].value1" :format-tooltip="formatTooltip" :disabled="!operations[10].overlap"></el-slider>-->
          </el-col>
        </el-row>
      </div>

      <div v-if="selections[13]" class="param-wrapper">
        <el-row :gutter="20">
          <el-col :xs="24" :sm="6" :md="6" :lg="6">
            <h4>{{ operations[13].operationName }}</h4>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <el-checkbox v-model="operations[13].overlap">是否覆盖原数据</el-checkbox>
          </el-col>
          <el-col :xs="8" :sm="6" :md="6" :lg="6">
            <p>噪声覆盖百分比</p>
            <el-slider v-model="operations[13].value1" :format-tooltip="formatTooltip"></el-slider>
          </el-col>
        </el-row>
      </div>
      <!--<el-button type="default">创建模型</el-button>-->
    </div>

    <div style="width: 100%; text-align: center">
      <div style="position: relative; display: inline-block; margin: 30px;" @click="doPretreatment">
        <my-button content="进 行 预 处 理" color="#000000"></my-button>
      </div>
    </div>
    <!--<pro-model-collections></pro-model-collections>-->
  </div>
</template>

<script>
  import ModelSteps from '../ModelSteps/ModelSteps.vue'
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import {mapGetters, mapActions} from 'vuex'
  export default {
    components: {
      ModelSteps,
      MyButton
    },
    data () {
      return {
        length: [
          {
            'label': 3,
            'value': 3
          },
          {
            'label': 5,
            'value': 5
          },
          {
            'label': 7,
            'value': 7
          }
        ],
        strength: [
          {
            'label': 6,
            'value': 6
          },
          {
            'label': 8,
            'value': 8
          },
          {
            'label': 10,
            'value': 10
          },
          {
            'label': 12,
            'value': 12
          }
        ],
        values: [
          {
            'label': 1,
            'value': 1
          },
          {
            'label': 2,
            'value': 2
          },
          {
            'label': 3,
            'value': 3
          },
          {
            'label': 4,
            'value': 4
          },
          {
            'label': 5,
            'value': 5
          }
        ],
        selections: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        operations: [
          {
            'operationName': '上下翻转',
            'overlap': false,
            'value1': null,
            'value2': null
          },
          {
            'operationName': '左右翻转',
            'overlap': false,
            'value1': null,
            'value2': null
          },
          {
            'operationName': '对角线翻转',
            'overlap': false,
            'value1': null,
            'value2': null
          },
          {
            'operationName': '直方图均衡化',
            'overlap': false,
            'value1': null,
            'value2': null
          },
          {
            'operationName': 'CLAHE均衡化',
            'overlap': false,
            'value1': null,
            'value2': null
          },
          {
            'operationName': '对比度亮度调整',
            'overlap': false,
            'value1': 1.5,
            'value2': 30
          },
          {
            'operationName': '随机对比度亮度调整',
            'overlap': false,
            'value1': 1.5,
            'value2': 30
          },
          {
            'operationName': '腐蚀',
            'overlap': false,
            'value1': 3,
            'value2': null
          },
          {
            'operationName': '膨胀',
            'overlap': false,
            'value1': 3,
            'value2': null
          },
          {
            'operationName': '均值滤波',
            'overlap': false,
            'value1': 5,
            'value2': null
          },
          {
            'operationName': '高斯模糊',
            'overlap': false,
            'value1': 5,
            'value2': null
          },
          {
            'operationName': '中值滤波',
            'overlap': false,
            'value1': 5,
            'value2': null
          },
          {
            'operationName': '灰度非局部平均值去噪',
            'overlap': false,
            'value1': 8,
            'value2': null
          },
          {
            'operationName': '添加椒盐噪声',
            'overlap': false,
            'value1': 10,
            'value2': null
          }
        ]
      }
    },
    computed: {
      ...mapGetters({
        dataID: 'dataID',
        modelName: 'modelName'
      })
    },
    methods: {
      ...mapActions({
        pretreatData: 'pretreatData'
      }),
      formatTooltip (val) {
        return val / 100
      },
      formatTooltip1 (val) {
        return val / 200
      },
      doPretreatment: function () {
//        this.selectedOperation.append('dataId', this.dataID)
//        this.selectedOperation.append('modelName', this.modelName)
        let doAction = true

        let body = {
          'dataId': this.dataID,
          'modelName': this.modelName,
          'operations': []
        }

        for (let i = 0; i < this.selections.length; i++) {
          if (this.selections[i]) {
            body.operations.push(JSON.parse(JSON.stringify(this.operations[i])))
            let curOperation = body.operations[body.operations.length - 1]
            if (curOperation.operationName === '添加椒盐噪声') {
              curOperation.value1 = curOperation.value1 / 100
            }
            if (curOperation.operationName === '对比度亮度调整') {
              if (typeof curOperation.value1 !== 'number' || curOperation.value1 <= 0 || curOperation.value1 >= 3) {
                doAction = false
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: curOperation.operationName + '的增益值必须为大于0，小于3的小数'
                })
              }
              if (typeof curOperation.value2 !== 'number' || curOperation.value2 <= -255 || curOperation.value2 >= 255) {
                doAction = false
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: curOperation.operationName + '的偏置值必须为大于-255，小于255的小数'
                })
              }
            }
            if (curOperation.operationName === '随机对比度亮度调整') {
              if (typeof curOperation.value1 !== 'number' || curOperation.value1 <= 0 || curOperation.value1 >= 3) {
                doAction = false
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: curOperation.operationName + '的最大增益值必须为大于0，小于3的小数'
                })
              }
              if (typeof curOperation.value2 !== 'number' || curOperation.value2 <= 0 || curOperation.value2 >= 255) {
                doAction = false
                this.$message({
                  showClose: true,
                  type: 'error',
                  message: curOperation.operationName + '的最大偏置值必须为大于0，小于255的小数'
                })
              }
            }
          }
        }

        if (doAction) {
          let loadingInstance = this.$loading({
            body: true,
            lock: true,
            text: '数据预处理中...'
          })
          this.pretreatData({
            onSuccess: () => {
              loadingInstance.close()
              this.$message({
                showClose: true,
                type: 'success',
                message: '成功预处理数据！'
              })
              this.$router.push('/modelCreation')
            },
            body: body,
            onError: () => {
              loadingInstance.close()
              this.$message({
                showClose: true,
                type: 'error',
                message: '预处理数据失败！'
              })
            }
          })
        }

        console.log(body)
//        console.log(this.selectedOperation)
//        this.$router.push('/modelCreation')
      },
      testData: function () {

      }
    },
    mounted () {
//      for (let i = 0; i < this.operations.length; i++) {
//        this.selections.push(false)
//      }
    }
  }
</script>

<style scoped src="./DataPretreatmentBody.css"></style>
