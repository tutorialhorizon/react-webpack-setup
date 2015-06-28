var path = require('path'),
  CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");

var entry = {
  index: './client/js/pages/Index.jsx',
  anotherPage: './client/js/pages/AnotherPage.jsx'
};

var output = {
  path: path.join(__dirname, '../public/assets/js'),
  filename: '[name].js'
};

var plugins = [
  new CommonsChunkPlugin("common.js") // Helps identify common parts of a require hierarchy
];

var webpackModules = {
  loaders: [
    { jsx: /\.js$/, exclude: /node_modules/, loader: "babel-loader" } // loaders can take parameters as a querystring
  ]
};

module.exports = {
  dev: {
    entry: entry,
    output: output,
    plugins: plugins,
    module: webpackModules,

    // Configure the console output
    stats: {
      colors: true,
      modules: true,
      reasons: true
    },
    progress: true,
    keepalive: true,
    watch: true,
    devtool: 'source-map',
    bail: true,
    watchDelay: 3000
  },

  // Exclude any dev like configuration for any production like env
  prerelease: {
    entry: entry,
    output: output,
    plugins: plugins,
    module: webpackModules
  }
};
