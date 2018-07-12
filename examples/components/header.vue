<template lang="pug">
.header-ctn
	.wrap
		router-link(:to="{name:'Index'}")
			.logo
				.icon
				.text FreeView
		.right-menu
			router-link(:to="{name:'Guide'}")
				.item(:class="{'selected' : routeMetaModule == 'guide'}") 指南
			router-link(:to="{name:'Component'}")
				.item(:class="{'selected' : routeMetaModule == 'component'}") 组件
			router-link(:to="{name:'About'}")
				.item(:class="{'selected' : routeMetaModule == 'about'}") 关于我们
</template>

<script>
export default {
	name: 'vue-header',
	data() {
		return {
			moduleName: null,
			clientMode: null
		}
	},
	computed: {
		routeMetaModule() {
			let moduleName = null
			this.$route.matched.some((to) => {
				if (to.meta.hasOwnProperty('module')) {
					moduleName = to.meta.module
					return true
				} else {
					return false
				}
			})
			return moduleName
		}
	},
	methods: {
	},
	mounted() {
	}
}
</script>

<style lang="stylus" scoped>
@import '../assets/stylus/base.styl'
.header-ctn
	position fixed
	height 80px
	top 0
	left 0
	right 0
	border 1px solid #EEEEEE
	background-color rgba(255, 255, 255, 0.97)
	z-index 1000
	.wrap
		max-width 1100px
		margin auto
		height 100%
		.logo
			float left
			baseAcf()
			.icon
				float left
				height 50px
				width 50px
				margin 15px 10px 15px 0
				background url('../assets/img/freeView_logo.png') no-repeat center
				background-size 100%
			.text
				float left
				height 60px
				margin 10px 0
				line-height 60px
				color color-base
				font-size 32px
				font-weight 600
		.right-menu
			float right
			height 100%
			baseAcf()
			.item
				float left
				height 40px
				padding 20px 20px 17px
				line-height 40px
				color #666666
				cursor pointer
				&.selected
					color #333333
					border-bottom 3px solid color-base
@media screen and (max-width: 750px)
	.header-ctn
		.logo
			.text
				display none
</style>
