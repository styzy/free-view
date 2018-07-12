var utils = require('./utils')
var webpack = require('webpack')
var config = require('../config')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
var path = require('path');

// 原生的配置文件只考虑了 打包成web应用的开发和发布，他们是同一个目录
// 所以这里我要定义 不同的目录，就要先覆盖baseWebpackConfig里面的入口文件和输出目录
let entry = {
    app: './examples/main.js'
}

// add hot-reload related code to entry chunks
// 这里是热加载的配置
// 下面的代码作用完成之后把入口文件修改成了一个数组 app: [ './build/dev-client', './examples/main.js' ]
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    entry[name] = ['./build/dev-client'].concat(entry[name])
})

module.exports = merge(baseWebpackConfig, {
    // 原生的配置文件只考虑了 打包成web应用的开发和发布，他们是同一个目录
    // 所以这里我要定义 不同的目录，就要先覆盖baseWebpackConfig里面的入口文件和输出目录
    entry: entry,
    // 覆盖基础配置里面的输出，把输出的目录定义到 examples/dist目录下
    output: {
        // 原生的配置里面是引用的 build里面的 config.build.assetsRoot
        path: path.join(__dirname, '../examples/dist'),
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    module: {
        // cssSourceMap 的配置也需要更改为我们新增的配置
        rules: utils.styleLoaders({
            sourceMap: config.devExample.cssSourceMap
        })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            // 环境定义也需要修改为我们定义的配置
            'process.env': config.devExample.env
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            // 这里原生的默认配置都是 index.html 
            // 我尝试了一下，两个都更改为/examples/index.html的话，不能正常显示
            // 百度了一下：template是模版文件，指定到新的目录下的index.html 配置是没有错的
            // filename : 输出的文件，原生默认配置里面的没有看懂为什么可以，但是这里写一样的就不行
            // 可能必须写到上面output.path的输出目录中去才可以吧
            filename: path.join(__dirname, '../examples/dist/index.html'),
            template: path.join(__dirname, '../examples/index.html'),
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
})