import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Index',
        component: resolve => require(['../pages/Index.vue'], resolve),
        meta: {
            module: 'main'
        },
    }, {
        path: '/guide',
        name: 'Guide',
        component: resolve => require(['../pages/Guide.vue'], resolve),
        meta: {
            module: 'guide'
        },
    }, {
        path: '/about',
        name: 'About',
        component: resolve => require(['../pages/About.vue'], resolve),
        meta: {
            module: 'about'
        },
    }, {
        path: '/component',
        name: 'Component',
        component: resolve => require(['../pages/Component.vue'], resolve),
        meta: {
            module: 'component'
        },
		redirect: {name:'Component-Installation'},
        children: [{
            path: 'installation',
            name: 'Component-Installation',
            meta: {
                doc: 'installation'
            },
            component: resolve => require(['../pages/Docs/Installation.md'], resolve),
        }, {
            path: 'quickstart',
            name: 'Component-Quickstart',
            meta: {
                doc: 'quickstart'
            },
            component: resolve => require(['../pages/Docs/Quickstart.md'], resolve),
        }, {
            path: 'button',
            name: 'Component-Button',
            meta: {
                doc: 'button'
            },
            component: resolve => require(['../pages/Docs/Button.md'], resolve),
        }, {
            path: 'message',
            name: 'Component-Message',
            meta: {
                doc: 'message'
            },
            component: resolve => require(['../pages/Docs/Message.md'], resolve),
        }]
    }]
})