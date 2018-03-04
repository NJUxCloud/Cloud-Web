<template>
  <div>
    <my-nav-bar :showBg="true"></my-nav-bar>
    <model-steps :stepCount="4"></model-steps>
    <div class="result-wrapper">
      <training-result></training-result>
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
  import TrainingResult from '../components/TrainingResult/TrainingResult.vue'

  export default {
    components: {
      MyNavBar,
      MyButton,
      MyFooter,
      ModelSteps,
      TrainingResult
    },
    data () {
      return {
        modelName: ''
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
  .result-wrapper {
    padding: 30px;
  }
</style>
