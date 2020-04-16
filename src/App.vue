<!--
 * @Author: your name
 * @Date: 2020-03-27 01:21:26
 * @LastEditTime: 2020-04-02 02:31:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/App.vue
 -->
<template>
  <div id="app">
    <BaseHeader/>
    <router-view/>
    <BaseFooter/>
  </div>
</template>

<script>
import BaseHeader from "./components/BaseHeader"
import BaseFooter from "./components/BaseFooter"
export default {
  components: {
    BaseHeader,
    BaseFooter
  },
  name: 'App'
}
</script>

<style>
</style>
