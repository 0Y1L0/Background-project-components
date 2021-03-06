const path=require('path')
let webpack=require('webpack')
let HtmlWebpackPlugin=require('html-webpack-plugin')
let CleanWebpackPlugin=require('clean-webpack-plugin')
module.exports={
  entry:['babel-polyfill','./src/index.js'],
  output:{
    filename:'bundle.[hash:4].js',
    path:path.resolve(__dirname,'dist')
  },
  plugin:[
    new HtmlWebpackPlugin({
      template:'./src/index.html',
      hash:true,
    }),
    new CleanWebpackPlugin('dist'),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules:[
      {
        text:/\.js$/,
        exclude:/(node_modules)/,
        use:{
          loader:'babel-loader'
        }
      }
    ]
  }
}