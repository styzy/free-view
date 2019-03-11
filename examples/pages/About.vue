<template lang="pug">
.about-page
	vue-md-ctn
		md-about
</template>

<script>
export default {
	name: 'about-page',
	components: {
		'vue-md-ctn': () => import('../components/markdown-ctn.vue'),
		'md-about': () => import('../pages/Docs/About.md')
	}
}
</script>

<style lang="stylus" scoped>
</style>
