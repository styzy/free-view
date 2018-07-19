import Button from '../packages/button/index.js'
import ButtonGroup from '../packages/button-group/index.js'
import Dialog from '../packages/dialog/index.js'
import Icon from '../packages/icon/index.js'
import Message from '../packages/message/index.js'

const components = {
    Button,
    ButtonGroup,
    Dialog,
    Icon,
}

const install = function(Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })

    Vue.prototype.$message = Message
}

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}


export default Object.assign(components, {
    install
})