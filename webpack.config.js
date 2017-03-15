module.exports =  {
  entry: './src',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015',{ "modules": false }],
        },
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css?modules'],
      },
    ],
  },
  plugins: []
};
