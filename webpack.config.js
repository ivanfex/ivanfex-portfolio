const webpack = require('webpack')

module.exports = {
	entry: './browser/app.js',
	mode: 'development',
	output: {
		path: `${__dirname}/public`,
		filename: 'bundle.js'
	},
	devtool: 'source-maps',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
				  'file-loader',
				  {
					loader: 'image-webpack-loader',
					options: {
					  bypassOnDebug: true, // webpack@1.x
					  disable: true, // webpack@2.x and newer
					},
				  },
				],
			}
		]
	}
}
