<!--
 * @Author: your name
 * @Date: 2020-03-27 00:22:09
 * @LastEditTime: 2020-04-19 03:56:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/components/header.vue
 -->
<template>
  <header class="header-wrap">
    <section class="header-inner">

      <div class="logo">
        <div class="logo-box" @click="toLink('/')">
          <img src="../assets/logo.png" alt="logo">
        </div>
      </div>

      <div class="nav">
        <ul class="nav-box">
          <li v-for="(item, index) in nav"
              @click="toLink(item.route, index)"
              :class="index === navIndex ? 'nav-item nav-item-active' : 'nav-item'"
              :key="item.id">
            {{item.name}}
          </li>
        </ul>
      </div>

      <div class="searchBox">
				<div class="search">
            <div class="text">
						  <input type="text"
							  v-model="searchStr"
							  placeholder="你心所想...">
  					</div>
				</div>
			</div>
      <!-- <router-link :to="{path:'/article',params:{title: searchStr}}"> -->
      <i class="el-icon-search searchFont" @click="queryByArticle"></i>
      <!-- </router-link> -->

    </section>
  </header>
  
</template>
<script>
import { getHomePageArticleList } from '@/api/article'

export default {
  
  data() {
      return {
        searchStr: '',
        navIndex: 0,
        nav: [
          {
            name: '文章',
            route: '/'
          },
          {
            name: '关于',
            route: '/about'
          }
        ]
      }
  },
  methods: {
    toLink(route, index) {
      if(this.$route.path == route) return;//如果当前路由和跳转路由相同，return
      this.navIndex = index;//当前菜单选中下标修改，从而改变选中菜单颜色
      this.$router.replace(route);//跳转路由
    },
    queryByArticle() {
      let params = {
        title: this.searchStr
      }
      getHomePageArticleList(params).then(response => {
        this.$router.push({
          path:'/article',
          query:{
            title:this.searchStr
          }
        })
			  // this.searchStr = ''
      })
    }
  }
}
</script>

<style scoped>
  .header-wrap {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    box-shadow: 0 1px 2px rgba(0, 0, 0, .03);
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
  }

  .header-inner {
    margin: 0 auto;
    width: 50%;
    display: flex;
    align-items: center;
  }

  .logo {
  }

  .logo-box {
    width: 100px;
    display: flex;
    align-items: center;
  }

  img{
    width: 50%;
    height: 50%;
  }

  .nav {
    flex: 1;
  }

  .nav-box {
    display: flex;
    align-items: stretch;
    padding: 0px;
  }

  .nav-item {
    cursor: pointer;
    color: #17233d;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 0 32px;
    white-space: nowrap;
    list-style-type:none;
    color:#8c8c8c;
  }

  .nav-item-active {
    color: #3fb76c;
  }

  .nav-box li:hover {
		color: #3fb76c
	}

  .searchBox{
		display: flex;
		align-items: center;
	}
	.search{
		height: 30px;
		border-bottom: 1px solid #dddddd;
		display: flex;
		overflow: hidden;
		padding-left: 5px;

	}
	.search input{
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		background: transparent;
	}
	.search .text{
		width: 158px;
		transform-origin: right center;
		transition: 0.3s;
	}
  .searchFont{
    font-style:normal;
    font-size:18px;
    color:#8c8c8c;
    cursor: pointer;
  }
  .searchFont:hover{
    color:#3fb76c;
  }

</style>
