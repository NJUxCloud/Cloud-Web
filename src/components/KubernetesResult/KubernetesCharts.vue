<template>
  <div class="kubernetes-charts-wrapper">
    <div v-for="(item, key) in chartsData">
      <h3 style="background-color: #EBF5F8; margin-bottom: 30px">{{ key }}</h3>
      <el-row :gutter="20" style="margin: 0; padding: 0; text-align: center; width: 100%;">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" style="padding: 0">
          <div :id="'cpu-chart-' + key" class="chart-wrapper" :style="style"></div>
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
    props: ['chartsData', 'openCharts'],
    components: {
      PartTitle
    },
    data () {
      return {
        accuracyChart: '',
        timeChart: '',
        accuracy: [20, 28, 36],
        timeList: [],
        charts: [],
        style: {
          width: (this.mainWidth - 120) * 0.45
        }
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
          grid: [{
            bottom: '30%'
          }, {
            top: '00%'
          }, {
            width: '300px'
          }
          ],
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
            left: 'left',
            extraCssText: 'width: auto;'
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
      },
      resizeCharts () {
        let width = (this.mainWidth - 120) * 0.45
        this.style = {
          width: width
        }
        for (let i = 0; i < this.charts.length; i++) {
          this.charts[i].resize()
        }
      },
      getData () {
        for (let chartName in this.chartsData) {
//          console.log(this.chartsData[chartName])
//          console.log(this.chartsData[chartName].cpuRequests)
          this.charts.push(this.drawLineChart('cpu-chart-' + chartName, this.timeList, this.chartsData[chartName].cpuRequests, this.chartsData[chartName].cpuLimits, 'CPU', '时间', '占有率(%)', 'CPU Requests', 'CPU Limits'))
          this.charts.push(this.drawLineChart('memory-chart-' + chartName, this.timeList, this.chartsData[chartName].memoryRequests, this.chartsData[chartName].memories, 'Memory', '时间', '占有率(%)', 'CPU Requests', 'CPU Limits'))
//          document.getElementById('cpu-chart-' + chartName).css('width', document.getElementById('cpu-chart-' + chartName).width())
//          this.resizeCharts()
        }
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    watch: {
      mainWidth: function () {
        this.resizeCharts()
        console.log(this.mainWidth)
      },
      chartsData: {
        handler: function () {
          let now = new Date()
          let hour = now.getHours() > 9 ? now.getHours().toString() : '0' + now.getHours()
          let minute = now.getMinutes() > 9 ? now.getMinutes().toString() : '0' + now.getMinutes()
          let second = now.getSeconds() > 9 ? now.getSeconds().toString() : '0' + now.getSeconds()

          this.timeList.push(hour + ':' + minute + ':' + second)
        },
        deep: true
      },
      openCharts: function () {
        if (this.openCharts) {
          this.resizeCharts()
        }
      }
    },
    mounted () {
      this.getData()
      setInterval(() => {
        this.getData()
      }, 10000)
    }
  }
</script>

<style scoped src="./KubernetesResult.css"></style>
