const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const pages = ['index', 'me', 'articles'].map(
  name => new HtmlWebpackPlugin({
    title: 'Dylan Do Amaral',
    template: `./src/pages/${name}/${name}.html`,
    //chunks: ['index', 'swup'],
    filename: `${name}.html`
  })
)

module.exports = {
  mode: 'development',
  entry: {
    //swup: './src/logics/swup.js',
    main: './src/main.js',
    //me: './src/pages/me/me.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: __dirname + '/dist'
  },
  plugins: [new CleanWebpackPlugin(), ...pages],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: false,
            removeComments: false,
            collapseWhitespace: false,
            interpolate: true
          }
        }
      }
    ],
  },
};