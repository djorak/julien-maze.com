const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_FOLDER = path.resolve(__dirname, 'src');

module.exports = {
  entry: `${SRC_FOLDER}/index.jsx`,
  mode: process.env.NODE_ENV === 'dev' ? 'development' : 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Julien Mazé - Senior Software Engineer',
      template: `${SRC_FOLDER}/index.html`,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: SRC_FOLDER,
        use: { loader: 'babel-loader' },
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
