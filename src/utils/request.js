/*
 * @Author: your name
 * @Date: 2020-04-16 18:31:45
 * @LastEditTime: 2020-04-22 23:01:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/utils/request.js
 */
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://39.97.208.148:3000/',
    timeout: 5000
})

export default service