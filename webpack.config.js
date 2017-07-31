const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry:path.resolve(__dirname,'app/index.js'),
	output:{
		filename:"bundle.js"
	},
	module:{
		rules:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				include:[
					path.resolve(__dirname,'app')
				],
				use:{
					loader:'babel-loader',
					options:{
						presets:['es2015','react']
					}
				}
			},{
				test:/\.less$/,
				use:[
					'style-loader',
					'css-loader',
					'less-loader'
				]
			},{
				test:/\.(png|gif|jpg|jpeg|bmp)$/i,
				use:['url-loader?limit=5']
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname + '/app/index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer:{
		inline:true,
		hot:true,
		port:1741
	}
}
