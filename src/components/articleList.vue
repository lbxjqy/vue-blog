<!--
 * @Author: your name
 * @Date: 2020-03-26 23:15:06
 * @LastEditTime: 2020-04-19 01:04:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/components/HelloWorld.vue
 -->
<template>
    <div class="articleBox">
        <section class="article">
          <div class="item" v-for="(item, index) in articleList" :key="index">
            <router-link :to="'/article/'+item._id" class="article-title">
                <h2>{{item.title}}</h2>
            </router-link>
            <p class="article-desc">{{item.describe}}</p>
            <div class="article-info">
                <span class="time">{{item.updateAt|formatDate(this)}}</span>
                <span class="time"><strong v-if="item.meta">
                  <i>{{item.meta.views}}</i>
                </strong>次阅读</span>
                <span class="time"><strong v-if="item.meta">
                  <i>{{item.meta.comments}}</i>
                </strong>条评论</span>
                <span class="time"><strong v-if="item.meta">
                  <i>{{item.meta.likes}}</i>
                </strong>人喜欢</span>
            </div>
          </div>
        </section>
        <section class="side">
          <div class="hot">
            <p class="hot-title">热点文章</p>
            <div class="hot-info">
              <!-- <a href="javascript:void(0)" v-for="(item, index) in hotArticleList"
                :key="index"> -->
              <router-link :to="'/article/'+item._id" v-for="(item, index) in hotArticleList" :key="index">
                <h3>{{item.title}}</h3>
              </router-link>
              <!-- </a> -->
            </div>
          </div>
          <div class="tag">
            <p class="tag-title">标签</p>
            <div class="tag-info">
              <a href="javascript:void(0)" v-for="(item, index) in tagList"
                :key="index">
                <h3 @click="queryByTag(item._id)">{{item._id}}({{item.count}})</h3>
              </a>
            </div>
          </div>
        </section>
    </div>
</template>

<script>
let page = 1
// let fetchTags = getTag()
// let fetxhArticle = getArticle({current_page: page})
import { getHomePageArticleList, getHomePageHotArticleList } from '@/api/article'
import { getHomePageTagList } from '@/api/tag'

export default {
  filters: {
    formatDate(value) {
      // value需要过滤的数据
      var date = new Date(value)
      var year = date.getFullYear()
      var month = date.getMonth() + 1
      var day = date.getDate()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var seconds = date.getSeconds()
      return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ' : ' + seconds
    }
  },
  data () {
    return {
        articleList: [],
        hotArticleList: [],
        tagList: []
    }
  },
  created() {
    this.fetchArticleList()
    this.fetchHotArticleList()
    this.fetchTagList()
  },
  methods: {
    fetchArticleList() {
      getHomePageArticleList().then(response => {
        this.articleList = response.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    fetchHotArticleList() {
      getHomePageHotArticleList().then(response => {
        this.hotArticleList = response.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    fetchTagList() {
      getHomePageTagList().then(response => {
        this.tagList = response.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    queryByTag(tagName) {
      let params={
        tag:tagName
      }
      console.log(params)
      getHomePageArticleList(params).then(response => {
        this.articleList = response.data.data
      }).catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style scoped>
    .articleBox {
      width:50%;
      margin: 0 auto;
      display: flex;
      padding:2px 0 0 0;
    }
    .article {
      width:77%;
      float: left;
    }
    .item {
      padding: 24px 2px;
      overflow: hidden;
      position: relative;
    }
    .item::after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      background-color: #f1f1f1;
      bottom: 0;
      left: 0;
      width: 150px;
    }
    .item .article-title {
      display: block;
    }
    .item .article-title h2 {
      font-weight: 400;
      font-size: 18px;
      color: black;
      display: inline-block;
      position: relative;
      margin:0px
    }
    .item .article-title h2::after {
      content: "";
      display: block;
      position: absolute;
      height: 1px;
      background-color: #555;
      bottom: 0;
      left: 0;
      width: 100%;
      transform-origin: center center;
      transform: scaleX(0);
      transition: 0.3s;
    }
    .item .article-title:hover h2::after {
      transform: scaleX(1);
    }
    .item .article-desc {
      line-height: 24px;
      /* text-indent: 24px; */
      color: #777;
    }
    .item .article-info {
      margin-top: 20px;
      color: #8c8c8c;
      font-size: 12px;
    }
    .item .article-info i {
      margin-left: 4px;
      font-style:normal;
      color:black;
    }
    .side {
      width:23%;
      float:left;
      color:#304455;
    }
    .side .hot {
      
    }
    .side .hot-title {
      font-size:16px;
    }
    .side .hot-info, .side .tag-info {
      width: 100%;
      box-sizing: border-box;
      padding-left: 8px;
    }
    .side .hot-info a, .side .tag-info a {
      text-decoration:none;
      color:#304455
    }
    .side .hot-info a:hover, .side .tag-info a:hover {
      text-decoration:underline;
    }
    .side .hot-info a h3, .side .tag-info a h3 {
      font-size:14px;
      font-weight: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
</style>
