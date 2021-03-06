const path = require('path');
const CssExtractPlugin = require('extract-text-webpack-plugin');

module.exports = (env) => {
    const isProd = env === 'production';
    const CSSExtract = new CssExtractPlugin('styles.css');

    console.log('env', env);
    return {
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js',
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: CSSExtract.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                    ]
                })
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProd ? 'source-map' : 'inline-source-map', //'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true // serve up the index page when 404
        }
    }
};
