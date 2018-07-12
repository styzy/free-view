## Button 按钮

常用的操作按钮。

### 默认按钮

使用 `type` 属性来定义 Button 的样式。

<demo-box>

<template slot="demo">
	<div class="row">
		<fv-button>默认按钮</fv-button>
		<fv-button type="primary">主要按钮</fv-button>
		<fv-button type="success">成功按钮</fv-button>
		<fv-button type="info">信息按钮</fv-button>
		<fv-button type="warning">警告按钮</fv-button>
		<fv-button type="danger">危险按钮</fv-button>
	</div>
	<div class="row">
		<fv-button size="small">默认按钮</fv-button>
		<fv-button type="primary" size="small">主要按钮</fv-button>
		<fv-button type="success" size="small">成功按钮</fv-button>
		<fv-button type="info" size="small">信息按钮</fv-button>
		<fv-button type="warning" size="small">警告按钮</fv-button>
		<fv-button type="danger" size="small">危险按钮</fv-button>
	</div>
</template>

```html
<fv-button>默认按钮</fv-button>
<fv-button type="primary">主要按钮</fv-button>
<fv-button type="success">成功按钮</fv-button>
<fv-button type="info">信息按钮</fv-button>
<fv-button type="warning">警告按钮</fv-button>
<fv-button type="danger">危险按钮</fv-button>

<fv-button size="small">默认按钮</fv-button>
<fv-button type="primary" size="small">主要按钮</fv-button>
<fv-button type="success" size="small">成功按钮</fv-button>
<fv-button type="info" size="small">信息按钮</fv-button>
<fv-button type="warning" size="small">警告按钮</fv-button>
<fv-button type="danger" size="small">危险按钮</fv-button>
```

</demo-box>

### 圆角按钮

使用 `round` 属性来定义 Button 的样式。

<demo-box>

<template slot="demo">
	<div class="row">
		<fv-button round>圆角按钮</fv-button>
		<fv-button type="primary" round>主要按钮</fv-button>
		<fv-button type="success" round>成功按钮</fv-button>
		<fv-button type="info" round>信息按钮</fv-button>
		<fv-button type="warning" round>警告按钮</fv-button>
		<fv-button type="danger" round>危险按钮</fv-button>
	</div>
	<div class="row">
		<fv-button size="small" round>圆角按钮</fv-button>
		<fv-button type="primary" size="small" round>主要按钮</fv-button>
		<fv-button type="success" size="small" round>成功按钮</fv-button>
		<fv-button type="info" size="small" round>信息按钮</fv-button>
		<fv-button type="warning" size="small" round>警告按钮</fv-button>
		<fv-button type="danger" size="small" round>危险按钮</fv-button>
	</div>
</template>

```html
<fv-button round>圆角按钮</fv-button>
<fv-button type="primary" round>主要按钮</fv-button>
<fv-button type="success" round>成功按钮</fv-button>
<fv-button type="info" round>信息按钮</fv-button>
<fv-button type="warning" round>警告按钮</fv-button>
<fv-button type="danger" round>危险按钮</fv-button>

<fv-button size="small" round>圆角按钮</fv-button>
<fv-button type="primary" size="small" round>主要按钮</fv-button>
<fv-button type="success" size="small" round>成功按钮</fv-button>
<fv-button type="info" size="small" round>信息按钮</fv-button>
<fv-button type="warning" size="small" round>警告按钮</fv-button>
<fv-button type="danger" size="small" round>危险按钮</fv-button>
```

</demo-box>

### 圆形按钮

使用 `circle` 属性来定义 Button 的样式。

<demo-box>

<template slot="demo">
	<div class="row">
		<fv-button icon="fv-icon-search" circle></fv-button>
		<fv-button type="primary" icon="fv-icon-refresh" circle></fv-button>
		<fv-button type="success" icon="fv-icon-share" circle></fv-button>
		<fv-button type="info" icon="fv-icon-upload" circle></fv-button>
		<fv-button type="warning" icon="fv-icon-edit" circle></fv-button>
		<fv-button type="danger" icon="fv-icon-delete" circle></fv-button>
	</div>
	<div class="row">
		<fv-button size="small" icon="fv-icon-search" circle></fv-button>
		<fv-button type="primary" size="small" icon="fv-icon-refresh" circle></fv-button>
		<fv-button type="success" size="small" icon="fv-icon-share" circle></fv-button>
		<fv-button type="info" size="small" icon="fv-icon-upload" circle></fv-button>
		<fv-button type="warning" size="small" icon="fv-icon-edit" circle></fv-button>
		<fv-button type="danger" size="small" icon="fv-icon-delete" circle></fv-button>
	</div>
