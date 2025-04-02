const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  target: "web",
  mode: "development",

  entry: path.resolve(__dirname, "src", "main.js"),
  output:{
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },


  devServer:{
    static:{
      directory: path.join(__dirname, "dist")
    },
    port: 3333,
    open: true,
    liveReload: true,
  },

  plugins: [new HtmlWebPackPlugin({
    template: path.resolve(__dirname, "src", "index.html"),
    
    favicon: path.resolve("src", "assets", "icon-page.svg"),
  }),

  new HtmlWebPackPlugin({
    template: path.resolve(__dirname, "src", "admin.html"),
    filename:"admin.html",
    chunks:["admin"]

  }),

  new CopyWebpackPlugin({
    patterns:[{
      from: path.resolve(__dirname, "src", "assets"),
      to: path.resolve(__dirname, "dist", "src", "assets")
      
    },
  ]
  })
],

module:{
  rules:[
    {
      test: /\.CSS$/i,
      use: ["style-loader", "css-loader"],
    },
  ]
}
}