<template>
	<button 
		class="fv-button" 
		@click="clickHandler" 
		:disabled="buttonDisabled || loading" 
		:type="nativeType"
		:class="[
			type ? 'fv-button--' + type : '',
			buttonSize ? 'fv-button--' + buttonSize : '',
			{
				'is-disabled' : buttonDisabled,
				'is-loading' : loading,
				'is-round' : round,
				'is-circle' : circle
			}
		]"
	>
	<i class="fv-icon-loading" v-if="loading"></i>
	<i :class="icon" v-if="icon && !loading"></i>
	<span v-if="$slots.default">
		<slot></slot>
	</span>
	</button>
</template>

<script>
export default {
	name: 'fv-button',
	props: {
		'type': {
			type: String,
			default: 'default',
			validator: (type) => {
				return ['default', 'primary', 'info', 'success', 'warning', 'danger', 'text'].indexOf(type) >= 0
			}
		},
		size: {
			type: String,
			default: 'medium',
			validator: (size) => {
				return ['medium', 'small', 'mini'].indexOf(size) >= 0
			}
		},
		icon: {
			type: String,
			default: ''
		},
		nativeType: {
			type: String,
			default: 'button',
			validator: (nativeType) => {
				return ['button', 'submit', 'reset'].indexOf(nativeType) >= 0
			}
		},
		loading: Boolean,
		disabled: Boolean,
		round: Boolean,
		circle: Boolean
	},
	computed: {
		buttonSize() {
			return this.size
		},
		buttonDisabled() {
			return this.disabled
		}
	},
	methods: {
		clickHandler(e) {
			if (this.buttonDisabled) {
				return false
			}
			this.$emit('click', e)
		}
	}
}
</script>
