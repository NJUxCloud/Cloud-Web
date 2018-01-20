<template>
  <div>
    <!--<p>-->
    <!--<span>{{ folder.name }}</span>-->
    <el-submenu v-if="folder.type === 'object'" :index="folder.index">
      <template slot="title">
        <span>{{ folder.name }}</span>
      </template>
      <tree-folder-contents :children="folder.children" :index="folder.index"></tree-folder-contents>
    </el-submenu>

    <el-menu-item v-else :index="folder.index">
      <span slot="title">{{ folder.name }}</span>
    </el-menu-item>
    <!--</p>-->
  </div>
</template>

<script>
//  import TreeFolderContents from './TreeFolderContents.vue'

  export default {
    name: 'tree-folder',
    props: ['folder'],
    components: {
//      'tree-folder-contents': TreeFolderContents
    },
    data () {
      return {
        children: []
      }
    },
    beforeCreate: function () {
//      console.log(this.folder)
//      console.log('beforeCreate')
//      this.$options.components['tree-folder-contents'] = require('./TreeFolderContents.vue')
//      this.$options.components.TreeFolderContents = require('./TreeFolderContents.vue')
      console.log(this.$options.components)
    },
    mounted () {
      console.log(this.folder)
    }
  }
</script>

<style scoped src="./TreeFolder.css"></style>
