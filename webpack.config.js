module.exports =  {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    publicPath: '/public',
    filename: 'bundle.js'
  },
  module: {
    rules: [{ test: /\.js$/, use: 'babel-loader' }]
  },
  plugins: []
};
