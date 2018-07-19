// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to: 
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8888,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },
    devExample: {
        env: require('./dev.examples.env'),
        port: 3888,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        proxyTable: {},
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    },
    buildExamples: {
        env: require('./prod.examples.env'),
        index: path.resolve(__dirname, '../examples/dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../examples/dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: './',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to: 
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    buildProdLib: {
        env: require('./prod.lib.env.js'),
        assetsRoot: path.resolve(__dirname, '../lib'),
        assetsPublicPath: '/lib/',
        filename: 'index.js',
        library: 'freeViewLib',
        bundleAnalyzerReport: process.env.npm_config_report
    },
    buildStyl: {
        // 要打包的源文件
        source: path.resolve(__dirname, '../src/styl/index.styl'),
        // 字体文件目录
        sourceFonts: path.resolve(__dirname, '../src/styl/fonts/*.*'),
        // 输出目录
        output: path.resolve(__dirname, '../lib/css/'),
        outputFonts: path.resolve(__dirname, '../lib/css/fonts'),
        // 输出文件名称
        filename: 'index.css'
    }
}