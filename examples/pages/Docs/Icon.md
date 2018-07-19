<style>
	.box-demo>i {
		margin: 0 15px;
		font-size: 24px;
		color: #666666;
		vertical-align: middle;
	}
	.icon-list {
		border-radius: 4px;
		overflow: hidden;
		border: 1px solid #EEEEEE;
	}
	.icon-list:hover {
		transition: 0.2s;
		box-shadow: 0 0 5px 0 #EEEEEE;
	}
	.icon-list .item {
		float: left;
		width: 20%;
		box-sizing: content-box;
		text-align: center;
		border-right: 1px solid #EEEEEE;
		border-bottom: 1px solid #EEEEEE;
		margin-right: -1px;
		margin-bottom: -1px;
		transition: 0.2s;
	}
	.icon-list .item i {
		display: block;
		margin: 35px 0 20px;
		font-size: 40px;
		color: #666666;
		transition: 0.2s;
	}
	.icon-list .item .name {
		font-size: 14px;
		line-height: 20px;
	}
	.icon-list .item .copy {
		display: inline-block;
    	visibility: hidden;
		margin: auto;
		text-align: center;
		font-size: 14px;
		line-height: 40px;
		color: #FFFFFF;
		cursor: pointer;
		transition: 0.2s;
	}
	.icon-list:after{
		display: block;
		content: '';
		clear: both;
	}
	.icon-list .item:hover {
		background-color: #1890e7;
		border-color: #1890e7;
		color: #FFFFFF;
	}
	.icon-list .item:hover i {
		color: #FFFFFF;
	}
	.icon-list .item:hover .copy {
      visibility: visible;
	}
	.icon-list .item .copy:hover {
		color: #EEEEEE;
	}
</style>
<script>
export default {
	data() {
		return {
			iconList: [
				'info',
				'success',
				'warning',
				'error',
				'upload',
				'close',
				'search',
				'refresh',
				'next',
				'back',
				'delete',
				'edit',
				'share',
				'loading'
			],
			copyData:null,
		}
	},
	methods:{
		copySuccess(index){
			this.copyData = index 
		},
		copyError(){
			this.$message.error({
				message:'复制失败，您的浏览器不支持该功能，请使用Chrome。'
			})
		}
	}
}
</script>

## Icon 图标

FreeView内置了一整套常用的图标，方便开发使用，也可以配合自定义图标一起使用。

### 使用方法

直接通过设置类名为 `fv-icon-iconName` 来使用即可。例如：

<demo-box>

<template slot="demo">
	<i class="fv-icon-search"></i>
	<i class="fv-icon-refresh"></i>
	<fv-button type="primary" icon="fv-icon-upload">上传</fv-button>
</template>

```html
<i class="fv-icon-search"></i>
<i class="fv-icon-refresh"></i>
<fv-button icon="fv-icon-upload">上传</fv-button>
```

</demo-box>

### 图标合集

<div class="icon-list">
	<div class="item" v-for="(name,index) in iconList" :key="index">
		<i :class="'fv-icon-' + name"></i>
		<div class="name">{{'fv-icon-' + name}}</div>
		<div v-if="copyData != index" class="copy" v-clipboard="'fv-icon-' + name" @success="copySuccess(index)" @error="copyError">复制</div>
		<div v-else class="copy already">已复制</div>
	</div>
</div>