const path = require( 'path' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );

const blocksCSSPlugin = new ExtractTextPlugin( {
	filename: './dist/blocks.style.build.css',
} );
const editBlocksCSSPlugin = new ExtractTextPlugin( {
	filename: './dist/blocks.editor.build.css',
} );

// Configuration for the ExtractTextPlugin.
const extractConfig = {
	use: [
		{ loader: 'raw-loader' },
		{ loader: 'extract-loader' },
		{ loader: 'css-loader' },
		{
			loader: 'postcss-loader',
			options: {
				plugins: [ require('autoprefixer') ]
			},
		},
		{
			loader: 'sass-loader',
			options: {
				includePaths: ['./node_modules']
			}
		} ],
};

module.exports = {
	entry: {
		'./dist/blocks.build': './src/blocks.js',
		'./dist/blocks.frontend': './src/frontend.js',
	},
	output: {
		path: path.resolve(__dirname),
		filename: '[name].js'
	},
	externals: {
		wp: 'wp', // Make wp 'importable inside the modules'
		react: 'React', // Using React from WordPress.
		jquery: 'jQuery', // Using jQuery from WordPress.
		'react-dom': 'ReactDOM',
	},
	watch: 'production' !== process.env.NODE_ENV,
	devtool: 'inline-cheap-source-map',
	module: {
		rules: [ {
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
				loader: 'babel-loader',
			},
		},
		{
			test: /style\.s?css$/,
			use: blocksCSSPlugin.extract(extractConfig),
		},
		{
			test: /editor\.s?css$/,
			use: editBlocksCSSPlugin.extract(extractConfig),
		}],
	},
	plugins: [blocksCSSPlugin, editBlocksCSSPlugin]
};
