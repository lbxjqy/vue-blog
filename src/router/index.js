/*
 * @Author: your name
 * @Date: 2020-03-26 23:15:06
 * @LastEditTime: 2020-04-18 02:57:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import articleList from '@/components/articleList'
import about from '@/components/about'
import articleSee from '@/components/articleSee'

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
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
