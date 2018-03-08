<template>
  <div class="training-result-wrapper">
    <part-title title="训练结果" style="margin-bottom: 30px"></part-title>
    <el-row :gutter="20" style="margin: 0; padding: 0;">
      <el-col :xs="24" :sm="24" :md="12" :lg="12" style="padding: 0">
        <div class="chart-wrapper" id="accuracy-chart"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="12" style="padding: 0">
        <div class="chart-wrapper" id="time-chart"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import PartTitle from '../Basic/PartTitle/PartTitle.vue'
  import echarts from 'echarts'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    components: {
      PartTitle
    },
    data () {
      return {
        accuracyChart: '',
        timeChart: '',
        accuracy: [],
        timeList1: [],
        duration: []
      }
    },
    methods: {
      ...mapActions({
        getTrainResult: 'getTrainResult'
      }),
      drawLineChart (id, xData, yData, name, yName) {
        let charts = echarts.init(document.getElementById(id))
        charts.setOption({
          // Make gradient line here
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0,
            max: 400
          }],
          title: [{
            left: 'center',
            text: name
          }],
          tooltip: {
            trigger: 'axis'
          },
          xAxis: [{
            data: xData,
            boundaryGap: false
          }],
          yAxis: [{
            splitLine: {show: false},
            name: yName
          }],
          grid: [{
            bottom: '30%'
          }, {
            top: '00%'
          }, {
            width: '100%'
          }
          ],
          series: [{
            type: 'line',
            showSymbol: false,
            data: yData,
            lineStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#B7F8DB'},
                    {offset: 1, color: '#50A7C2'}
                  ]
                )
              },
              emphasis: {
                color: new echarts.graphic.LinearGradient(
                  0, 0, 0, 1,
                  [
                    {offset: 0, color: '#2378f7'},
                    {offset: 0.7, color: '#2378f7'},
                    {offset: 1, color: '#83bff6'}
                  ]
                )
              }
            },
            smooth: true
          }]
        })

        return charts
      },
      getData: function () {
        this.getTrainResult({
          onSuccess: (data) => {
            for (let i = this.timeList1.length; i < data.every_result.length; i++) {
              this.duration.push(data.every_result[i].duration)
              this.accuracy.push(data.every_result[i].accuracy)
              this.timeList1.push(data.every_result[i].step)
            }
            this.accuracyChart = this.drawLineChart('accuracy-chart', this.timeList1, this.accuracy, '准确度', '准确度(%)')
            this.timeChart = this.drawLineChart('time-chart', this.timeList1, this.duration, '每一百轮的训练时间', '时间(s)')
//            this.accuracy = accu
//            this.timeList1 = time
//            this.duration = dura
          },
          onError: () => {
            console.log('error')
          },
          body: {
            modelName: this.modelName,
            iter: this.modelIter
          }
        })
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth',
        modelName: 'modelName',
        modelIter: 'modelIter'
      })
    },
    watch: {
      mainWidth: function () {
        this.accuracyChart.resize()
        this.timeChart.resize()
      }
    },
    mounted () {
      this.getData()

//      setInterval(() => {
//        this.getData()
//      }, 5000)
    }
  }
</script>

<style scoped src="./TrainingResult.css"></style>
