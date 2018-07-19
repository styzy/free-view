## 安装

### npm 安装

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i free-view -S
```

### CDN

目前可以通过 [unpkg.com/free-view](https://unpkg.com/free-view/) 的方式获取最新版本的资源，在页面上引入 js 和 css 文件即可开始使用。

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/free-view/lib/css/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/free-view/lib/index.js"></script>
```

我们建议使用 CDN 引入 FreeView 的用户在链接地址上锁定版本，以免将来 FreeView 升级时受到非兼容性更新的影响。锁定版本的方法请查看 [unpkg.com](https://unpkg.com/#/)。

<br>

如果是通过 npm 安装，并希望配合 webpack 使用，请阅读下一节：[快速上手](/#/component/quickStart)。