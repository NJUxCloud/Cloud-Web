<template>
  <div>
    <h2
    :sendSync="sendSync"
    :autoStart="autoStart"
    :defaultValue="defaultValue"
    :startCountTime="startCountTime"
    style="font-weight: 500; margin-bottom: 30px;"
    >
      {{countString}}
    </h2>
  </div>
</template>
<script>
  export default {
    props: {
      sendSync: {
        type: Boolean,
        default: false
      },
      autoStart: {
        type: Boolean,
        default: false
      },
      defaultValue: {
        type: Number,
        default: 0
      },
      startCountTime: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isStart: false,
        globalTimer: null,
        countString: '0秒',
        day: 0,
        hour: 0,
        minute: 0,
        second: 0,
        millisecond: 0,
        countVal: this.defaultValue,
        pauseTime: 0
      }
    },
    watch: {
      'countString': {
        deep: true,
        handler: function (val, oldVal) {
          var vm = this
          if (vm.needSendSunc) {
            vm.passToParent(val)
          }
        }
      },
      'needSendSunc': {
        deep: true,
        handler: function (val) {
          var vm = this
          if (val) {
            vm.passToParent(vm.countString)
          }
        }
      },
      startCountTime: function () {
        console.log('change')
        if (this.startCountTime) {
          this.startCountFn()
          this.countVal = new Date().getTime()
        } else {
          this.stopCountFn()
          var nowDate = new Date().getTime()
          console.log('defaultValue: ' + this.defaultValue)
          console.log('parseTime: ' + this.pauseTime)
          console.log('countVal: ' + this.countVal)
          var num = nowDate - this.countVal + this.defaultValue
          console.log(num)

          this.$emit('setDefaultVal', num)
        }
      },
      defaultValue: function () {
        console.log('dv: ' + this.defaultValue)
        if (this.defaultValue === 0) {
          console.log('0')
          this.stopCountFn()
          this.globalTimer = null
          this.countString = '0秒'
          this.day = 0
          this.hour = 0
          this.minute = 0
          this.second = 0
          this.millisecond = 0
          this.countVal = 0
          this.pauseTime = 0
        }
      }
    },
    mounted () {
      var vm = this
      if (vm.autoStart) {
        vm.startCountFn()
      }
    },
    computed: {
      needSendSunc: function () {
        return this.sendSync
      }
    },
    created: function () {
      this.$on('startCount', function () {
        this.startCountFn()
      })
      this.$on('stopCount', function () {
        this.stopCountFn()
      })
    },
    components: {},
    methods: {
      counterFn: function (counterTime) {
        console.log(this.defaultValue)
//        alert('sa')
//        console.log(counterTime)
        var vm = this
        var nowDate = new Date().getTime()
        if (vm.pauseTime === 0) {
          var num = nowDate - counterTime
        } else {
//          vm.pauseTime = vm.pauseTime + 10
//          num = vm.pauseTime - counterTime
          num = nowDate - counterTime + vm.defaultValue
        }
        var leave1 = num % (24 * 3600 * 1000)
        var leave2 = leave1 % (3600 * 1000)
        var leave3 = leave2 % (60 * 1000)
        vm.day = Math.floor(num / (24 * 3600 * 1000))
        vm.hour = Math.floor(leave1 / (3600 * 1000))
        vm.minute = Math.floor(leave2 / (60 * 1000))
        vm.second = Math.round(leave3 / 1000)
        if (vm.day > 0) {
          vm.countString = `${vm.day}天 ${vm.hour}小时 ${vm.minute}分 ${vm.second}秒`
        } else if (vm.hour > 0) {
          vm.countString = `${vm.hour}小时 ${vm.minute}分 ${vm.second}秒`
        } else if (vm.minute > 0) {
          vm.countString = `${vm.minute}分 ${vm.second}秒`
        } else {
          vm.countString = `${vm.second}秒`
        }
      },
      startCountFn: function () {
        var vm = this
        if (!vm.isStart) {
          vm.countVal = vm.countVal ? vm.countVal : new Date().getTime()
          var timer = setInterval(function () {
            vm.counterFn(vm.countVal)
          }, 10)
          vm.globalTimer = timer
          vm.isStart = true
        }
      },
      stopCountFn: function () {
        var vm = this
        if (vm.isStart) {
          window.clearInterval(vm.globalTimer)
          console.log('clear')
          vm.globalTimer = null
          vm.isStart = false
          vm.pauseTime = new Date().getTime()
        }
      },
      passToParent: function (data) {
        this.$emit('getDataFromChild', data)
      }
    }
  }
</script>
