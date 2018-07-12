<template lang="pug">
	.app
		vue-header
		.main
			router-view
</template>
<script>
export default {
	name: 'App',
	components: {
		'vue-header': () => import('./components/header.vue')
	},
}
</script>
<style lang="stylus">
@import './assets/stylus/base.styl'
.app
	.main
		margin-top 80px
		min-height calc(100vh - 80px)
</style>
