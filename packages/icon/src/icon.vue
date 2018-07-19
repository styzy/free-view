<template>
	<i :class="'fv-icon-' + name"></i>
</template>

<script>
export default {
	name: 'fv-icon',
	props: {
		'name': {
			type: String
		}
	}
}
</script>

