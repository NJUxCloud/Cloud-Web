<template>
  <div class="kubernetes-charts-wrapper">
    <div v-for="(item, key) in chartsData">
      <h3 style="background-color: #EBF5F8; margin-bottom: 30px">{{ key }}</h3>
      <el-row :gutter="20" style="margin: 0; padding: 0; text-align: center;">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" style="padding: 0">
          <div :id="'cpu-chart-' + key" class="chart-wrapper"></div>
          <h4>当前占有：<span>{{ chartsData[key].curCpuRequest }}</span></h4>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" style="padding: 0">
          <div :id="'memory-chart-' + key" class="chart-wrapper"></div>
          <h4>当前占有：<span>{{ chartsData[key].curCpuLimit }}</span></h4>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import PartTitle from '../Basic/PartTitle/PartTitle.vue'
  import echarts from 'echarts'
  import {mapGetters} from 'vuex'

  export default {
    props: ['chartsData'],
    components: {
      PartTitle
    },
    data () {
      return {
        accuracyChart: '',
        timeChart: '',
        accuracy: [20, 28, 36],
        timeList: [100, 200, 300, 400, 500],
        charts: []
      }
    },
    methods: {
      drawLineChart (id, xData, yData1, yData2, name, xName, yName, lineName1, lineName2) {
        let charts = echarts.init(document.getElementById(id))
        charts.setOption({
          // Make gradient line here
          title: [{
            left: 'left',
            text: name
          }],
          xAxis: [{
            data: xData,
            name: xName,
            boundaryGap: false
          }],
          yAxis: [{
            splitLine: {show: false},
            name: yName
          }],
          grid: {
            bottom: '10%',
            top: '30%',
            containLabel: true,
            width: '100%'
          },
          color: ['#B7F8DB', '#50A7C2'],
          legend: {
            left: 'right',
            top: '1%',
            data: [
              {
                name: lineName1,
                // 强制设置图形为圆。
                icon: 'circle',
                // 设置文本为红色
                textStyle: {
                  color: '#333'
                }
              },
              {
                name: lineName2,
                // 强制设置图形为圆。
                icon: 'circle',
                // 设置文本为红色
                textStyle: {
                  color: '#333'
                }
              }
            ]
          },
          tooltip: {
            trigger: 'axis',
            left: 'left'
          },
          series: [{
            symbol: 'none',
            name: lineName1,
            type: 'line',
            data: yData1,
            lineStyle: {
              normal: {
                color: 'B7F8DB'
              }
            },
            smooth: true
          }, {
            symbol: 'none',
            name: lineName2,
            type: 'line',
            data: yData2,
            lineStyle: {
              normal: {
                color: '#50A7C2'
              }
            },
            smooth: true
          }]
        })
        return charts
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    watch: {
      mainWidth: function () {
        this.accuracyChart.resize()
        this.timeChart.resize()
      }
    },
    mounted () {
      this.$nextTick(function () {
        for (let chartName in this.chartsData) {
          console.log(this.chartsData[chartName])

//          console.log(this.chartsData[chartName].cpuRequests)
          this.charts.push(this.drawLineChart('cpu-chart-' + chartName, this.timeList, this.chartsData[chartName].cpuRequests, this.chartsData[chartName].cpuLimits, 'CPU', '步数', '占有率(%)', 'CPU Requests', 'CPU Limits'))
          this.charts.push(this.drawLineChart('memory-chart-' + chartName, this.timeList, this.chartsData[chartName].memoryRequests, this.chartsData[chartName].memories, 'Memory', '步数', '占有率(%)', 'CPU Requests', 'CPU Limits'))

//          console.log(chartName)
        }
      })
    }
  }
</script>

<style scoped src="./KubernetesResult.css"></style>
