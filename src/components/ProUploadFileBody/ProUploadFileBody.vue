<template>
  <div class="upload-file-wrapper">
    <el-row :gutter="20" style="margin: 0;">
      <el-col :xs="24" :sm="24" :md="24" :lg="24">
        <div class="breadcrumb-wrapper">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>专业上传</el-breadcrumb-item>
            <el-breadcrumb-item>上传代码
              <el-tooltip content="上传数据以供模型选用" placement="bottom" effect="light">
                <i class="el-icon-question"></i>
              </el-tooltip>
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
      </el-col>

    </el-row>

    <el-row :gutter="20" style="margin: 0;">
      <el-col :xs="24" :sm="8" :md="6" :lg="6">
        <div class="side-bar-wrapper">

          <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          >
            <tree-folder v-for="(root, index) in roots"  :folder="root" :key="index"></tree-folder>
          </el-menu>
        </div>

      </el-col>
      <el-col :xs="24" :sm="16" :md="18" :lg="18">
        <div class="code-area-wrapper">
          <!--<el-input-->
            <!--type="textarea"-->
            <!--autosize-->
            <!--placeholder="请输入内容"-->
            <!--v-model="code">-->
          <!--</el-input>-->

          <code-area></code-area>
        </div>

      </el-col>
    </el-row>

  </div>
</template>

<script>
  import MyButton from '../Basic/MyButton/MyButton.vue'
  import { mapGetters } from 'vuex'
  import Pre from 'prettify'
  import CodeArea from '../CodeArea/CodeArea.vue'
//  import Pre from 'prettify'
//  import TreeFolder from '../TreeFolder/TreeFolder.vue'

  export default {
    components: {
      MyButton,
      Pre,
      CodeArea
    },
    data () {
      return {
        roots: [],
        openCatalog: [],
        catalog: {
          'image_process.py': 'image_process.py',
          'mnist': {
            'mnist_inference.py': 'mnist_inference.py',
            'mnist_train.py': 'mnist_train.py',
            'mnist_eval.py': 'mnist_eval.py',
            '__init__.py': '__init__.py',
            '__pycache__': {
              'mnist_train.cpython-36.pyc': 'mnist_train.cpython-36.pyc',
              'mnist_inference.cpython-36.pyc': 'mnist_inference.cpython-36.pyc'
            }
          }
        },
        code: 'as',
        prettyAreaData: '# -*- coding: UTF-8 -*-\n' +
        '\n' +
        '# Filename : helloworld.py\n' +
        '# author by : www.runoob.com\n' +
        '\n' +
        '# 该实例输出 Hello World!\n' +
        'print(\'Hello World!\')'
      }
    },
    watch: {
      prettyAreaData: function () {
      }
    },
    computed: {
      ...mapGetters({
        largeSize: 'largeSize'
      })
    },
    methods: {
      changeOpenCatalog: function (curCatalog) {
        this.openCatalog = this.catalog['']
      }
    },
    mounted () {
      let i = 0
      for (let key in this.catalog) {
        this.roots.push({
          name: key,
          type: typeof this.catalog[key],
          children: this.catalog[key],
          index: i + ''
        })
        i++
      }

//      setTimeout(() => {
//        document.body.addEventListener('load', prettyPrint())
//      }, 2000)
    },
    beforeCreate: function () {
//      this.$options.components.TreeFolderContents = require('../TreeFolder/TreeFolderContents.vue')
    }
  }
</script>

<style scoped src="./ProUploadFileBody.css"></style>
