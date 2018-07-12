<template lang="pug">
.guide-page
	vue-header
	h1 指南	
</template>

<script>
export default {
	name: 'guide-page',
	components: {
		'vue-header': () => import('../components/header.vue')
	}
}
</script>

<style lang="stylus" scoped>
</style>
