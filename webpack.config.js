const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const SRC_FOLDER = path.resolve(__dirname, 'src');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  entry: `${SRC_FOLDER}/index.jsx`,
  mode: isDevelopment ? 'development' : 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    hot: true,
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_FOLDER,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              isDevelopment && require.resolve('react-refresh/babel'),
            ].filter(Boolean),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Julien Mazé - Senior Software Engineer',
      template: `${SRC_FOLDER}/index.html`,
    }),
    isDevelopment && new ReactRefreshWebpackPlugin(),
  ].filter(Boolean),
};
