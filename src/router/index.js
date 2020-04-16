/*
 * @Author: your name
 * @Date: 2020-03-26 23:15:06
 * @LastEditTime: 2020-04-02 02:32:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/router/index.js
 */
import Vue from 'vue'
import Router from 'vue-router'
import articleList from '@/components/articleList'
import about from '@/components/about'

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
      path: '/about',
      name: 'about',
      component: about
    }
  ]
})
