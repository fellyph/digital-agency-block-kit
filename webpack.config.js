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
	use: [ {
		loader: 'raw-loader'
	},
	{
		loader: 'postcss-loader',
		options: {
			plugins: [ require('autoprefixer') ],
		},
	},
	{
		loader: 'sass-loader',
		query: {
			outputStyle: 'compressed',
		},
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
		react: 'React', // React itself is there in Gutenberg.
		jquery: 'jQuery', // import $ from 'jquery' // Use the WordPress version after enqueuing it.
		'react-dom': 'ReactDOM',
	},
	watch: 'production' !== process.env.NODE_ENV,
	devtool: 'cheap-module-source-map',
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
