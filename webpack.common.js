const path = require('path')

const HtmlWebpackPlugn = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    // entry: './src/index.js',
    entry: {
        index: './src/index.js',
    },
    output: {
        filename: '[name]-[chunkhash]-bundle.js',
        path: path.resolve(__dirname, 'dist'),
        //指定输出参考根路径
        publicPath: '/'
    },
    module: {
        //配置loader
        rules: [
            //处理css的loader
            {
                test: /\.css$/,
                // use: [
                //     "style-loader",
                //     "css-loader"
                // ]
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    "css-loader"
                ]
            },
            //处理图片的loader
            {
                test: /\.(jpg|png|gif)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        //图片大小超过限制10,会生成文件，否则保存为base64文件地址
                        limit: 10
                    }
                }]
            },
            //处理ES5之后的文件
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['env', 'react'],
                        presets: ['env','es2015','react','stage-3'],
                        plugins: [["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }]]
                    }
                }
            }
        ]
    },
    plugins: [
        //生成HTML
        new HtmlWebpackPlugn({
            template: './src/index.html',
            filename: 'index.html',
            // inject: 'head', //设置脚本加载在head标签中，默认是true脚本加载在body结束后的标签中
            //生成的文件添加一个唯一的hash值
            hash: true,
            //生成的html中引进入口文件的打包资源
            chunks: ['about', 'content', 'index']
        }),
        //生成单独的css文件
        new MiniCssExtractPlugin({
            //设置保存路径及生成后的名称
            filename: 'resource/[name]-[chunkhash].css'
        }),
        // 保存最新文件，自动清理旧文件
        new CleanWebpackPlugin()
    ]
}