</div>

</template>

```html
<fv-button icon="fv-icon-search" circle></fv-button>
<fv-button type="primary" icon="fv-icon-refresh" circle></fv-button>
<fv-button type="success" icon="fv-icon-share" circle></fv-button>
<fv-button type="info" icon="fv-icon-upload" circle></fv-button>
<fv-button type="warning" icon="fv-icon-edit" circle></fv-button>
<fv-button type="danger" icon="fv-icon-delete" circle></fv-button>

<fv-button size="small" icon="fv-icon-search" circle></fv-button>
<fv-button type="primary" size="small" icon="fv-icon-refresh" circle></fv-button>
<fv-button type="success" size="small" icon="fv-icon-share" circle></fv-button>
<fv-button type="info" size="small" icon="fv-icon-upload" circle></fv-button>
<fv-button type="warning" size="small" icon="fv-icon-edit" circle></fv-button>
<fv-button type="danger" size="small" icon="fv-icon-delete" circle></fv-button>
```

</demo-box>

### 禁用状态

按钮不可用状态。

<demo-box>

<template slot="demo">
	<div class="row">
		<fv-button disabled>默认按钮</fv-button>
		<fv-button type="primary" disabled>主要按钮</fv-button>
		<fv-button type="success" disabled>成功按钮</fv-button>
		<fv-button type="info" disabled>信息按钮</fv-button>
		<fv-button type="warning" disabled>警告按钮</fv-button>
		<fv-button type="danger" disabled>危险按钮</fv-button>
	</div>
	<div class="row">
		<fv-button round disabled>默认按钮</fv-button>
		<fv-button type="primary" round disabled>主要按钮</fv-button>
		<fv-button type="success" round disabled>成功按钮</fv-button>
		<fv-button type="info" round disabled>信息按钮</fv-button>
		<fv-button type="warning" round disabled>警告按钮</fv-button>
		<fv-button type="danger" round disabled>危险按钮</fv-button>
	</div>
</div>

</template>

你可以使用 `disabled` 属性来定义按钮是否可用，它接受一个 `Boolean` 值。

```html
<fv-button disabled>默认按钮</fv-button>
<fv-button type="primary" disabled>主要按钮</fv-button>
<fv-button type="success" disabled>成功按钮</fv-button>
<fv-button type="info" disabled>信息按钮</fv-button>
<fv-button type="warning" disabled>警告按钮</fv-button>
<fv-button type="danger" disabled>危险按钮</fv-button>

<fv-button round disabled>默认按钮</fv-button>
<fv-button type="primary" round disabled>主要按钮</fv-button>
<fv-button type="success" round disabled>成功按钮</fv-button>
<fv-button type="info" round disabled>信息按钮</fv-button>
<fv-button type="warning" round disabled>警告按钮</fv-button>
<fv-button type="danger" round disabled>危险按钮</fv-button>
```

</demo-box>

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

<demo-box>

<template slot="demo">
	<fv-button type="primary" icon="fv-icon-edit"></fv-button>
	<fv-button type="primary" icon="fv-icon-share"></fv-button>
	<fv-button type="primary" icon="fv-icon-delete"></fv-button>
	<fv-button type="primary" icon="fv-icon-search">搜索</fv-button>
	<fv-button type="primary">上传<i class="fv-icon-upload"></i></fv-button>
</template>

设置 `icon` 属性即可，icon 的列表可以参考 FreeView 的 [icon 组件](/#/component/icon)，也可以设置在文字右边的 icon ，只要使用 `i` 标签即可，可以使用自定义图标。

```html
<fv-button type="primary" icon="fv-icon-edit"></fv-button>
<fv-button type="primary" icon="fv-icon-share"></fv-button>
<fv-button type="primary" icon="fv-icon-delete"></fv-button>
<fv-button type="primary" icon="fv-icon-search">搜索</fv-button>
<fv-button type="primary">上传<i class="fv-icon-upload"></i></fv-button>
```

</demo-box>