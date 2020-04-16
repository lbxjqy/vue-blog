/*
 * @Author: your name
 * @Date: 2020-04-16 18:42:23
 * @LastEditTime: 2020-04-16 18:42:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/api/tag.js
 */
import request from '@/utils/request'

export function getHomePageTagList(params) {
    return request({
        url: '/api/tag/homePageList',
        method: 'get',
        params
    })
}
