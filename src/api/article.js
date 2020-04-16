/*
 * @Author: your name
 * @Date: 2020-04-16 18:34:08
 * @LastEditTime: 2020-04-16 18:42:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/api/article.js
 */
import request from '@/utils/request'

export function getHomePageArticleList(params) {
    return request({
        url: '/api/article/homePageList',
        method: 'get',
        params
    })
}

export function getHomePageHotArticleList(params) {
    return request({
        url: '/api/article/homePageHotList',
        method: 'get',
        params
    })
}