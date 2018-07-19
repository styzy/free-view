<template lang="pug">
	.warning-box
		slot
</template>

<script>
export default {
	name: 'warning'
}
</script>

<style lang="stylus">
.warning-box
	margin 20px 0
	padding 15px 18px
	border-left 4px solid #fe6c6f
	border-radius 4px
	background-color #fff6f7
	overflow hidden
	p
		margin 0
</style>

