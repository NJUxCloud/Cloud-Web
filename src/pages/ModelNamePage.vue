<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <model-steps :stepCount="0"></model-steps>
    <div style="min-height: 450px; width: 100%; text-align: center;">
      <h2 style="font-weight: 500; margin-top: 100px;">输 入 模 型 名 称</h2>
      <el-input style="width: 300px; margin-top: 100px;" v-model="modelName"></el-input>
      <div style="margin-top: 200px;" @click="createNewModel">
        <my-button content="创 建 新 模 型"></my-button>
      </div>
      <!--<el-button type="default">创建模型</el-button>-->
    </div>
    <!--<pro-model-collections></pro-model-collections>-->
    <my-footer></my-footer>
  </div>
</template>

<script>
  import MyNavBar from '../components/MyNavBar/MyNavBar.vue'
  import MyButton from '../components/Basic/MyButton/MyButton.vue'
  import MyFooter from '../components/MyFooter/MyFooter.vue'
  import ModelSteps from '../components/ModelSteps/ModelSteps.vue'

  export default {
    components: {
      MyNavBar,
      MyButton,
      MyFooter,
      ModelSteps
    },
    data () {
      return {
        modelName: ''
      }
    },
    methods: {
      createNewModel: function () {
        this.$router.push('/proUploadData')
      }
    }
  }
</script>

<style scoped src=""></style>
