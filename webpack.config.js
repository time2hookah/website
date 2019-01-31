var path = require('path');
var webpack = require('webpack');
var VueLoaderPlugin = require('vue-loader/lib/plugin');
const compiler = require('vue-template-compiler')


function resolve (dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    mode: 'development',
    context: path.resolve(__dirname),
    entry: {
        home: './src/homeMain.js',
        wizard: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'public', 'dist'),
        publicPath: './public/dist',
        filename: 'build.js'
    },
    module: {
        rules: [ 
            {   
                test: /\.html$/,
                loader: 'vue-template-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ],
            }, 
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        compiler
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        modules: [
            'node_modules',
            resolve('src')
        ],
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname),
            'src': path.resolve(__dirname, 'src'),
            // 'validators': path.resolve(__dirname, 'node_modules/vuelidate/lib/validators')
        }
    },
    devServer: {
        // historyApiFallback: true,
        index: './public/template/html/home/index.html',
        // noInfo: true,
        // overlay: true,
        hot: true,
        // clientLogLevel: 'none',
        // port: 3000
    },
    performance: {

    },
    devtool: '#eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]);
}
