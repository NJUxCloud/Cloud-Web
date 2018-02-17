<template>
  <div class="part-title-wrapper">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .part-title-wrapper {
    position: relative;
    display: inline-block;
    width: auto;
    white-space: nowrap;
    border-left: 10px solid #a7d7d6;
    height: 40px;
    padding-left: 10px;
  }

  .part-title-wrapper h2 {
    position: absolute;
    float: bottom;
    font-weight: 500;
    color: #666;
    bottom: 0;
  }
</style>
