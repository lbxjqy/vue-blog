<!--
 * @Author: your name
 * @Date: 2020-04-18 02:24:53
 * @LastEditTime: 2020-04-18 02:41:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/components/articleSee.vue
 -->
<template>
  <div class="articleBox">
    <h2> {{ title }}</h2>
    <mavon-editor v-model="content" :subfield="false" :box-shadow="false" default-open="preview" :toolbars-flag="false" />
  </div>
</template>

<script>
import { articleGetContent } from '@/api/article'

export default {
  data() {
    return {
      content: '',
      title: ''
    }
  },
  created() {
    const params = this.$route.params
    this.getArticle(params.id)
  },
  methods: {
    getArticle(id) {
      console.log(id)
      articleGetContent(id).then(response => {
        this.content = response.data.data.content
        this.title = response.data.data.title
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>
    .articleBox {
        width:50%;
        margin: 0 auto;
        padding:2px 0 0 0;
    }
    h2 {
       text-align:center;
    }
</style>
