const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env) => {
  const isProd = env === 'production';
  const isDev = env === 'development';
  const CLI_DIR = path.join(__dirname, './client');
  const DIST_DIR = path.join(__dirname, './client/dist');

  const HTMLPlugin = new HtmlWebpackPlugin({
    template: `${CLI_DIR}/index.html`,
    filename: `${DIST_DIR}/index.html`,
    chunksSortMode: 'none',
  });

  const config = {};

  config.entry = `${CLI_DIR}/src/App.jsx`;
  config.output = {
    path: DIST_DIR,
    filename: 'bundle.js',
  };

  config.module = {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          require.resolve('style-loader'),
          {
            loader: require.resolve('css-loader'),
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.(png)$/i,
        loaders: [
          'file-loader',
          'webp-loader'
        ]
      },
    ]
  };

  config.plugins = [HTMLPlugin];

  config.resolve = {
    extensions: ['.js', '.jsx'],
  };

  if (isDev) {
    config.output = {
      path: DIST_DIR,
      chunkFilename: '[name].bundle.js',
      filename: '[name].bundle.js',
    };

    config.mode = 'development';
    config.devtool = 'inline-source-map';

    config.devServer = {
      contentBase: DIST_DIR,
    };
  }

  return config;
}