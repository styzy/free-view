### FreeView

基于Vue2.0开发的前端组件库

## 安装

```shell
npm i free-view -S
```

## 使用

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

更多细节以及示例文档请访问[FreeView官方网站](http://freeview.styzy.cn)