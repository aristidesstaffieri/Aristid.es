var webpack = require('webpack')

module.exports = {
  context: __dirname + "/",
  entry: {
    javascript: "./src/browser.js",
    html: "./views/index.ejs"
  },
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loaders: ["react-hot", "babel-loader"]
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.ejs$/,
        loader: "ejs-loader?articles=articles"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
        "process.env": {
            BROWSER: JSON.stringify(true)
        }
    })
]
}
