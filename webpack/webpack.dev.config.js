const _ = require('lodash')
const DefinePlugin = require('webpack/lib/DefinePlugin')
const commonConfig = require('./webpack.common.config')

const config = _.extend(commonConfig, {
	// devtool: 'eval', // fastest, least-helpful
	// devtool: 'cheap-module-eval-source-map', // medium-fast, medium-helpful
	devtool: 'source-map', // slowest, most-helpful,
	plugins: [
		...commonConfig.plugins,
		new DefinePlugin({
			__DEV__: true,
			mode: 'development',
		}),
	],
})
// console.log('webpack-config=%s', JSON.stringify(config, null, 2))
module.exports = config
