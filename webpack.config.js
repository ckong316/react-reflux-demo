module.exports = {
	entry: './static/index.jsx',
	output: {
		path: './static',
		filename: 'bundle.js',
	},
	module: {
        loaders: [
            {
                //tell webpack to use jsx-loader for all *.jsx files
                test: /\.jsx$/,
                loader: 'jsx-loader?insertPragma=React.DOM&harmony'
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    }
}