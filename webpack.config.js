
var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
// var LessPluginCleanCSS = require('less-plugin-clean-css');
// var lessPluginCleanCSS =new LessPluginCleanCSS({advanced: true});
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  cache: true,
  entry: {
    main:  './src/index.jsx',
    other: './src/other.jsx',
    html: ['./views/index.jade'],
    // frameworks: './assets/less/frameworks.less',
    // sty:['./assets/less/frameworks.less','./assets/less/style.less']
    style:['./assets/less/frameworks.less','./assets/less/style.less']

    
  },
  output: {
    path: 'public/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "jsx-loader",
        query: "harmony"
      },
      {
        test: /\.js$/,
        loader: "jsx-loader",
        query: "harmony"
      },
      {
        test: /\.jade$/,
        loader: 'file?name=index.html!jade-html?{"title":"GOD","question":"a good day 2","sel":["fox","dog","elephant"]}'
      },
      {
         test: /\.css$/,
         loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
            // Optionally extract less files
            // or any other compile-to-css language
      {
         test: /\.less$/,
         loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
      },
  	  { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  },
  plugins: [
    definePlugin,
    commonsPlugin,
    new ExtractTextPlugin("[name].css")
    // lessPluginCleanCSS
  ]
};