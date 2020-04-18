/*
 * @Author: your name
 * @Date: 2020-03-26 23:15:06
 * @LastEditTime: 2020-04-19 01:12:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import articleList from '@/components/articleList'
import about from '@/components/about'
import articleSee from '@/components/articleSee'
import articleSearch from '@/components/articleSearch'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'articleList',
      component: articleList
    },
    {
      path: '/article/:id',
      name: 'articleSee',
      component: articleSee
    },
    {
      path: '/article',
      name: 'articleSearch',
      component: articleSearch
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
