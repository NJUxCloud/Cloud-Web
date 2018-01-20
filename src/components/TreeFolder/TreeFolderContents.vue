<template>
  <div>
    <tree-folder v-for="root in roots" :folder="root" :key="root.index"></tree-folder>
  </div>
</template>

<script>
//  import TreeFolder from './TreeFolder.vue'

  export default {
    name: 'tree-folder-contents',
    props: ['children', 'index'],
    components: {
//      'tree-folder': TreeFolder
    },
    data () {
      return {
        roots: []
      }
    },
    mounted () {
      let i = 0
      for (let key in this.children) {
        this.roots.push({
          name: key,
          type: typeof this.children[key],
          children: this.children[key],
          index: this.index + '-' + i
        })
        i++
      }
    },
    beforeCreate: function () {
//      this.$options.components['tree-folder'] = require('./TreeFolder.vue')
      console.log(this.$options.components)
//      if ()
    }
  }
</script>

<style scoped src="./TreeFolder.css"></style>
