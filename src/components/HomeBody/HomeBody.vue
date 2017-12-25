<template>
  <div class="home-body-wrapper">
    <block-line></block-line>
    <h2>构 建 你 的 模 型</h2>
    <div class="body-intro-wrapper">
      <el-row :gutter="20" style="margin: 0;">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" v-for="intro in intros" :key="intro.index" style="margin-bottom: 30px">
          <img :src="intro.url"/>
          <h4>{{ intro.title }}</h4>
          <ul>
            <li v-for="content in intro.contents">
              <p>{{ content }}</p>
            </li>
          </ul>
        </el-col>
      </el-row>
    </div>
    <div class="body-pic-wrapper">
      <img src="../../assets/banner.png"/>
      <h2>开 始 构 建</h2>
      <el-button class="button">
        <img src="../../assets/start-button.png">
      </el-button>
    </div>
    <div class="body-content-wrapper">
      <el-row :gutter="20" style="position:relative; display: inline-block; width: 100%;" v-for="content in contents" :key="content.index">
        <el-col :xs="24" :sm="24" :md="12" :lg="12" v-show="content.left">
          <img :src="content.url">
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" style="text-align: left; left: 15%; position: relative;" v-show="!content.left">
          <h2>{{ content.title }}</h2>
          <block-line></block-line>
          <ul>
            <li v-for="c in content.contents">{{ c }}</li>
          </ul>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" :style="[largeSize ? largeContent : smallContent]" v-show="content.left">
          <h2>{{ content.title }}</h2>
          <block-line></block-line>
          <ul>
            <li v-for="c in content.contents">{{ c }}</li>
          </ul>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12" v-show="!content.left">
          <img :src="content.url">
        </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
  import BlockLine from '../Basic/BlockLine/BlockLine.vue'
  import ElRow from 'element-ui/packages/row/src/row'
  import ElCol from 'element-ui/packages/col/src/col'
  import ElButton from '../../../node_modules/element-ui/packages/button/src/button.vue'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      ElButton,
      ElCol,
      ElRow,
      BlockLine
    },
    data () {
      return {
        intros: [
          {
            index: 1,
            url: require('../../assets/data-icon.png'),
            title: '数据处理',
            contents: ['·可视化分析', '·数据集选择', '·数据归一化']
          },
          {
            index: 2,
            url: require('../../assets/model-icon.png'),
            title: '模型训练',
            contents: ['·用户自调参', '·标签列选择', '·多模型对比']
          },
          {
            index: 3,
            url: require('../../assets/result-icon.png'),
            title: '结果评估',
            contents: ['·二分类评估', '·多指标展示', '·综合化参考']
          }
        ],
        contents: [
          {
            index: 1,
            url: require('../../assets/data-image.png'),
            title: '输入数据 可视化分析',
            contents: ['·多维度分析上传数据', '·图标展示分析结果', '·选择数据集并划分使用比例'],
            left: true
          },
          {
            index: 2,
            url: require('../../assets/model-image.png'),
            title: '训练模型 展示训练过程',
            contents: ['·每个节点的状态', '·CPU、内存使用情况', '·每一次的损失loss'],
            left: false
          },
          {
            index: 3,
            url: require('../../assets/result-image.png'),
            title: '测试模型 评估训练结果',
            contents: ['·二分类评估', '·多指标分析', '·图表展示分析结果'],
            left: true
          }
        ],
        smallContent: {
          marginBottom: '30px'
        },
        largeContent: {
          textAlign: 'left',
          left: '15%',
          position: 'relative',
          width: '35%'
        }
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize'
      })
    },
    watch: {
      largeSize: function () {
//        alert(this.largeSize)
        if (this.largeSize) {
          this.contents[1].left = false
        } else {
          this.contents[1].left = true
        }
      }
    },
    mounted () {
      if (this.largeSize) {
        this.contents[1].left = false
      } else {
        this.contents[1].left = true
      }
    }
  }
</script>

<style scoped src="./HomeBody.css"></style>
