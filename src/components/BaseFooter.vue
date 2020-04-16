<!--
 * @Author: your name
 * @Date: 2020-03-28 23:42:42
 * @LastEditTime: 2020-04-01 03:35:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /api/Users/linboxuan/vscodeProjects/vue-blog/src/components/BaseFooter.vue
 -->
<template>
    <div>
        <footer class="layoutFooter">
			© 2020 - Lin的博客
			 - Powered by Vue & Koa
		</footer>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped>
    .layoutFooter{
		height: 50px;
		background: rgba(255, 255, 255, 1);
		border-top: 1px solid #f1f1f1;
		text-align: center;
		line-height: 50px;
		font-size: 12px;
		color: #666;
		width: 100%;
        position: fixed;
		bottom: 0;
	}
</style>