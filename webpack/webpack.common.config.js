const fs = require('fs')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ProvidePlugin = require('webpack/lib/ProvidePlugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
// const config = require('config')

// https://github.com/lorenwest/node-config/wiki/Webpack-Usage
// const configJson = '../config/client.json'
// fs.writeFileSync(path.resolve(__dirname, configJson), JSON.stringify(config))

module.exports = {
	entry: {
		app: ['./app/index.js'],
	},
	output: {
		path: path.resolve(__dirname, '../build'),
		filename: 'bundle.js',
	},
	plugins: [
		new ProvidePlugin({
			jQuery: 'jquery',
		}),
		new HtmlWebpackPlugin({
			template: 'app/index.html',
			inject: 'body',
		}),
		new FaviconsWebpackPlugin({
			logo: './app/logo.png',
			icons: {
				android: false,
				appleIcon: false,
				appleStartup: false,
				coast: false,
				favicons: true,
				firefox: false,
				opengraph: false,
				twitter: false,
				yandex: false,
				windows: false,
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
			},
			{
				test: /\.woff(2)?(\?v=\d\.\d\.\d)?$/,
				loader: 'url-loader',
			},
			{
				test: /\.(ttf|eot|svg)(\?v=\d\.\d\.\d)?$/,
				loader: 'file-loader',
			},
		],
	},
}
