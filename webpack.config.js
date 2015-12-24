// module.exports = {
//     entry: "./src/index.jsx",
//     output: {
//         path: __dirname,
//         filename: "./public/bundle.js"
//     },
//     module: {
//         loaders: [
//             { test: /\.css$/, loader: "style!css" },
//             {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
//             {test: /\.js$/ , loader: 'jsx-loader?harmony'}
//         ]
//     }
// };
var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
  __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
  cache: true,
  entry: {
    main:  './src/index.jsx',
    other: './src/other.jsx',
    html: './views/index.jade',
    
  },
  output: {
    path: 'public/build',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
      {test: /\.js$/ , loader: 'jsx-loader?harmony'},
      {test: /\.jade$/ , loader: 'file?name=index.html!jade-html'},

    ]
  },
  plugins: [
    definePlugin,
    commonsPlugin
  ]
};