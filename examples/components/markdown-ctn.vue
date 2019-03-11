<template lang="pug">
.markdown-body.styzy-markdown-body
	slot
</template>

<script>
export default {
	name: 'vue-markdown-ctn'
}
</script>

<style lang="stylus" scoped>
.markdown-body
	box-sizing border-box
	min-width 200px
	max-width 900px
	margin 0 auto
	padding 0 45px 150px
</style>
