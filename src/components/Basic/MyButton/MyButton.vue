<template>
  <!--<div>-->
  <button class="button-wrapper" :style="buttonColor">{{ content }}</button>
  <!--</div>-->
</template>

<script>
  export default {
    props: ['content', 'color'],
    data () {
      return {
        buttonColor: {
          color: this.color
        }
      }
    }
  }
</script>

<style scoped>
  .button-wrapper {
    position: relative;
    display: inline-block;
    color: #ffffff;
    background-color: #9AD9D7;
    border: none;
    border-radius: 2px;
    padding: 6px 50px 6px 50px;
    font-size: 16px;
    cursor: pointer;
    box-shadow:  0px 8px 15px 6px #00000040;
    white-space: nowrap;
  }

  .button-wrapper:hover {
    border-color: white;
  }
</style>
