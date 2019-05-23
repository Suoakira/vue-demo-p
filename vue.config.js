
// Webpack plugins
const WebpackShellPlugin = require('webpack-shell-plugin');
// Variables
const extensionShortName = 'com.integnity.masterapp';
const buildFolder_local = '/build/';
const buildFolder_main = './../build/';
const devFolder_local = '/dev/';
const devFolder_main = './../dev/';

module.exports = {
		lintOnSave: false,
        configureWebpack: {
            output: {
                // fix this syntax
                // path: __dirname + buildFolder_main + extensionShortName,
                // publicPath: './'
			},
			devtool: 'source-map',
            plugins: [
                // Chain events to start/end
                // new WebpackShellPlugin({
                //     onBuildStart:['echo "Webpack Start"'],
                //     onBuildEnd:['node ./build-scripts/distribute-files.js']
				// })
            
			], // end plugins
        }
}