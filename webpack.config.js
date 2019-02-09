module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: __dirname + '/static',
    filename: '[name].[chunkhash:8].js',
  },
}
