<template lang="pug">
.demo-box
	.box-demo
		slot(name="demo")
	.box-switch.show(v-if="!isShow",@click="showHandler") 查看代码
	.box-code(v-show="isShow")
		slot
	.box-switch.hide(v-if="isShow",@click="showHandler") 隐藏代码
</template>

<script>
export default {
	name: 'demo-box',
	data() {
		return {
			isShow: false
		}
	},
	methods: {
		showHandler() {
			this.isShow = !this.isShow
		}
	}
}
</script>

<style lang="stylus">
$-color-border = #EEEEEE
$-color-shadow = #EEEEEE
.demo-box
	border-radius 4px
	transition 0.2s
	border 1px solid $-color-border
	&:hover
		box-shadow 0 0 5px 0 $-color-shadow
	.box-demo
		padding 25px
		transition 0.2s
		&:hover
			box-shadow 0 0 5px $-color-shadow
		.row
			margin-bottom 25px
			&:last-child
				margin-bottom 0
	.box-switch
		padding 10px 20px
		color #999999
		background-color #FCFCFC
		font-size 14px
		text-align center
		border-top 1px solid $-color-border
		cursor pointer
		transition 0.2s
		&:hover
			color #30a8ff
			background-color #FCFCFC
	.box-code
		padding 10px 10px 0
		border-top 1px solid $-color-border
		background-color #f6f8fa
		overflow hidden
		transition 0.2s
		pre
			border none
		p
			padding 20px
			border 1px solid $-color-border
			border-radius 4px
			background-color #FFFFFF
</style>
