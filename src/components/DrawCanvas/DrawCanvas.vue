<template>
  <div>
    <div class="inner draw" @mousemove="beginPath($event)">
      <div class="wrap">
        <canvas
          id="canvas"
          class="fl"
          width="400px"
          height="400px"
          @mousedown="canvasDown($event)"
          @mouseup="canvasUp($event)"
          @mousemove="canvasMove($event)"
          @touchstart="canvasDown($event)"
          @touchend="canvasUp($event)"
          @touchmove="canvasMove($event)"
        >
        </canvas>
      </div>

      <div id="img-box" v-show="imgUrl.length">
        <div class="img-item" v-for="(src, index) in imgUrl">
          <img :src="src">
          <p>识别结果：{{ results[index] }}</p>
        </div>
      </div>
    </div>
    <div class="buttons-wrapper">
      <div @click="controlCanvas('clear')">
        <my-button content="清空"></my-button>
      </div>
      <div @click="getImage()">
        <my-button content="上传" style="margin-left: 30px"></my-button>
      </div>
    </div>


  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import {mapActions} from 'vuex'

  export default {
    components: {
      MyButton
    },
    data () {
      return {
        context: {},
        imgUrl: [],
        canvasMoveUse: true,
        // 存储当前表面状态数组-上一步
        preDrawAry: [],
        // 存储当前表面状态数组-下一步
        nextDrawAry: [],
        // 中间数组
        middleAry: [],
        // 配置参数
        config: {
          lineWidth: 1,
          lineColor: '#76B6C2',
          shadowBlur: 2
        },
        results: []
      }
    },
    created () {
      this.$emit('setNav', '在线涂鸦画板')
    },
    mounted () {
      const canvas = document.querySelector('#canvas')
      this.context = canvas.getContext('2d')
      this.initDraw()
      this.setCanvasStyle()
//      document.querySelector('#footer').classList.add('hide-footer')
//      document.querySelector('body').classList.add('fix-body')
    },
    destroyed () {
//      document.querySelector('#footer').classList.remove('hide-footer')
//      document.querySelector('body').classList.remove('fix-body')
    },
    computed: {
      controls () {
        return [{
          title: '清除',
          action: 'clear',
          className: (this.preDrawAry.length || this.nextDrawAry.length) ? 'active fa fa-trash' : 'fa fa-trash'
        }]
      }
    },
    methods: {
      ...mapActions({
        constructInference: 'constructInference'
      }),
      isPc () {
        const userAgentInfo = navigator.userAgent
        const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
        let flag = true
        for (let v = 0; v < Agents.length; v++) {
          if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
          }
        }
        return flag
      },
      initDraw () {
        const preData = this.context.getImageData(0, 0, 400, 400)
        // 空绘图表面进栈
        this.middleAry.push(preData)
      },
      canvasMove (e) {
        if (this.canvasMoveUse) {
          console.log('canvasMove')
          const t = e.target
          let canvasX
          let canvasY
          if (this.isPc()) {
            canvasX = e.clientX - t.parentNode.offsetLeft
            canvasY = e.clientY - t.parentNode.offsetTop
          } else {
            canvasX = e.changedTouches[0].clientX - t.parentNode.offsetLeft
            canvasY = e.changedTouches[0].clientY - t.parentNode.offsetTop
          }
          this.context.lineTo(canvasX, canvasY)
          this.context.stroke()
        }
      },
      beginPath (e) {
        const canvas = document.querySelector('#canvas')
        if (e.target !== canvas) {
          console.log('beginPath')
          this.context.beginPath()
        }
      },
      // mouseup
      canvasUp (e) {
        console.log('canvasUp')
        const preData = this.context.getImageData(0, 0, 400, 400)
        if (!this.nextDrawAry.length) {
          // 当前绘图表面进栈
          this.middleAry.push(preData)
        } else {
          this.middleAry = []
          this.middleAry = this.middleAry.concat(this.preDrawAry)
          this.middleAry.push(preData)
          this.nextDrawAry = []
        }
        this.canvasMoveUse = false
      },
      // mousedown
      canvasDown (e) {
        console.log('canvasDown')
        this.canvasMoveUse = true
        // client是基于整个页面的坐标
        // offset是cavas距离顶部以及左边的距离
        const canvasX = e.clientX - e.target.parentNode.offsetLeft
        const canvasY = e.clientY - e.target.parentNode.offsetTop
        this.setCanvasStyle()
        // 清除子路径
        this.context.beginPath()
        this.context.moveTo(canvasX, canvasY)
        console.log('moveTo', canvasX, canvasY)
        // 当前绘图表面状态
        const preData = this.context.getImageData(0, 0, 400, 400)
        // 当前绘图表面进栈
        this.preDrawAry.push(preData)
      },
      // 操作
      controlCanvas (action) {
        switch (action) {
          case 'prev':
            if (this.preDrawAry.length) {
              const popData = this.preDrawAry.pop()
              const midData = this.middleAry[this.preDrawAry.length + 1]
              this.nextDrawAry.push(midData)
              this.context.putImageData(popData, 0, 0)
            }
            break
          case 'next':
            if (this.nextDrawAry.length) {
              const popData = this.nextDrawAry.pop()
              const midData = this.middleAry[this.middleAry.length - this.nextDrawAry.length - 2]
              this.preDrawAry.push(midData)
              this.context.putImageData(popData, 0, 0)
            }
            break
          case 'clear':
            this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
            this.preDrawAry = []
            this.nextDrawAry = []
            this.middleAry = [this.middleAry[0]]
            break
        }
      },
      // 生成图片
      getImage () {
        const canvas = document.querySelector('#canvas')
        const src = canvas.toDataURL('image/png')
//        if (!this.isPc()) {
//          // window.open(`data:text/plain,${src}`)
//          window.location.href = src
//        }
//        this.results.push(1)
//        console.log(src)
        console.log(this.$route.params.id)
        let loadingInstance = this.$loading({
          body: true,
          lock: true,
          text: '识别中...'
        })
        this.constructInference({
          onSuccess: (data) => {
            console.log(data)
            this.imgUrl.push(src)
            this.results.push(data.message)
            loadingInstance.close()
          },
          onError: () => {
            this.$message({
              showClose: true,
              type: 'error',
              message: '识别失败...'
            })
            loadingInstance.close()
          },
          body: {
            'file': this.dataURLtoFile(src)
          },
          modelName: this.$route.params.id
        })
      },
      // 设置绘画配置
      setCanvasStyle () {
        this.context.lineWidth = this.config.lineWidth
        this.context.shadowBlur = this.config.shadowBlur
        this.context.shadowColor = this.config.lineColor
        this.context.strokeStyle = this.config.lineColor
      },
      dataURLtoFile (dataurl, filename) {
        let arr = dataurl.split(',')
        let mime = arr[0].match(/:(.*?);/)[1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, {type: mime})
      }
    }
  }
</script>

<style scoped src="./DrawCanvas.css"></style>
