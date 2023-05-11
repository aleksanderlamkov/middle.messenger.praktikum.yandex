const path = require('path')
const { HotModuleReplacementPlugin } = require('webpack')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, options) => {
  const { mode } = options
  const isDev = mode === 'development'
  let extraParams = {}

  const commonParams = {
    mode,
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'scripts/main.js',
      clean: true,
    },
    target: 'web',
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
      extensions: ['.js', '.ts', '.tsx'],
      modules: ['node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: path.resolve(__dirname, 'tsconfig.json'),
              },
            },
          ],
          exclude: [/(node_modules)/],
        },
        {
          test: /\.(pcss)$/i,
          use: [
            MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
                url: false,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: path.resolve(__dirname, 'postcss.config.js'),
                },
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|gif|svg)($|\?)|\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
          type: 'asset/resource'
        }
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'styles/[name].css',
      }),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        minify: false,
      }),
      new CopyWebpackPlugin({
        patterns: [{
          from: path.resolve(__dirname, './src/assets'),
          to: './assets',
          noErrorOnMissing: true
        }]
      }),
    ],
  }

  if (isDev) {
    extraParams = {
      devServer: {
        static: {
          directory: './dist',
        },
        watchFiles: './src/**/*.{ts, tsx}',
        historyApiFallback: true,
        port: 3000,
        open: true,
        compress: false,
      },
      devtool: 'source-map',
      plugins: [...commonParams.plugins, new HotModuleReplacementPlugin()],
    }
  } else {
    extraParams = {
      plugins: [
        ...commonParams.plugins,
      ],
    }
  }

  return {
    ...commonParams,
    ...extraParams,
  }
}
