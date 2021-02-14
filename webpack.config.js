const path = require('path')

module.exports = ['source-map'].map((devtool) => ({
  mode: 'development',
  target: 'node',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'json-random-data-generator-cli.js',
    library: 'json-random-data-generator-cli',
    libraryTarget: 'umd'
  },
  devtool,
  externals: ['fs', 'chalk', 'yargs', 'json-random-data-generator']
}))
