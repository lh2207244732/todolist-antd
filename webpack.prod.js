//只在生产环境配置的变量
const { merge } = require('webpack-merge')
const common = require('./webpack.common')
module.exports = merge(common, {
    mode: 'production',
})