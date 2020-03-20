const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'hello-world':'./src/hello-world.js',
        'temple':'./src/temple.js'
    },
    output: {
        filename:'[name].bundle.js',
        path:path.resolve(__dirname,'./dist'),
        publicPath:''
    },
    mode:'development',
    devServer:{
        contentBase:path.resolve(__dirname,'./dist'),
        index:'index.html',
        port:9000
    },
    module: {
        rules:[
            // {
            //     test:/\.(xml)$/,
            //     use:[
            //         'xml-loader'
            //     ]
            // },
            {
                test:/\.(png|jpg)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test:/\.css/,
                use:[
                    'style-loader', 'css-loader'
                ]
            },
            // {
            //     test:/\.css$/,
            //     use:[
            //         MiniCssExtractPlugin.loader,'css-loader'
            //     ]
            // },
            {
                test:/\.scss/,
                use:[
                    'style-loader', 'css-loader', 'sass-loader'
                ]
            },
            // {
            //     test:/\.scss$/,
            //     use:[
            //         MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
            //     ]
            // },
            {
                test:/\.js/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/env'],
                        plugins:['transform-class-properties']
                    }
                }
            },{
                test:/\.hbs$/,
                use:[
                    'handlebars-loader'
                ]
            }
        ]
    },
    plugins:[
        // new TerserPlugin(),
        // new MiniCssExtractPlugin({
            // filename:'styles.[contenthash].css'
        // }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:[
                '**/*',
                path.join(process.cwd(),'build/**/*')
            ]
        }),
        new HtmlWebpackPlugin({
            title: 'Hello World - Learning the webpack 4',
            template:'src/page-template.hbs',
            description:'some awesome description',
            filename:'hello-world.html',
            chunks:['hello-world']
            // meta:{
            //     description: 'some meta description'
            // }
        }),
        new HtmlWebpackPlugin({
            title: 'Temple - Learning the webpack 4',
            template:'src/page-template.hbs',
            description:'some awesome description',
            filename:'temple.html',
            chunks:['temple']
            // meta:{
            //     description: 'some meta description'
            // }
        })
    ] 
}