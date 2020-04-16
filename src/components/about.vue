<!--
 * @Author: your name
 * @Date: 2020-04-02 01:50:03
 * @LastEditTime: 2020-04-02 15:03:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/components/about.vue
 -->
<template>
    <div class="aboutBox">
        <div class="info">
            <div>
                <i class="el-icon-user"></i>
                <p>我是Lin, 一个热爱技术的码农</p>
            </div>
            <div>
                <i class="el-icon-map-location"></i>
                <p>北京</p>
            </div>
            <div>
                <i class="el-icon-collection-tag"></i>
                <p>Node.js、mongodb、redis、mysql</p>
            </div>
            <div>
                <i class="el-icon-school"></i>
                <p>华北电力大学</p>
            </div>
            <div>
                <i class="el-icon-sunny"></i>
                <p>coding之外的事:滑雪、公路车、登山、篮球、汽车、美食</p>
            </div>
            <div>
                <i class="el-icon-link"></i>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-github"></use>
                </svg>
            </div>
            <p>如果你遇到任何项目中的问题，亦或同样热爱滑雪并且也在北京，请扫描右侧二维码添加我的微信，这里有一群同爱热爱的小伙伴等待你的加入，我收到消息会第一时间答复。让我们一起进步。</p>
        </div>
        <div class="user-wx">
            <img src="../assets/WechatIMG68.jpeg">
        </div>
    </div>
</template>

<script>
export default{
}
</script>
<script src="../assets/iconfont.js"></script>

<style scoped>
    .aboutBox {
        width:50%;
        margin: 20px auto;
        display: flex;
    }
    .info {
        width:76%;
        border: 1px solid #f1f1f1;
    }
    .info div {
        padding: 10px 0;
    }
    .info div i {
        font-size: 20px;
        padding: 0 10px 0 0;
    }
    .info p {
        color: #555;
    }
    .info div p {
        display: inline;
    }
    .user-wx {
        width: 22%;
    }
    .user-wx img{
        width:100%;
    }
    .icon {
      width: 1.3em;
      height: 1.3em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
</style>