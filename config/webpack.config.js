const path = require('path');
module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname,'../src/index.js'),
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: 'root.js',
    },
    module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            configFile: path.resolve(__dirname, '.babelrc'),
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  watch: true,
};
