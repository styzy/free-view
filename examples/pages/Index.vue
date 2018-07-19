<template lang="pug">
.index-page
	.title 网站快速构建工具
	.sub-title
		span.fv FreeView
		| 一套易用、高效、优雅，基于 Vue2.0 的桌面组件库
	.vue-logo
		img(src="../assets/img/vue_logo.png")
	.vue-tip
		| 基于 
		a.vue(href="https://github.com/vuejs/vue/tree/v2.0.0-rc.1" target="_blank") Vue 2.0
		|  版本开发，完美适配 
		a.vue(href="https://cn.vuejs.org/" target="_blank") Vue 2.x
		|  版本
	.vue-tip.EN 
		| Based on 
		a.vue(href="https://github.com/vuejs/vue/tree/v2.0.0-rc.1" target="_blank") Vue 2.0
		|  version, matching  
		a.vue(href="https://cn.vuejs.org/" target="_blank") Vue 2.x
		|  version perfectly.
	.start-ctn
		.guide-text 立刻体验?
		.btn-ctn
			fv-button(type="primary",@click="start") 点击开始
		.guide-tip 查看官方示例
</template>

<script>
export default {
	name: 'index-page',
	methods: {
		start() {
			this.$router.push({
				name: 'Component'
			})
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/base.styl'
.index-page
	max-width 1100px
	margin 80px auto 0
	.title
		padding 80px 0 60px
		font-size 34px
		font-weight 600
		color #666666
		text-align center
	.sub-title
		text-align center
		color #999999
		font-size 18px
		span.fv
			color color-base
			font-weight 600
			margin-right 10px
	.vue-logo
		width 150px
		margin 90px auto 30px
		img
			baseImg()
	.vue-tip
		text-align center
		line-height 30px
		font-size 16px
		color #999999
		a.vue
			color #42b983
			cursor pointer
			text-decoration none
			baseLink()
	.start-ctn
		margin-top 90px
		.guide-text
			line-height 30px
			text-align center
			font-size 18px
			font-weight 600
			color color-base
		.btn-ctn
			text-align center
			padding 20px 0
		.guide-tip
			line-height 30px
			text-align center
			font-size 14px
			font-weight 600
			color #999999
</style>
