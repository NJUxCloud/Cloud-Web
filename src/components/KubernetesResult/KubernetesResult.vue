<template>
  <div>
    <part-title title="Kubernetes结果" style="margin-bottom: 30px"></part-title>
    <div class="kuber-result-wrapper">
      <el-collapse class="collapse-wrapper">
        <el-collapse-item title="Conditions" name="1">
          <el-table
            :data="conditionsData"
            class="collapse-inner-wrapper">
            <el-table-column
              prop="Type"
              label="Type">
            </el-table-column>
            <el-table-column
              prop="Status"
              label="Status">
            </el-table-column>
            <el-table-column
              prop="LastHeartbeatTime"
              label="LastHeartbeatTime">
            </el-table-column>
            <el-table-column
              prop="LastTransitionTime"
              label="LastTransitionTime">
            </el-table-column>
            <el-table-column
              prop="Reason"
              label="Reason">
            </el-table-column>
            <el-table-column
              prop="Message"
              label="Message">
            </el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item title="Addresses" name="2">
          <div class="collapse-inner-wrapper">
            <el-row :gutter="20" style="margin: 0">
              <el-col :xs="24" :sm="8" :md="8" :lg="8">
                <h4>InternalIP:</h4>
              </el-col>
              <el-col :xs="24" :sm="16" :md="16" :lg="16">
                <p>{{ InternalIP }}</p>
              </el-col>
            </el-row>
            <el-row :gutter="20" style="margin: 0">
              <el-col :xs="24" :sm="8" :md="8" :lg="8">
                <h4>Hostname:</h4>
              </el-col>
              <el-col :xs="24" :sm="16" :md="16" :lg="16">
                <p>{{ Hostname }}</p>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Capacity" name="3">
          <div class="collapse-inner-wrapper">
            <el-row :gutter="20" style="margin: 0" v-for="(value, key, index) in Capacity" :key="index">
              <el-col :xs="24" :sm="8" :md="8" :lg="8">
                <h4>{{ key }}</h4>
              </el-col>
              <el-col :xs="24" :sm="16" :md="16" :lg="16">
                <p>{{ value }}</p>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Allocatable" name="4">
          <div class="collapse-inner-wrapper">
            <el-row :gutter="20" style="margin: 0" v-for="(value, key, index) in Allocatable" :key="index">
              <el-col :xs="24" :sm="8" :md="8" :lg="8">
                <h4>{{ key }}</h4>
              </el-col>
              <el-col :xs="24" :sm="16" :md="16" :lg="16">
                <p>{{ value }}</p>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item title="SystemInfo" name="5">
          <div class="collapse-inner-wrapper">
            <el-row :gutter="20" style="margin: 0" v-for="(value, key, index) in SystemInfo" :key="index">
              <el-col :xs="24" :sm="8" :md="8" :lg="8">
                <h4>{{ key }}</h4>
              </el-col>
              <el-col :xs="24" :sm="16" :md="16" :lg="16">
                <p>{{ value }}</p>
              </el-col>
            </el-row>
          </div>
        </el-collapse-item>
        <el-collapse-item title="Non-terminated Pods" name="6">
          <div class="collapse-inner-wrapper">
            <kubernetes-charts :chartsData="chartsData"></kubernetes-charts>

            <!--<div v-for="(item, key) in chartsData" class="pod-wrapper">-->
              <!--<h4>{{ key }}</h4>-->
              <!--<el-row :gutter="20" style="margin: 0; padding: 0">-->
                <!--<el-col :xs="24" :sm="24" :md="12" :lg="12" style="padding: 0">-->
                  <!--<div :id="'cpu-chart-' + key" class="chart-wrapper"></div>-->
                <!--</el-col>-->
                <!--<el-col :xs="24" :sm="24" :md="12" :lg="12" style="padding: 0">-->
                  <!--<div :id="'memory-chart-' + key" class="chart-wrapper"></div>-->
                <!--</el-col>-->
              <!--</el-row>-->
            <!--</div>-->
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import PartTitle from '../Basic/PartTitle/PartTitle.vue'
  import KubernetesCharts from './KubernetesCharts.vue'
  import echarts from 'echarts'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      PartTitle,
      KubernetesCharts
    },
    data () {
      return {
        accuracyChart: '',
        timeChart: '',
        accuracy: [20, 28, 36],
        timeList1: [100, 200, 300],
        conditionsData: [{
          'Type': 'OutOfDisk',
          'Status': 'False',
          'LastHeartbeatTime': 'Sat, 03 Mar 2018 17:17:49 +0800',
          'LastTransitionTime': 'Mon, 26 Feb 2018 17:49:10 +0800',
          'Reason': 'KubeletHasSufficientDisk',
          'Message': 'kubelet has sufficient disk space available'
        }],
        InternalIP: '119.23.51.139',
        Hostname: 'k8s-node-3',
        Capacity: {
          cpu: '1',
          memory: '1883724Ki',
          pods: 110
        },
        Allocatable: {
          cpu: '1',
          memory: '1781324Ki',
          pods: 110
        },
        SystemInfo: {
          'OS Image': 'CentOS Linux 7 (Core)',
          'Operating System': 'linux',
          'Architecture': 'amd64',
          'Container Runtime Version': 'docker://Unknown',
          'Kubelet Version': 'v1.8.2',
          'Kube-Proxy Version': 'v1.8.2'
        },
        chartsData: {
          'tensorflow-ps-rc-tmrww': {
            curCpuRequest: 0,
            cpuRequests: [],
            curCpuLimit: 0,
            cpuLimits: [],
            curMemoryRequest: 0,
            memoryRequests: [],
            curMemory: 0,
            memories: []
          },
          'tensorflow-worker-rc-j9ptp': {
            curCpuRequest: 0,
            cpuRequests: [],
            curCpuLimit: 0,
            cpuLimits: [],
            curMemoryRequest: 0,
            memoryRequests: [],
            curMemory: 0,
            memories: []
          },
          'tensorflow-worker-rc-q67pm': {
            curCpuRequest: 0,
            cpuRequests: [],
            curCpuLimit: 0,
            cpuLimits: [],
            curMemoryRequest: 0,
            memoryRequests: [],
            curMemory: 0,
            memories: []
          }
        },
        charts: [],
        timeList: [1, 2, 3, 4, 5]
      }
    },
    methods: {
      drawLineChart (id, xData, yData, name, yName) {
        let charts = echarts.init(document.getElementById(id))
        charts.setOption({
          // Make gradient line here
          visualMap: [{
            show: false,
            type: 'continuous',
            seriesIndex: 0,
            min: 0
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
            top: '0%'
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
      }
    },
    computed: {
      ...mapGetters({
        mainWidth: 'mainWidth'
      })
    },
    watch: {
      mainWidth: function () {
        for (let i = 0; i < this.charts; i++) {
          this.charts[i].resize()
          console.log('saas')
        }
      }
    },
    mounted () {
      let data = {
        'Non-terminated Pods': [
          {
            'Namespace': 'default',
            'Name': 'tensorflow-ps-rc-tmrww',
            'CPU Requests': '1 (2%)',
            'CPU Limits': '3 (1%)',
            'Memory Requests': '5 (6%)',
            'Memory': '7 (0%)'
          },
          {
            'Namespace': 'default',
            'Name': 'tensorflow-ps-rc-tmrww',
            'CPU Requests': '1 (4%)',
            'CPU Limits': '3 (3%)',
            'Memory Requests': '5 (9%)',
            'Memory': '7 (1%)'
          },
          {
            'Namespace': 'default',
            'Name': 'tensorflow-ps-rc-tmrww',
            'CPU Requests': '1 (6%)',
            'CPU Limits': '3 (5%)',
            'Memory Requests': '5 (16%)',
            'Memory': '7 (2%)'
          },
          {
            'Namespace': 'default',
            'Name': 'tensorflow-ps-rc-tmrww',
            'CPU Requests': '1 (9%)',
            'CPU Limits': '3 (12%)',
            'Memory Requests': '5 (22%)',
            'Memory': '7 (14%)'
          },
          {
            'Namespace': 'default',
            'Name': 'tensorflow-ps-rc-tmrww',
            'CPU Requests': '1 (17%)',
            'CPU Limits': '3 (15%)',
            'Memory Requests': '5 (35%)',
            'Memory': '7 (22%)'
          }
        ]
      }
      for (let i = 0; i < data['Non-terminated Pods'].length; i++) {
        let pod = data['Non-terminated Pods'][i]
        this.chartsData[pod['Name']].curCpuRequest = parseInt(pod['CPU Requests'].split(' ')[0])
        this.chartsData[pod['Name']].cpuRequests.push(parseInt(pod['CPU Requests'].split(' ')[1].split('(')[1].split('%')[0]))
        this.chartsData[pod['Name']].curCpuLimit = parseInt(pod['CPU Limits'].split(' ')[0])
        this.chartsData[pod['Name']].cpuLimits.push(parseInt(pod['CPU Limits'].split(' ')[1].split('(')[1].split('%')[0]))
        this.chartsData[pod['Name']].curMemoryRequest = parseInt(pod['Memory Requests'].split(' ')[0])
        this.chartsData[pod['Name']].memoryRequests.push(parseInt(pod['Memory Requests'].split(' ')[1].split('(')[1].split('%')[0]))
        this.chartsData[pod['Name']].curMemory = parseInt(pod['Memory'].split(' ')[0])
        this.chartsData[pod['Name']].memories.push(parseInt(pod['Memory'].split(' ')[1].split('(')[1].split('%')[0]))
//        console.log(this.chartsData[pod['Name']])
      }

      console.log(this.chartsData)

//      this.$nextTick(function () {
//        for (let chartName in this.chartsData) {
//          this.charts.push(this.drawLineChart('cpu-chart-' + chartName, this.timeList, this.chartsData[chartName].cpuRequests, '准确度', '准确度(%)'))
//          this.charts.push(this.drawLineChart('memory-chart-' + chartName, this.timeList, this.chartsData[chartName].cpuRequests, '准确度', '准确度(%)'))
//
//          console.log(chartName)
//        }
//        this.charts.push(this.drawLineChart('cpu-chart-', this.timeList1, this.accuracy, '准确度', '准确度(%)'))
//        this.accuracyChart = this.drawLineChart('accuracy-chart', this.timeList1, this.accuracy, '准确度', '准确度(%)')
//        this.timeChart = this.drawLineChart('time-chart', this.timeList1, this.accuracy, '每一百轮的训练时间', '时间(s)')
//      })
    }
  }
</script>

<style scoped src="./KubernetesResult.css"></style>
