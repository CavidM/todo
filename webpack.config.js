const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: {
      import: path.resolve(__dirname, 'src', 'index.tsx')
    },
    // serviceWorker: {
    //   import: path.resolve(__dirname, 'service-worker.js'),
    //   filename: 'service-worker.js'
    // }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    chunkFilename: '[id].[hash:8].js',
    publicPath: '/'
  },
  devServer: {
    host: '0.0.0.0',
    port: 3007,
    historyApiFallback: true,
    contentBase: path.join(__dirname, 'public'),
    contentBasePublicPath: '/public'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(tsx|ts)?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Progressive web application',
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      React: 'react'
    }),
    new webpack.SourceMapDevToolPlugin({}),
    /*new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      maximumFileSizeToCacheInBytes: 50000000
    }),*/
    // new WorkboxPlugin.InjectManifest({
    //   swSrc: './service-worker.js',
    //   maximumFileSizeToCacheInBytes: 50000000
    // })
  ],
  optimization: {
    runtimeChunk: 'single'
  }
};
