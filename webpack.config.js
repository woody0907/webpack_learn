const webpack = require('webpack');

module.exports = {
    entry: __dirname+"/app/main.js",
    output:{
        path:__dirname+"/public",
        filename:"bundle.js"
    },
    devServer:{
        contentBase:__dirname+"/public",
        historyApiFallback:false,
        inline:true
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究')
    ]
}