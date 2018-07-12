## 快速上手

本节将介绍如何在项目中使用 FreeView。

### 引入 FreeView

你可以引入整个 FreeView，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 FreeView。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import App from './App.vue';
import FreeView from 'free-view';
import 'free-view/lib/css/index.css';

Vue.use(FreeView);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 FreeView 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

借助 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component

```shell
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "free-view",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

接下来，如果你只希望引入部分组件，比如 Button，那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import App from './App.vue';
import { Button } from 'free-view';

Vue.component(Button.name, Button);

/* 或写为
 * Vue.use(Button)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```

完整组件列表和引入方式

```javascript
import Vue from 'vue';
import {
  Button
  Dialog,
  Message,
} from 'free-view';

Vue.use(Button);
Vue.use(Dialog);

Vue.prototype.$message = Message;
```

### 开始使用

至此，一个基于 Vue 和 FreeView 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。