import Vue from 'vue'
import Main from './main.vue'
import { PopupManager } from 'free-view/src/utils/popup/index.js'
import { isVNode } from 'free-view/src/utils/vdom'
let MessageConstructor = Vue.extend(Main)

// 实例
let instance;
// 实例数组
let instances = [];
// 自增id存储
let seed = 1;

const Message = (options) => {
    // 初始化选项
    options = options || {};

    // 判断传入参数，文本转为选项中的message参数
    if (typeof options === 'string') {
        options = {
            message: options
        }
    };

    // 存储用户关闭钩子函数
    let userOnClose = options.onClose;

    // 创建自增id
    let id = 'message_' + seed++;

    // 绑定关闭钩子函数
    options.onClose = () => {
        Message.close(id, userOnClose)
    };

    // 实例化并且传入data
    instance = new MessageConstructor({
        data: options
    });

    // 配置实例id
    instance.id = id;

    // vdom渲染
    if (isVNode(instance.message)) {
        instance.$slots.default = [instance.message];
        instance.message = null
    }

    // 配置vue实例到message实例
    instance.vm = instance.$mount();

    // 配置dom
    instance.dom = instance.vm.$el

    // 挂载到dom
    document.body.appendChild(instance.dom)

    // 控制显示
    instance.vm.visible = true

    // 设置message的zIndex
    instance.dom.style.zIndex = PopupManager.nextZIndex()

    // 放入栈内
    instances.push(instance)

    return instance.vm
}

// 定义Message子方法
['success', 'warning', 'info', 'error'].forEach(type => {
    Message[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        options.type = type;
        return Message(options);
    }
});

Message.close = (id, userOnClose) => {
    for (let i = 0; i < instances.length; i++) {
        if (id === instances[i].id) {
            if (typeof userOnClose === 'function') {
                userOnClose(instances[i])
            }
        }
        instances.splice(i, 1);
        break;
    }
}

Message.closeAll = () => {
    for (let i = instances.length - 1; i >= 0; i--) {
        instances[i].close()
    }
}

export default Message;