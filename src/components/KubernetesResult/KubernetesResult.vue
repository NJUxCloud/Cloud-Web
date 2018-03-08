<template>
  <div>
    <part-title title="Kubernetes结果" style="margin-bottom: 30px"></part-title>
    <div class="kuber-result-wrapper">
      <el-collapse class="collapse-wrapper" v-model="activeName" accordion>
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
            <kubernetes-charts :chartsData="chartsData" :openCharts="openCharts"></kubernetes-charts>

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
  import {mapGetters, mapActions} from 'vuex'

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
        conditionsData: [],
        InternalIP: '',
        Hostname: '',
        Capacity: {
          cpu: '',
          memory: '',
          pods: 0
        },
        Allocatable: {
          cpu: '',
          memory: '',
          pods: 0
        },
        SystemInfo: {
          'OS Image': '',
          'Operating System': '',
          'Architecture': '',
          'Container Runtime Version': '',
          'Kubelet Version': '',
          'Kube-Proxy Version': ''
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
          },
          'kube-flannel-ds-dgvf8': {
            curCpuRequest: 0,
            cpuRequests: [],
            curCpuLimit: 0,
            cpuLimits: [],
            curMemoryRequest: 0,
            memoryRequests: [],
            curMemory: 0,
            memories: []
          },
          'kube-proxy-dt8hx': {
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
        timeList: [1, 2, 3, 4, 5],
        activeName: '1',
        openCharts: false
      }
    },
    methods: {
      ...mapActions({
        getKubernetesResult: 'getKubernetesResult'
      }),
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
      },
      getData () {
        this.getKubernetesResult({
          onSuccess: (data) => {
            console.log(data)
            this.conditionsData = data.Conditions
            this.SystemInfo = data['System Info']
            this.Allocatable = data.Allocatable
            this.Capacity = data.Capacity
            this.InternalIP = data.Addresses.InternalIP
            this.Hostname = data.Addresses.Hostname

//            console.log(data['Non-terminated Pods'].length)
            for (let i = 0; i < data['Non-terminated Pods'].length; i++) {
              let pod = data['Non-terminated Pods'][i]
//              console.log(pod['Name'])

              this.chartsData[pod['Name']].curCpuRequest = parseInt(pod['CPU Requests'].split(' ')[0])
              this.chartsData[pod['Name']].cpuRequests.push(parseInt(pod['CPU Requests'].split(' ')[1].split('(')[1].split('%')[0]))
              this.chartsData[pod['Name']].curCpuLimit = parseInt(pod['CPU Limits'].split(' ')[0])
              this.chartsData[pod['Name']].cpuLimits.push(parseInt(pod['CPU Limits'].split(' ')[1].split('(')[1].split('%')[0]))
              this.chartsData[pod['Name']].curMemoryRequest = parseInt(pod['Memory Requests'].split(' ')[0])
              this.chartsData[pod['Name']].memoryRequests.push(parseInt(pod['Memory Requests'].split(' ')[1].split('(')[1].split('%')[0]))
              this.chartsData[pod['Name']].curMemory = parseInt(pod['Memory Limits'].split(' ')[0])
              this.chartsData[pod['Name']].memories.push(parseInt(pod['Memory Limits'].split(' ')[1].split('(')[1].split('%')[0]))
            }
//            this.accuracy = accu
//            this.timeList1 = time
//            this.duration = dura
          },
          onError: () => {
            console.log('error')
          }
        })
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
        }
      },
      activeName: function () {
        if (this.activeName === '6') {
          this.openCharts = true
        } else {
          this.openCharts = false
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
