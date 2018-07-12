<template>
	<transition name="fv-message-fade">
		<div v-show="visible" :class="['fv-message','fv-message--'+ type,{'is-center' : center},{'is-closeable' : showClose},{'is-fullScreen':fullScreen}]" @mouseenter="clearTimer" @mouseleave="startTimer">
			<i :class="iconClass" v-if="iconClass"></i>
			<i :class="typeClass" v-else></i>
			<div class="fv-message__content">
				{{message}}
			</div>
			<i v-if="showClose" class="fv-message__closeBtn fv-icon-close" @click="close"></i>
		</div>
	</transition>
</template>

<script>
export default {
	data() {
		return {
			visible: false,
			message: '',
			duration: 3000,
			type: 'info',
			fullScreen: false,
			iconClass: '',
			onClose: null,
			showClose: false,
			closed: false,
			timer: null,
			center: false
		}
	},
	computed: {
		typeClass() {
			return 'fv-icon-' + this.type
		}
	},
	watch: {
		// 监听动画状态进行删除
		closed(newVal) {
			if (newVal) {
				this.visible = false;
				this.$el.addEventListener('transitionend', this.destroyElement);
				console.log(this.$el);
			}
		},
	},
	methods: {
		// 删除
		destroyElement() {
			console.log(1);
			this.$el.removeEventListener('transitionend', this.destroyElement);
			this.$destroy(true);
			this.$el.parentNode.removeChild(this.$el);
		},
		// 关闭
		close() {
			this.closed = true;
			if (typeof this.onClose === 'function') {
				this.onClose(this);
			}
		},
		// 移除计时器
		clearTimer() {
			window.clearTimeout(this.timer)
		},
		// 开始计时器
		startTimer() {
			if (this.duration > 0) {
				this.timer = window.setTimeout(() => {
					if (!this.closed) {
						this.close()
					}
				}, this.duration)
			}
		}
	},
	mounted() {
		this.startTimer();
	}
}
</script>

