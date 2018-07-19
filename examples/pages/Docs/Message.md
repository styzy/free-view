<script>
export default {
	methods:{
		open(){
			this.$message('这是一条默认提示')
		},
		open1(){
			this.$message({
				message: '恭喜你，成功了',
				type: 'success'
			})
		},
		open2(){
			this.$message({
				message: '警告！要做遵纪违法的好少年哦',
				type: 'warning'
			})
		},
		open3(){
			this.$message.info('这是一条消息提示')
		},
		open4(){
			this.$message.error('这是一条错误提示')
		},
		openVNode(){
			const vNodeCreator = this.$createElement;
			this.$message({
				message: vNodeCreator('p', null, [
					vNodeCreator('span', null, '内容：'),
					vNodeCreator('i', { style: 'color: red;' }, 'VNode')
				])
			})
		},
		open5(){
			this.$message({
				showClose: true,
				message: '这是一条可关闭消息'
			})
		},
		open6(){
			this.$message({
				message: '这是一条文字居中消息',
				center: true
			})
		},
		openHTML(){
			this.$message({
				dangerouslyUseHTMLString: true,
				message: '<strong>这是 <i>HTML</i> 片段</strong>'
			})
		},
	}
}
</script>

## Message 消息提示
常用于主动操作后的反馈提示,更多用于系统级通知的被动提醒。

### 基础用法

从顶部出现，3 秒后自动消失。

FreeView 向 Vue 原型方法挂载了 `$message()` 方法，通过调用该方法并传递不同的参数，可生成不同的message消息框。

<demo-box>

<template slot="demo">
	<fv-button type="primary" @click="open">默认</fv-button>
	<fv-button type="success" @click="open1">成功</fv-button>
	<fv-button type="warning" @click="open2">警告</fv-button>
	<fv-button type="info" @click="open3">消息</fv-button>
	<fv-button type="danger" @click="open4">危险</fv-button>
</template>

当需要自定义更多属性时，Message 也可以接收一个对象为参数。比如，设置 `type` 字段可以定义不同的状态，默认为 `info` ，可供选择的消息状态类型包括 成功( `success` ) 、警告( `warning` )、消息( `info` )、错误( `error` ) 。此时正文内容以message的值传入。同时，我们也为 `Message` 的各种 type 注册了方法，可以在不传入 `type` 字段的情况下像 `open3` 、 `open4` 那样直接调用。

```html
<template>
  <fv-button type="prmary" @click="open">默认</fv-button>
  <fv-button type="success" @click="open1">成功</fv-button>
  <fv-button type="warning" @click="open2">警告</fv-button>
  <fv-button type="info" @click="open3">消息</fv-button>
  <fv-button type="danger" @click="open4">危险</fv-button>
<template>

<script>
export default {
  methods:{
    open(){
      this.$message('这是一条默认提示')
    },
    open1(){
      this.$message({
		message: '恭喜你，成功了',
        type: 'success'
	  })
    },
    open2(){
      this.$message({
		message: '警告！要做遵纪违法的好少年哦',
        type: 'warning'
	  })
    },
    open3(){
      this.$message.info('这是一条消息提示')
    },
    open4(){
      this.$message.error('这是一条错误提示')
    }
  }
}
</script>
```

</demo-box>

### 使用VNode

使用VNode作为消息体传入。

<demo-box>

<template slot="demo">
	<fv-button @click="openVNode">VNode</fv-button>
</template>

Message 可以也接收一个 VNode 作为参数，它会被显示为正文内容。

```html
<template>
  <fv-button @click="openVNode">VNode</fv-button>
</template>

<script>
export default {
  methods:{
    openVNode(){
      const vNodeCreator = this.$createElement;
      this.$message({
        message: vNodeCreator('p', null, [
          vNodeCreator('span', null, '内容：'),
          vNodeCreator('i', { style: 'color: red;' }, 'VNode')
        ])
      })
    }
  }
}
</script>
```
</demo-box>

### 可关闭

可以添加关闭按钮。

<demo-box>

<template slot="demo">
	<fv-button type="primary" @click="open5">可关闭消息</fv-button>
</template>

默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用 `showClose` 字段。此外，和 [Notification](/#/component/notification) 一样，Message 拥有可控的 `duration` ，设置 `0` 为不会被自动关闭，默认为 3000 毫秒。

```html
<template>
  <fv-button type="primary" @click="open5">可关闭消息</fv-button>
</template>

<script>
export default {
  methods:{
    open5(){
      this.$message({
        showClose: true,
        message: '这是一条可关闭消息',
      })
    },
  }
}
</script>
```
</demo-box>

### 文字居中
使用 `center` 属性让文字水平居中。

<demo-box>

<template slot="demo">
	<fv-button type="primary" @click="open6">文字居中</fv-button>
</template>

```html
<template>
  <fv-button type="primary" @click="open6">文字居中</fv-button>
</template>

<script>
export default {
  methods:{
    open6(){
      this.$message({
        message: '这是一条文字居中消息',
        center: true
      })
    },
  }
}
</script>
```
</demo-box>

### 使用html片段
 `message` 属性支持传入 HTML 片段

<demo-box>

<template slot="demo">
	<fv-button type="primary" @click="openHTML">使用html片段</fv-button>
</template>

将 `dangerouslyUseHTMLString` 属性设置为 `true`，`message` 就会被当作 HTML 片段处理。

```html
<template>
  <fv-button type="primary" @click="openHTML">使用html片段</fv-button>
</template>

<script>
export default {
  methods:{
    openHTML(){
      this.$message({
        dangerouslyUseHTMLString: true,
        message: '<strong>这是 <i>HTML</i> 片段</strong>'
      })
    },
  }
}
</script>
```
</demo-box>

<warning>

`message` 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此在 `dangerouslyUseHTMLString` 打开的情况下，请确保 `message` 的内容是可信的，永远不要将用户提交的内容赋值给 `message` 属性。

</warning>

### 全局方法

FreeView 为 Vue.prototype 添加了全局方法 $message。因此在 vue instance 中可以采用本页面中的方式调用 Message。

### 单独引用

```javascript
import { Message } from 'free-view';
```

此时调用方法为 `Message(options)`。我们也为每个 type 定义了各自的方法，如 `Message.success(options)`。并且可以调用 `Message.closeAll()` 手动关闭所有实例。

### Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| ---- | ---- | ---- | ---- | ---- |
| message | 消息文字 | String / VNode | - | - |
| type | 消息类型（主题） | String | default/success/warning/info/error | default |
| iconClass | 自定义图标的类名 | String | - | - |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | Boolean | - | false |
| customClass | 自定义类名 | String | - | - |
| duration | 显示时间, 毫秒。设为 0 则不会自动关闭 | Number | - | 3000 |
| showClose | 是否显示关闭按钮 | Boolean | - | false |
| center | 文字是否居中 | Boolean | - | false |
| onClose | 关闭时的回调函数, 参数为被关闭的 message 实例 | Function | - | - |