const path = require('path');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: {
    testFunction: path.resolve(__dirname, './src/index.ts')
  },
  output: {
    filename: '[name]/index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
          },
        },
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.json', '.mjs'],
  },
};
