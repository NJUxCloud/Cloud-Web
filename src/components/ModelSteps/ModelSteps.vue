<template>
  <div>
    <el-steps :active="stepCount" align-center class="steps-wrapper">
      <el-step title="步骤1" description="模型名称"></el-step>
      <el-step title="步骤2" description="数据上传"></el-step>
      <el-step title="步骤3" description="数据预处理"></el-step>
      <el-step title="步骤4" description="模型训练"></el-step>
      <el-step title="步骤5" description="结果展示"></el-step>
    </el-steps>
  </div>
</template>

<script>
  export default {
    props: ['stepCount'],
    data () {
      return {
      }
    }
  }
</script>

<style scoped src="./ModelSteps.css"></style>
