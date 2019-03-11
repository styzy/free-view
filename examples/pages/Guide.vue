<template lang="pug">
.guide-page
	vue-md-ctn
		md-guide
</template>

<script>
export default {
	name: 'guide-page',
	components: {
		'vue-md-ctn': () => import('../components/markdown-ctn.vue'),
		'md-guide': () => import('../pages/Docs/Guide.md')
	}
}
</script>

<style lang="stylus" scoped>
</style>
