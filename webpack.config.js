const webpack = require("webpack");
const path = require("path");
const {VueLoaderPlugin} = require("vue-loader");
const htmlPlugin = require("html-webpack-plugin");

const isDev = process.env.NODE_ENV ==='development';

const config = {
    target:'web',
    entry:path.join(__dirname,"/src/main.js"),
    output:{
        path:path.join(__dirname,"/dist"),
        filename:'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader',
                ]
            }
            
        ]
    },
    mode:'development',
    plugins:[
        new htmlPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new VueLoaderPlugin()
    ],
    resolve:{
        extensions:['.js','.vue'],
        alias:{
            '@components':path.join(__dirname,"./src/components/"),
            '@router':path.join(__dirname,"./src/routers/"),
            '@assets':path.join(__dirname,"./src/assets/"),
            'vue$': 'vue/dist/vue.esm.js',
        }
    }
}
if(isDev){
    config.devServer ={
        host:'127.0.0.1',
        port:8899,
        overlay:{
            errors: true
        },
        hot:true
    }
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin()
    )
}
module.exports = config;