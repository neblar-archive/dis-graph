const HtmlWebPackPlugin = require('html-webpack-plugin');
const elementName = require('./package.json').name;

const config = {
  entry: {
    polyfill: 'babel-polyfill',
    app: './src/index.js',
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
    ],
  },
};

module.exports = (env, args) => {
  if (args.mode === 'development') {
    config.plugins = [
      new HtmlWebPackPlugin({
        template: './demo/index.html',
        title: 'Dis-Graph Demo',
        elementName,
      }),
    ];
  }

  return config;
};
