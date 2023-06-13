const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
	  index: './src/index.js',    
	  print: './src/print.js',
  },
  devtool: 'inline-source-map',
  // localhost:8080
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/',
  },
  // we have more than one entrypoint on a single HTML page
  optimization: {
    runtimeChunk: 'single',
  },
};
