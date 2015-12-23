module.exports = {
    entry: "./src/index.jsx",
    output: {
        path: __dirname,
        filename: "./public/bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {test: /\.jsx$/, loader: 'jsx-loader?harmony'},
            {test: /\.js$/ , loader: 'jsx-loader?harmony'}
        ]
    }
};