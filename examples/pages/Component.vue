<template lang="pug">
.component-page
	.menu-ctn
		.wrap
			.title 开发指南
			template(v-for="item in linkMap.guide")
				router-link(:to="{name:item.routerName}")
					.link(:class="{'selected' : routerDoc == item.doc}") {{item.text}}
			.title 组件
			.type Basic
			template(v-for="item in linkMap.component.basic")
				router-link(:to="{name:item.routerName}")
					.link(:class="{'selected' : routerDoc == item.doc}") {{item.text}}
			.type Notice
			template(v-for="item in linkMap.component.notice")
				router-link(:to="{name:item.routerName}")
					.link(:class="{'selected' : routerDoc == item.doc}") {{item.text}}
	.view-ctn
		.markdown-body.styzy-markdown-body
			router-view
</template>

<script>
export default {
	name: 'component-page',
	data() {
		return {
			linkMap: {
				guide: [{
					text: '安装',
					routerName: 'Component-Installation',
					doc: 'installation'
				}, {
					text: '快速上手',
					routerName: 'Component-Quickstart',
					doc: 'quickstart'
				}],
				component: {
					basic: [{
						text: 'Button 按钮',
						routerName: 'Component-Button',
						doc: 'button'
					},],
					notice: [{
						text: 'Message 消息提示',
						routerName: 'Component-Message',
						doc: 'message'
					},]
				}
			}
		}
	},
	computed: {
		routerDoc() {
			let doc = null
			this.$route.matched.some((to) => {
				if (to.meta.hasOwnProperty('doc')) {
					doc = to.meta.doc
					return true
				} else {
					return false
				}
			})
			return doc
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/base.styl'
.component-page
	height 100%
	max-width 1100px
	margin 80px auto 0
	.menu-ctn
		position fixed
		width 200px
		top 80px
		height calc(100vh - 80px)
		overflow-y auto
		box-sizing border-box
		border-right 1px solid color-border
		baseScroll()
		.wrap
			margin-top 50px
			.title
				padding 20px 0 10px
				font-size 16px
				font-weight 600
				line-height 1.2
				color #333333
			.link
				padding 10px 0
				font-size 14px
				line-height 1.2
				color #333333
				cursor pointer
				transition 0.3s
				&:hover, &.selected
					color color-base
			.type
				padding 20px 0 10px
				font-size 12px
				line-height 1.2
				color #999999
	.view-ctn
		position relative
		margin-left 200px
		.markdown-body
			box-sizing border-box
			min-width 200px
			max-width 900px
			margin 0 auto
			padding 0 45px 45px
</style>
