//开发环境配置
const { merge } = require('webpack-merge')
console.log(merge)
const common = require('./webpack.common.js')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        port: 8080,
        open: true
    }
})