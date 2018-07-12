<template lang="pug">
.about-page
	h1 关于
	vue-header
</template>

<script>
export default {
	name: 'about-page',
	components: {
		'vue-header': () => import('../components/header.vue')
	}
}
</script>

<style lang="stylus" scoped>
</style>
