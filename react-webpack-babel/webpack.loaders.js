module.exports = [
	{
		test: /\.jsx?$/,
		exclude: /(node_modules|bower_components|public\/)/,
		loader: "babel-loader"
	},
	{
		test: /\.(css)$/,
		loaders: ["style-loader", "css-loader?importLoaders=1"]
	},
	{
		test: /\.(eot|ttf|woff|woff2|svg|gif|jpg|png)/,
		loader: "file-loader"
	}
];
