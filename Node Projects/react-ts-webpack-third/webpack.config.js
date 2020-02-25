const path = require('path');

function createCommonConfig() {
    return {
        resolve: {
            // Add '.ts' and '.tsx' as resolvable extensions.
            extensions: [".ts", ".tsx", ".js", ".jsx"]
        },

        module: {
            rules: [
                {
                    test: /\.ts(x?)$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ]
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                {
                    enforce: "pre",
                    test: /\.js$/,
                    loader: "source-map-loader"
                }
            ]
        },

        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public/js')
        }
    };
}

module.exports = function(env, argv) {
    var commonConfig = createCommonConfig();

    if (env && env.prod) {
        commonConfig.mode = "production";
    } else {
        commonConfig.mode = "development";
        //commonConfig.devtool = "inline-source-map";
    }

    return commonConfig;
};

