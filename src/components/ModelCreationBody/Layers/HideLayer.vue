<template>
  <div style="margin-right: 10px;">
    <img src="../../../assets/arrow.png" class="arrow-wrapper"/>
    <div class="layer-wrapper">
      <img src="../../../assets/HideLayer.png" style="margin-right: 10px">
      <p>隐藏层{{ count }}</p>
    </div>

  </div>
</template>

<script>
  export default {
    props: ['count'],
    data () {
      return {
      }
    }
  }
</script>

<style scoped src="./layer.css"></style>
