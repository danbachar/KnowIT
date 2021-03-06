const webpack = require('webpack');
const helpers = require('./helpers');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const HtmlElementsPlugin = require('./html-elements-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const METADATA = {
  title: 'KnowIT Online',
  baseUrl: '/',
  isDevServer: helpers.isWebpackDevServer()
};

module.exports = {
  metadata: METADATA,
  entry: {

    'polyfills': './app/polyfills.ts',
    'vendor':    './app/vendor.ts',
    'main':      './app/main.ts'

  },
  resolve: {
    root: [
      helpers.root('app')
    ],
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.json', '.css', '.html', '.ico', '.svg'],
    modules: [helpers.root('app'), helpers.root('node_modules')],
    modulesDirectories: ['node_modules']
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: 'source-map-loader',
        exclude: [
          helpers.root('node_modules/rxjs'),
          helpers.root('node_modules/@angular'),
          helpers.root('node_modules/@ngrx'),
          helpers.root('node_modules/@angular2-material')
        ]
      }
    ],
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
        exclude: [/\.(spec|e2e|d)\.ts$/]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.css$/, loader: ExtractTextPlugin.extract({
        fallbackLoader: "style-loader",
        loader: "css-loader"
      })
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
      },
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&minetype=application/octet-stream"
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&minetype=image/svg+xml"},
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'file'
      }
    ]
  },
  plugins: [
    new ForkCheckerPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['polyfills', 'vendor'].reverse()
    }),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      chunksSortMode: 'dependency',
      favicon: 'app/vendor/images/favicon.svg'
    }),
    new HtmlElementsPlugin({
      headTags: require('./head-config.common')
    }),
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
      __dirname
    ),
    new ExtractTextPlugin("styles.css")
  ],
  node: {
    global: 'window',
    crypto: 'empty',
    process: true,
    module: false,
    clearImmediate: false,
    setImmediate: false
  }
};
