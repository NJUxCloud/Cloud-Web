<template>
  <!--<codemirror v-model="code" :options="cmOptions"></codemirror>-->

  <codemirror ref="myCm"
              :value="code"
              :options="cmOptions"
              @ready="onCmReady"
              @focus="onCmFocus"
              @input="onCmCodeChange">
  </codemirror>


</template>

<script>
  // language js
  import 'codemirror/mode/python/python.js'
  // theme css
  // more codemirror resources
  import './CodeArea.css'
  // import 'codemirror/some-resource...'
  export default {
    data () {
      return {
        code: 'a = 2\nprint a',
        cmOptions: {
          // codemirror options
          tabSize: 4,
//          mode: 'text/javascript',
          theme: 'code-style',
          lineNumbers: true,
          line: true
          // more codemirror options, 更多 codemirror 的高级配置...
        }
      }
    },
    methods: {
      onCmReady (cm) {
        console.log('the editor is readied!', cm)
      },
      onCmFocus (cm) {
        console.log('the editor is focus!', cm)
      },
      onCmCodeChange (newCode) {
        console.log('this is new code', newCode)
        this.code = newCode
      }
    },
    computed: {
      codemirror () {
        return this.$refs.myCm.codemirror
      }
    },
    mounted () {
      console.log('this is current codemirror object', this.codemirror)
      // you can use this.codemirror to do something...
    }
  }
</script>

<style scoped src="./CodeArea.css"></style>
